import chromium from "chrome-aws-lambda";
import { Browser } from "puppeteer-core";
import loadFonts from "./fontLoader";

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
  await loadFonts(chromium);
  return await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: chromium.headless,
  });
};
