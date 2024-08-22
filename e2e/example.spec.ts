import { test, expect } from '@playwright/test';

const { _electron } = require('playwright');


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// FIXME:  Documenting how electron apps works but this test needs to be fixed

// test('example test', async () => {
//   const electronApp = await _electron.launch({ args: ['.'] })
//   const isPackaged = await electronApp.evaluate(async ({ app }) => {
//     // This runs in Electron's main process, parameter here is always
//     // the result of the require('electron') in the main app script.
//     return app.isPackaged
//   })

//   expect(isPackaged).toBe(false)

//   // Wait for the first BrowserWindow to open
//   // and return its Page object
//   const window = await electronApp.firstWindow()
//   await window.screenshot({ path: 'intro.png' })

//   // close app
//   await electronApp.close()
// })
