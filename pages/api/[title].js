import absoluteUrl from "next-absolute-url";
const chromium = require("chrome-aws-lambda");

export default async function (req, res) {
  const {
    query: { title, dark },
  } = req;
  const { origin } = absoluteUrl(req, "localhost:3000");
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto(origin + "/" + title + (dark === "true" ? "?dark=true" : ""));
  await page.setViewport({ width: 1200, height: 627 });
  const imageBuffer = await page.screenshot();

  await browser.close();
  res.setHeader("Content-Type", "image/jpg");
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=2592000, max-age=2592000`
  );
  res.send(imageBuffer);
}
