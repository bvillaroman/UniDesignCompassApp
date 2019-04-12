import React from "react";
import puppeteer from "puppeteer";

const APP = "localhost:8000";
let page;
let browser;
const width = 800;
const height = 1000;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe("Application rundown", () => {
  test("about page is be present", async () => {
    await page.goto(`${APP}`);
    const canonical = await page.$eval("a[rel=about]", el => el.href);
    expect(canonical).toEqual("http://localhost:8000/About");
    await page.click("a[rel=about]");
  }, 16000);
  // unfinished
});
