import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: ['--disable-cache', '--disk-cache-size=0']
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

await context.clearCookies();

const page = await context.newPage();

// Navigate and wait only for DOMContentLoaded, NOT networkidle
await page.goto('http://localhost:4325/pages/magento-mobile-app', {
  waitUntil: 'domcontentloaded'
});

console.log('DOMContentLoaded fired. NOT waiting for networkidle.');

// Do NOT scroll at all before clicking

// Find "Book a Demo" link in the nav that links to #get-started
const bookDemoLink = page.locator('nav a[href="#get-started"]').first();
const linkText = await bookDemoLink.textContent();
console.log(`Found nav link: "${linkText.trim()}"`);

await bookDemoLink.click();
console.log('Clicked "Book a Demo"');

// Wait 2 seconds for scroll + images to settle
await page.waitForTimeout(2000);

// Take screenshot
await page.screenshot({ path: '/tmp/scroll-test-result.png', fullPage: false });
console.log('Screenshot saved to /tmp/scroll-test-result.png');

// Log scroll diagnostics
const diagnostics = await page.evaluate(() => {
  const el = document.getElementById('get-started');
  if (!el) return { error: '#get-started not found' };
  const rect = el.getBoundingClientRect();
  return {
    windowScrollY: window.scrollY,
    getBoundingClientRectTop: rect.top,
    getBoundingClientRectBottom: rect.bottom,
    offsetTop: el.offsetTop,
    viewportHeight: window.innerHeight,
  };
});

console.log('\n--- Scroll Diagnostics ---');
if (diagnostics.error) {
  console.log('ERROR:', diagnostics.error);
} else {
  console.log('window.scrollY:', diagnostics.windowScrollY);
  console.log('#get-started getBoundingClientRect().top:', diagnostics.getBoundingClientRectTop);
  console.log('#get-started getBoundingClientRect().bottom:', diagnostics.getBoundingClientRectBottom);
  console.log('#get-started offsetTop:', diagnostics.offsetTop);
  console.log('Viewport height:', diagnostics.viewportHeight);

  const isVisible =
    diagnostics.getBoundingClientRectTop < diagnostics.viewportHeight &&
    diagnostics.getBoundingClientRectBottom > 0;
  const isNearTop =
    diagnostics.getBoundingClientRectTop >= -50 &&
    diagnostics.getBoundingClientRectTop <= 150;

  console.log('\n--- Visibility Assessment ---');
  console.log('FinalCTA (#get-started) visible in viewport:', isVisible);
  console.log('FinalCTA near top of viewport (within 150px):', isNearTop);

  if (isVisible) {
    console.log('RESULT: PASS - Green FinalCTA section IS visible in viewport after click.');
  } else {
    console.log('RESULT: FAIL - Green FinalCTA section is NOT visible in viewport after click.');
    console.log(`  rect.top=${diagnostics.getBoundingClientRectTop} — section is ${diagnostics.getBoundingClientRectTop > 0 ? 'BELOW' : 'ABOVE'} the viewport`);
  }
}

await browser.close();
