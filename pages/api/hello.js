import path from "path";
const puppeteer = require("puppeteer");

export default async function (req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");
  const imageBuffer = await page.screenshot();

  await browser.close();
  res.setHeader("Content-Type", "image/jpg");
  res.send(imageBuffer);
}
