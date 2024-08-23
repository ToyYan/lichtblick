import { _electron as electron, test, expect } from '@playwright/test';

test.describe('Electron App Tests', () => {
  let electronApp: any;

  test.beforeAll(async () => {
    // Launch Electron application with the path to your Electron binary
    electronApp = await electron.launch({
      args: ['dist/lichtblick-1.3.2-win.exe'], // Replace with the correct path to your Electron app
    });
  });

  test.afterAll(async () => {
    await electronApp.close();
  });

  test('should load the main window', async () => {
    const window = await electronApp.firstWindow();
    const title = await window.title();
    expect(title).toBe('Expected Title'); // Replace with your expected window title
  });

  test('should have a specific element', async () => {
    const window = await electronApp.firstWindow();
    const element = await window.$('#element-id'); // Replace with your element selector
    expect(element).not.toBeNull();
  });
});
