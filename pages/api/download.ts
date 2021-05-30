// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({ headless: true,  args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const url = "https://resuminator-next.netlify.app/resume";

  await page.goto(url, {
    waitUntil: "domcontentloaded",
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

  await browser.close();
  res.setHeader("Content-Type", "application/pdf");
  res.status(200).send(pdf);
};
