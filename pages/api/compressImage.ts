/*
	Resuminator, Web App and the Website for Resuminator
	Copyright (C) 2021 Resuminator Authors

	This file is part of Resuminator.

	Resuminator is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Resuminator is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/
import { NextApiHandler } from 'next';
import formidable from 'formidable';
const fs = require('fs');
const sharp = require('sharp');

const MIN_QUALITY_LEVEL = 2;
const MAX_QUALITY_LEVEL = 100;

const compress = async (options: {
	inputFileBuffer: Buffer,
	outputFileType: string,
	qualityLevel: number,
}) => {
	// Using sharp to compress the image
	const { inputFileBuffer, outputFileType, qualityLevel } = options;
	const inputImage = sharp(inputFileBuffer);
	if (outputFileType === 'png') {
		return inputImage.png({ quality: qualityLevel }).toBuffer();
	} else if (outputFileType === 'webp') {
		return inputImage.webp({ quality: qualityLevel }).toBuffer();
	} else {
		return inputImage.jpeg({ quality: qualityLevel }).toBuffer();
	}
};

const getCompressedImage = async (options: {
	inputFileBuffer: Buffer,
	outputFileType: string,
	maxFileSize: number,
}) => {
	const { inputFileBuffer, outputFileType, maxFileSize } = options;

	let minQualityLevel = MIN_QUALITY_LEVEL;
	let maxQualityLevel = MAX_QUALITY_LEVEL;
	let outputBuffer: Buffer;
	let lastCorrectOutputBuffer: Buffer;

	// Looping through the quality levels to find the best quality level
	// that can be used to compress the image to the desired size
	// Using Binary Search to find the best quality level to save the complexity
	while (minQualityLevel <= maxQualityLevel) {
		const qualityLevel = Math.floor((minQualityLevel + maxQualityLevel) / 2);

		try {
			outputBuffer = await compress({
				inputFileBuffer,
				outputFileType,
				qualityLevel,
			});
		} catch (error) {
			break;
		}

		if (outputBuffer.length <= maxFileSize) {
			lastCorrectOutputBuffer = outputBuffer;
			minQualityLevel = qualityLevel + 1;
		} else {
			maxQualityLevel = qualityLevel - 1;
		}

		if (qualityLevel <= MIN_QUALITY_LEVEL) {
			lastCorrectOutputBuffer = outputBuffer;
			break;
		}
	}
	return lastCorrectOutputBuffer;
};

const compressImage: NextApiHandler = async (req, res) => {

	// Check if the request method is POST and return if not
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).send({
			data: null,
			error: "Method Not Allowed",
		});
	}

	// Parsing the body using formidable because had to disable the default body parser
	// as it does not supports file uploads in the body.
	const form = new formidable.IncomingForm({
		keepExtensions: true,
	});
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).send({
				error: 'Image data not received',
			});
		}
		const { requiredOutputFormat, maxFileSize } = fields;

		// Getting the temporary file path from the formidable to get the buffer
		const filePath = files.file.filepath;

		// Get the file buffer from the file path
		fs.readFile(filePath, async (err: Error | null, data: Buffer) => {
			if (err) {
				return res.status(400).send({
					data: null,
					error: 'Error while reading the file',
				});
			} else {
				const fileBuffer = data;
				const compressedBuffer = await getCompressedImage({
					inputFileBuffer: fileBuffer,
					outputFileType: Array.isArray(requiredOutputFormat) ? requiredOutputFormat[0] : requiredOutputFormat,
					maxFileSize: Number(maxFileSize),
				});
				if (compressedBuffer) {

					// Uncomment this to save the compressed image to the disk
					// This can be used to test the compression

					// fs.writeFile('./HOLA/temp.jpeg', compressedBuffer, { encoding: 'binary' }, (err: any) => {
					// 	if (err) {
					// 		console.log(err);
					// 	} else {
					// 		console.log("The file was saved!");
					// 	}
					// });
					res.setHeader('Content-Type', 'image/jpeg');
					res.end(compressedBuffer, 'binary');
					return;

				} else {
					return res.status(400).send({
						data: null,
						error: 'Image compression failed',
					});
				}
			}
		});

	});
}

// This is required to disable the default body parser
// Had to disable the default body parser
// as it does not supports file uploads in the body
export const config = {
	api: {
		bodyParser: false,
	},
};

export default compressImage;