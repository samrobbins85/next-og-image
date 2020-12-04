import path from "path";
const puppeteer = require("puppeteer");
import absoluteUrl from "next-absolute-url";

export default async function (req, res) {
  const {
    query: { title },
  } = req;
  const { origin } = absoluteUrl(req, "localhost:3000");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(origin + "/" + title);
  await page.setViewport({ width: 1200, height: 627 });
  const imageBuffer = await page.screenshot();

  await browser.close();
  res.setHeader("Content-Type", "image/jpg");
  res.send(imageBuffer);
}
