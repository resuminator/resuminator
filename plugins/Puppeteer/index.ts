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

  //{__dirname} in prod = /var/task/.next/server/pages/api
  await chromium.font(`${__dirname}/_fonts/Inter-Regular.ttf`)
  await chromium.font(`${__dirname}/_fonts/Inter-Medium.ttf`)
  return await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: chromium.headless,
  });
};
