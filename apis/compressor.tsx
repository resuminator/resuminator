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
import getHeaders from "../utils/headers";

export const getCompressedFile = async (token: string, fileData: {
	inputFile: File;
	requiredOutputFormat: string;
	maxFileSize: number;
}) => {

	try {
		// Changing the body to a FormData object to send the file
		// Without doing this, we can't send the file to the server
		const formData = new FormData();
		formData.append("file", fileData.inputFile);
		formData.append("requiredOutputFormat", fileData.requiredOutputFormat);
		formData.append("maxFileSize", fileData.maxFileSize.toString());

		const headers = Object.assign({}, getHeaders(token));

		const { message, buffer } = await fetch(
			'/api/compressImage', {
			method: 'POST',
			body: formData,
			headers,
		}).then(async response => {
			if (response.ok) {
				const finalBuffer = await response.arrayBuffer();
				return { message: 'success', buffer: finalBuffer };
			} else {
				const responseBody = await response.json();
				return { message: responseBody?.error || 'error', buffer: null }

			}
		});
		return { message, buffer };
	} catch (error) {
		return { message: error, buffer: null };
	}
};
