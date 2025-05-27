const puppeteer = require('puppeteer');
const path = require('path');

describe('Basic Page Load', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    // Construct the file URL path to index.html
    // Assumes the script is run from the root of the project
    const filePath = path.resolve(__dirname, '../../../index.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the correct page title', async () => {
    await expect(page.title()).resolves.toMatch('AoE Villager Reminder');
  });

  it('should display the main heading', async () => {
    // Using expect-puppeteer syntax
    await expect(page).toMatchElement('h1', { text: 'AoE Villager Reminder' });
  });
});
