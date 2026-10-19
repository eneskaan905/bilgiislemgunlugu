import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import YAML from 'yaml';
const config=YAML.parse(fs.readFileSync('public/admin/config.yml','utf8'));
assert.deepEqual(config.collections.map(c=>c.name),['posts','settings','pages']);
const settings=config.collections.find(c=>c.name==='settings');
for(const file of settings.files){const data=JSON.parse(fs.readFileSync(file.file,'utf8'));assert.deepEqual(file.fields.map(f=>f.name).sort(),Object.keys(data).sort())}
const backups=new Map(['src/data/site.json','src/data/home.json','src/data/categories.json'].map(p=>[p,fs.readFileSync(p,'utf8')]));
const fixtures=['src/content/pages/cms-verification.md','src/content/pages/cms-draft-verification.md'];
for(const p of fixtures)assert.ok(!fs.existsSync(p),'Fixture filename already exists');
function build(){const r=spawnSync(process.execPath,['node_modules/astro/bin/astro.mjs','build'],{env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'},encoding:'utf8'});if(r.status!==0)throw new Error(r.stdout+'\n'+r.stderr)}
try{
 const site=JSON.parse(backups.get('src/data/site.json'));site.navigation.push({label:'CMS-MENU-VERIFY',href:'/sayfalar/cms-verification/'});site.footer.message='CMS-FOOTER-VERIFY';site.footer.links=[{label:'CMS-FOOTER-LINK',href:'/sayfalar/cms-verification/'}];fs.writeFileSync('src/data/site.json',JSON.stringify(site));
 const home=JSON.parse(backups.get('src/data/home.json'));home.titleStart='CMS-HOME-VERIFY';home.showFeatured=false;home.showBanner=false;home.recentCount=1;fs.writeFileSync('src/data/home.json',JSON.stringify(home));
 const cats=JSON.parse(backups.get('src/data/categories.json'));cats.categories.push({name:'CMS kategori',slug:'cms-verification',icon:'+'});fs.writeFileSync('src/data/categories.json',JSON.stringify(cats));
 fs.writeFileSync(fixtures[0],'---\ntitle: CMS-PAGE-VERIFY\ndescription: CMS page test\ndraft: false\n---\nCMS-BODY-VERIFY\n');fs.writeFileSync(fixtures[1],'---\ntitle: CMS-DRAFT-VERIFY\ndraft: true\n---\nHidden\n');
 build();const html=fs.readFileSync('dist/index.html','utf8');for(const marker of ['CMS-MENU-VERIFY','CMS-FOOTER-VERIFY','CMS-FOOTER-LINK','CMS-HOME-VERIFY'])assert.ok(html.includes(marker),marker);
 assert.equal((html.match(/data-category=/g)||[]).length,1);assert.ok(!html.includes('featured-card'));assert.ok(!html.includes('about-banner reveal'));
 assert.ok(fs.readFileSync('dist/sayfalar/cms-verification/index.html','utf8').includes('CMS-BODY-VERIFY'));
 assert.ok(!fs.existsSync('dist/sayfalar/cms-draft-verification/index.html'));assert.ok(fs.existsSync('dist/yazilar/kategori/cms-verification/index.html'));
 const search=JSON.parse(fs.readFileSync('dist/search.json','utf8'));assert.ok(search.some(p=>p.title==='CMS-PAGE-VERIFY'));assert.ok(!search.some(p=>p.title==='CMS-DRAFT-VERIFY'));
 const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert.ok(sitemap.includes('/sayfalar/cms-verification/'));assert.ok(!sitemap.includes('cms-draft-verification'));
 console.log('CMS verification passed: menu, footer, home text, section visibility, post limit, categories, pages, drafts, search, sitemap.');
}finally{
 for(const [p,s] of backups)fs.writeFileSync(p,s);for(const p of fixtures)if(fs.existsSync(p))fs.unlinkSync(p);build();console.log('Original content restored and production build passed.');
}
