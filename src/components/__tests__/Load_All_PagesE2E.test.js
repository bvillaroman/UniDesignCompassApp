import React from "react";
import puppeteer from "puppeteer";



beforeAll(async () => {
  // browser = await puppeteer.launch({
  //   args:['--no-sandbox','--disable-setuid-sandbox'],
  //   headless: false,
  // });
  // page = await browser.newPage();
  // await page.setViewport({ width, height });
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
   let browser = await puppeteer.launch({
      args:['--no-sandbox','--disable-setuid-sandbox'],
      headless: true,
    });
    let page = await browser.newPage();
    let width=1000
    let height = 1000
    await page.setViewport({width,height} );
    //await page.setViewport({ width, height });
    await page.goto('https://www.bvillaroman.com/UniDesignCompassApp/');
    //const logout = await page.$eval("a[rel=logout]", res=>res.click());


    //Logs Into Rdiaz01 profile
    await page.waitForSelector("a[rel=login]");
    await page.$eval("a[rel=login]", res=>res.click());
    await page.waitForSelector("input[id=username]");
    await page.click("input[id=username]");
    await page.type("input[id=username]", "rdiaz01");
    await page.click("input[id=password]");
    await page.type("input[id=password]", "Holder1423!@#$");
    await page.$eval("button[type=submit]",res=>res.click());
    await page.waitForSelector("a[rel=profile]")

    //GOes into the profile page
    await page.$eval("a[rel=profile]",res=>res.click());

    // await page.waitForSelector("a[data-rb-event-key=settings]")
    // await page.$eval("a[data-rb-event-key=settings]",res=>res.click());
    //
    // await page.waitForSelector("a[rel=compass]")
    // await page.$eval("a[rel=compass]",res=>res.click());
    //
    // await page.$eval("a[rel=create]",res=>res.click());
    //
    // await page.$eval("a[rel=analytics]",res=>res.click());

    await page.$eval("a[rel=logout]",res=>res.click());
    browser.close();
  },160000)

});
