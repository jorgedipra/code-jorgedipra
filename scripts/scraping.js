const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'img', 'portafolio');
const LOG_FILE = path.join(__dirname, '..', 'public', 'data', 'scraping-log.json');

const SITES = {
  personal: [{ name: 'jorgedipra', url: 'https://jorgedipra.lovestoblog.com/' }],
  ecfi: [
    { name: 'ecfi-edu-co', url: 'https://ecfi.edu.co' },
    { name: 'campus-ecfi', url: 'https://campus.ecfi.edu.co/' },
    { name: 'opciondegrado-ecfi', url: 'https://opciondegrado.ecfi.edu.co/' },
    { name: 'ilbello', url: 'https://ilbello.com.co/' },
    { name: 'ecfi-education-specialist', url: 'https://ecfieducationspecialist.edu.co/' },
    { name: 'proempresarial-consultores', url: 'https://proempresarialconsultores.com/' },
    { name: 'campus2-ilbello', url: 'https://campus2.ilbello.com.co/' }
  ],
  isbn: [
    { name: 'isbn-camara-libro-la-paz', url: 'https://isbn.camaralibrolapaz.org.bo/' },
    { name: 'isbn-costa-rica-sinabi', url: 'https://isbncostarica.sinabi.cerlalc.org/' },
    { name: 'isbn-cuba-ccl', url: 'https://isbncuba.ccl.cerlalc.org/' },
    { name: 'isbn-ecuador', url: 'https://isbnecuador.com/' },
    { name: 'isbn-mexico-indautor', url: 'https://isbnmexico.indautor.cerlalc.org/' },
    { name: 'isbn-guatemala-ageg', url: 'https://isbn.bnphu.gob.do/' },
    { name: 'isbn-bnphu-dominicana', url: 'https://isbn.bnphu.gob.do/' },
    { name: 'isbn-panama-binal', url: 'http://isbn.binal.ac.pa/risbn53/index.php' },
    { name: 'isbn-bnp-peru', url: 'https://isbn.bnp.gob.pe/' },
    { name: 'isbn-chile', url: 'https://isbnchile.cl/' },
    { name: 'isbn-el-salvador-binaes', url: 'https://isbnelsalvador.binaes.cerlalc.org/' },
    { name: 'isbn-honduras-sira', url: 'https://sira.honduras.cerlalc.org/' },
    { name: 'isbn-honduras-deca', url: 'https://isbnhonduras.deca.cerlalc.org/' },
    { name: 'isbn-venezuela-cenal', url: 'http://isbn.cenal.gob.ve/' }
  ],
  cerlalc: [
    { name: 'cerlalc-org', url: 'https://cerlalc.org/' },
    { name: 'foros-cerlalc', url: 'https://foros.cerlalc.org/' },
    { name: 'encuestas-cerlalc', url: 'https://encuestas.cerlalc.org/index.php' },
    { name: 'marrakech-cerlalc', url: 'https://marrakech.cerlalc.org/' },
    { name: 'marrakech-cerlalc-ecuador', url: 'https://marrakech.cerlalc.org/ecuador/dashboard/' },
    {
      name: 'marrakech-cerlalc-argentina',
      url: 'https://marrakech.cerlalc.org/argentina/dashboard/'
    },
    { name: 'marrakech-cerlalc-panama', url: 'https://marrakech.cerlalc.org/panama/dashboard/' }
  ],
  educativas: [
    { name: 'aulavirtual-cerlalc', url: 'https://aulavirtual.cerlalc.org' },
    { name: 'aulavirtual-iberbibliotecas', url: 'https://aulavirtual.iberbibliotecas.org/' },
    { name: 'iberbibliotecas', url: 'https://www.iberbibliotecas.org/' },
    { name: 'info-cerlalc', url: 'https://info.cerlalc.org/' },
    { name: 'trama-cerlalc', url: 'https://trama.cerlalc.org/' }
  ]
};

const CONFIG = {
  timeout: 30000,
  viewport: { width: 1280, height: 720 },
  waitUntil: 'networkidle'
};

async function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function screenshotSite(browser, category, site) {
  const logEntry = {
    category,
    name: site.name,
    url: site.url,
    timestamp: new Date().toISOString(),
    status: 'pending',
    screenshotPath: null,
    error: null
  };

  const categoryDir = path.join(OUTPUT_DIR, category);
  await ensureDir(categoryDir);

  const screenshotPath = path.join(categoryDir, `${category}-${site.name}.png`);

  try {
    console.log(`\n📸 Capturing: ${site.url}`);
    const page = await browser.newPage();
    await page.setViewportSize(CONFIG.viewport);

    const response = await page.goto(site.url, {
      timeout: CONFIG.timeout,
      waitUntil: CONFIG.waitUntil
    });

    logEntry.statusCode = response ? response.status() : null;

    if (response && response.ok()) {
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });
      logEntry.status = 'success';
      logEntry.screenshotPath = `${category}/${category}-${site.name}.png`;
      console.log(`   ✅ Success: ${category}-${site.name}.png`);
    } else {
      logEntry.status = 'failed';
      logEntry.error = `HTTP ${response ? response.status() : 'no response'}`;
      console.log(`   ❌ Failed: HTTP ${response ? response.status() : 'no response'}`);
    }

    await page.close();
  } catch (error) {
    logEntry.status = 'error';
    logEntry.error = error.message;
    console.log(`   ❌ Error: ${error.message}`);
  }

  return logEntry;
}

async function runScraping() {
  console.log('🚀 Starting Web Scraping...\n');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`⏱️  Timeout per site: ${CONFIG.timeout}ms\n`);

  await ensureDir(OUTPUT_DIR);

  const browser = await chromium.launch({ headless: true });
  const logs = [];

  for (const [category, sites] of Object.entries(SITES)) {
    console.log(`\n📂 Processing category: ${category} (${sites.length} sites)`);

    for (const site of sites) {
      const logEntry = await screenshotSite(browser, category, site);
      logs.push(logEntry);
    }
  }

  await browser.close();

  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));

  console.log('\n═══════════════════════════════════════');
  console.log('📊 SCRAPING SUMMARY');
  console.log('═══════════════════════════════════════');

  const successCount = logs.filter((l) => l.status === 'success').length;
  const failedCount = logs.filter((l) => l.status === 'failed').length;
  const errorCount = logs.filter((l) => l.status === 'error').length;

  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failed: ${failedCount}`);
  console.log(`⚠️  Errors: ${errorCount}`);
  console.log(`📝 Log saved to: ${LOG_FILE}`);

  if (failedCount > 0 || errorCount > 0) {
    console.log('\n⚠️  Failed/Error sites:');
    logs
      .filter((l) => l.status !== 'success')
      .forEach((l) => {
        console.log(`   - ${l.category}/${l.name}: ${l.error || l.status}`);
      });
  }
}

runScraping().catch(console.error);
