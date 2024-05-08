import { test, expect } from "@playwright/test";

  test("images download successfully", async ({ page }) => {
    await page.goto("https://relqtechnologies.com/contact");
    
    page.on('response', response => {
      if (response.url().toString().includes('About_Us_Image_Modified.jpg')){
        expect(response.status()).toEqual(200);
      }

      if (response.url().toString().includes('dummy.png')){
        expect(response.status()).toEqual(200);
      }

      if (response.url().toString().includes('relq180-copy.png')){
        expect(response.status()).toEqual(200);
      }

      if (response.url().toString().includes('services-1.jpg')){
        expect(response.status()).toEqual(200);
      }

      if (response.url().toString().includes('services-2.jpg')){
        expect(response.status()).toEqual(200);
      }

      if (response.url().toString().includes('services-4.jpg')){
        expect(response.status()).toEqual(200);
      }

      if (response.url().toString().includes('services-5.jpg')){
        expect(response.status()).toEqual(200);
      }

    })

  });

  // test("images are visible", async ({ page }) => {
  //   await page.goto("https://relqtechnologies.com/contact");
    
  //   const images = page.getByRole('img').all();
   
  //   (await images).forEach((image) => {
  //     expect(image).not.toBeVisible();
  //   });
  // });