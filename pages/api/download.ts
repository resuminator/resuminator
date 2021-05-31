// import express from "express";
import chromium from "chrome-aws-lambda";
// import puppeteer from "puppeteer";
// const router = express.Router();

//TO BE USED WITH AWS-GCP
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
  });
};

export default async (req, res) => {
  const url = "https://resuminator-next.netlify.app/resume";
  if (!url || !url.trim()) {
    res.status(400).json({ message: "No valid url found" });
    return;
  }

  const browser = await getBrowserInstance();

  try {
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      printBackground: true,
      format: "a4",
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    });

    res.setHeader("Content-Type", "application/pdf");
    res.status(200).send(pdf);
    console.info("[SUCCESS] PDF Generated");
  } catch (e) {
    console.error("[ERROR] PDF Generation Failed");
    return res.status(500).json(e);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};
