const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const PORT = 8100;
const DIR = 'public';
const PDF_PATH = 'public/static';

const app = express();
app.use(express.static(DIR));

const server = app.listen(PORT, () => {
  console.log(
    `Hosting "${DIR}" on 127.0.0.1:${PORT}. This server is only running for generating PDF file from my resume.`
  );

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/resume`, {
      waitUntil: 'networkidle2',
    });

    // const date = new Date();
    // const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    const fileName = `AmirHosseinMafi-Resume.pdf`;
    await page.pdf({
      path: path.join(PDF_PATH, fileName),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    await browser.close();
    server.close();
  })();
});
