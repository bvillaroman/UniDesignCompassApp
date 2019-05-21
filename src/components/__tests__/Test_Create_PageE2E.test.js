import React from "react";
import puppeteer from "puppeteer";

describe( "Create Tests",()=>{
    test("Create New Compass", async ()=>{
    let browser = await puppeteer.launch({
      args:['--no-sandbox','--disable-setuid-sandbox'],
      headless: false,
    });
    let page = await browser.newPage();
    let width = 1000
    let height = 1000
    await page.setViewport({width,height} );
    await page.goto('https://www.bvillaroman.com/UniDesignCompassApp/');
    await page.waitForSelector("a[rel=login]");
    await page.$eval("a[rel=login]", res=>res.click());
    await page.waitForSelector("input[id=username]");
    await page.click("input[id=username]");
    await page.type("input[id=username]", "rdiaz01");
    await page.click("input[id=password]");
    await page.type("input[id=password]", "Holder1423!@#$");
    await page.$eval("button[type=submit]",res=>res.click());
    await page.waitForSelector("a[rel=create]");
    await page.$eval("a[rel=create]",res=>res.click());
    await page.waitForSelector("button[id=Default]");
    await page.$eval("button[id=Default]",res=>res.click());
    browser.close();
  },160000)
})
