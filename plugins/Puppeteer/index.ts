import chromium from "chrome-aws-lambda";
import { Browser } from "puppeteer-core";

export const getBrowserInstance = async (): Promise<Browser> => {
  const executablePath = await chromium.executablePath;
  
  if (!executablePath) {
    const puppeteer = require("puppeteer");
    return await puppeteer.launch({
      args: chromium.args,
      headless: true,
      ignoreHTTPSErrors: true,
    });
  }

  await chromium.font(`/fonts/Inter-Regular.ttf`)
  await chromium.font(`/fonts/Inter-Medium.ttf`)
  return await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: chromium.headless,
  });
};
