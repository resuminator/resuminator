import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { SELF } from "../../config/lambda";
import { getBrowserInstance } from "../../plugins/Puppeteer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  /** Load the required browser instance
   * Headless Chrome for Prod
   * Puppeteer for Dev
   */
  const browser = await getBrowserInstance();
  try {
    //Load the id and the token from the request query and headers.
    const id = req.query.id.toString();
    const token = req.headers.authorization;

    //If no id or token, return 401
    if (!id || !token)
      return res.status(401).json({ message: "Invalid Request" });

    //Define the URL based on the ID to get the resume.
    const url = `${SELF}/resume/${id}`;

    //Load the browser page and
    const page = await browser.newPage();

    //Set headers like `token` from the token received from the request.
    page.setExtraHTTPHeaders({
      token,
    });
    //Set User Agent to decide the strategy for extracting the token
    page.setUserAgent("HeadlessChrome/91.0 R8 Puppeteer");

    //Go to the URL till content has loaded
    await page.goto(url, {
      waitUntil: "load",
    });

    const file = await page.pdf({
      printBackground: true,
      format: "a4",
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
      pageRanges: "1",
    });
    console.log("File Generated", new Date().toLocaleTimeString());

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", file.length);
    res.status(200).send(file);
    console.info("[SUCCESS] PDF Generated");
  } catch (e) {
    console.error("[ERROR] PDF Generation Failed");
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};

export default withSentry(handler);
