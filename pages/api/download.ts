// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";

const getBrowserInstance = async () => {
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    const puppeteer = require("puppeteer");
    return await puppeteer.launch({
      args: chromium.args,
      headless: true,
      ignoreHTTPSErrors: true,
    });
  }

  return await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://resuminator-next.netlify.app/resume";
  if (!url || !url.trim()) {
    res.status(400).json({ message: "No valid url found" });
    return;
  }

  let pdf = null;
  let browser = null;

  try {
    browser = await getBrowserInstance();
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    pdf = await page.pdf({
      printBackground: true,
      format: "a4",
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    });
  } catch (e) {
    return res.status(500).json(e);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  await browser.close();
  res.setHeader("Content-Type", "application/pdf");
  res.status(200).send(pdf);
};
