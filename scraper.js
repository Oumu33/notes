const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const BASE_URL = 'https://www.cuiliangblog.cn';
const OUTPUT_DIR = './cuiliangblog_notes';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeNotes() {
  console.log('启动浏览器...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 设置请求拦截，捕获API调用
  const apiCalls = [];
  await page.setRequestInterception(true);
  page.on('request', request => {
    const url = request.url();
    if (url.includes('/api/')) {
      apiCalls.push(url);
    }
    request.continue();
  });

  page.on('response', async response => {
    const url = response.url();
    if (url.includes('/api/') && response.status() === 200) {
      try {
        const data = await response.json();
        console.log('API响应:', url);
        // 保存API响应以供分析
        const apiFile = path.join(OUTPUT_DIR, 'api_responses.json');
        let existing = [];
        try {
          existing = JSON.parse(await fs.readFile(apiFile, 'utf8'));
        } catch {}
        existing.push({ url, data });
        await fs.writeFile(apiFile, JSON.stringify(existing, null, 2));
      } catch {}
    }
  });

  try {
    console.log('访问笔记页面...');
    await page.goto(`${BASE_URL}/note`, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    // 等待Vue应用加载
    await delay(5000);

    // 获取页面内容
    const content = await page.content();
    await fs.writeFile(path.join(OUTPUT_DIR, 'note_page.html'), content);

    // 尝试获取笔记分类
    console.log('尝试获取笔记分类...');

    // 截图以便调试
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'note_page.png'), fullPage: true });

    // 获取所有链接
    const links = await page.evaluate(() => {
      const anchors = document.querySelectorAll('a');
      return Array.from(anchors).map(a => ({
        href: a.href,
        text: a.textContent.trim()
      })).filter(l => l.href && l.text);
    });

    console.log('找到的链接:', links.length);
    await fs.writeFile(path.join(OUTPUT_DIR, 'links.json'), JSON.stringify(links, null, 2));

    // 获取页面结构
    const structure = await page.evaluate(() => {
      const getStructure = (el, depth = 0) => {
        if (depth > 5) return null;
        const children = Array.from(el.children).map(c => getStructure(c, depth + 1)).filter(Boolean);
        return {
          tag: el.tagName,
          class: el.className,
          id: el.id,
          text: el.textContent.substring(0, 100),
          children: children.length ? children : undefined
        };
      };
      return getStructure(document.body);
    });

    await fs.writeFile(path.join(OUTPUT_DIR, 'structure.json'), JSON.stringify(structure, null, 2));

    console.log('已捕获的API调用:', apiCalls);
    await fs.writeFile(path.join(OUTPUT_DIR, 'api_calls.json'), JSON.stringify(apiCalls, null, 2));

  } catch (error) {
    console.error('错误:', error.message);
  }

  await browser.close();
  console.log('完成初步探索!');
}

// 确保输出目录存在
fs.mkdir(OUTPUT_DIR, { recursive: true })
  .then(() => scrapeNotes())
  .catch(console.error);
