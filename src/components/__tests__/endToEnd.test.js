import React from "react";
import puppeteer from "puppeteer";

const APP = "localhost:8000";
let page;
let browser;
const width = 1000;
const height = 1000;

beforeAll(async () => {
  browser = await puppeteer.launch({
    args:['--no-sandbox','--disable-setuid-sandbox'],
    headless: true,
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
// const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({path: 'example.png'});
//   browser.close();



describe("Application rundown", () => {
  // test("about page is be present", async () => {
  //   await page.goto(`${APP}`);
  //   const canonical = await page.$eval("a[rel=about]", el => el.href);
  //   expect(canonical).toEqual("http://localhost:8000/About");
  //   await page.click("a[rel=about]");
  //   await page.click("a[rel=login]");
  //   // try logging in
  //   await page.click("input[id=username]");
  //   await page.type("input[id=username]", "JaneDoe");
  //   await page.click("input[id=password]");
  //   await page.type("input[id=password]", "isPlain");
  // }, 16000);

  test("Load Profile Page", async ()=>{
    //await page.setViewport({ width, height });
    await page.goto('http://localhost:8000/');
    //const logout = await page.$eval("a[rel=logout]", res=>res.click());
  

    //Logs Into Rdiaz01 profile 
    await page.$eval("a[rel=login]", res=>res.click());
    await page.click("input[id=username]");
    await page.type("input[id=username]", "rdiaz01");
    await page.click("input[id=password]");
    await page.type("input[id=password]", "Holder1423!@#$");
    await page.$eval("button[type=submit]",res=>res.click());
    await page.waitForNavigation();


    //GOes into the profile page 
    await page.$eval("a[rel=profile]",res=>res.click());
    await page.waitForNavigation();
    await page.$eval("a[data-rb-event-key=Settings]",res=>res.click());

    //Goes to the Compass Page
    await page.$eval("a[rel=compass]",res=>res.click());
    //Goes to Analytics page
    await page.$eval("a[rel=analytics]",res=>res.click());
    //Goes to Aboust Us
    //await page.$eval("a[rel=about]",res=>res.click());
    
  },160000)
  // unfinished

});
