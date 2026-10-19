# Bilgi İşlem Günlüğü

Astro ile hazırlanmış Türkçe IT blogu. Sveltia CMS `/admin/` adresindedir.

## Yerel çalıştırma

Node.js 22.12+ gerekir. Windows PowerShell'de `npm.cmd` kullanabilirsiniz.

```sh
npm install
npm run dev
```

`npm run build` statik çıktıyı `dist/` klasörüne üretir. `npm run preview` derlenmiş siteyi açar.

## İçerik

Yazılar `src/content/posts/*.md` dosyalarındadır. Taslaklar (`draft: true`) liste, arama ve sayfa üretiminden çıkarılır. Altı yazı örnek içeriktir; kişisel deneyimlerinizle değiştirin. Örnek içerik uyarısı `src/pages/yazilar/[...id].astro` dosyasındadır; gerçek yazılar eklendiğinde kaldırılabilir. Kategori adlarını CMS seçenekleriyle aynı tutun. `featured: true` işaretli en yeni yazı öne çıkar.

## Sveltia yönetim paneli

1. Projeyi kendi GitHub deponuza ekleyin.
2. `public/admin/config.yml` deposu `eneskaan905/bilgiislemgunlugu`, yayın dalı `main` olarak ayarlanmıştır.
3. HTTPS üzerinden `/admin/` adresini açın. Sveltia'nın desteklediği GitHub erişim belirteci veya OAuth yöntemiyle giriş yapın. Gizli anahtarları kaynak dosyalarına yazmayın. OAuth için kendi kimlik doğrulama servisinizi kurup Sveltia belgelerine göre backend ayarlarını ekleyin.
4. CMS kaydetmeleri GitHub'a commit oluşturur. Hosting sağlayıcısında aynı depoya bağlı otomatik build tanımlayın; aksi halde site kendiliğinden güncellenmez.

Dosya sistemi erişimini destekleyen tarayıcılarda Sveltia'nın yerel klasör açma seçeneğiyle de çalışabilirsiniz. CMS betiği CDN üzerinden yüklenir ve internet gerektirir.

## Alan adıyla yayınlama

Cloudflare Pages projesi: `bilgiislemgunlugu`. GitHub deposunun `main` dalına bağlıdır. Build komutu `npm run build`, çıktı klasörü `dist`, Node.js sürümü `24` olarak ayarlanmıştır. CMS'nin GitHub'a kaydettiği değişiklikler Cloudflare'da otomatik build başlatır.

Önizleme/yayın adresi: https://bilgiislemgunlugu.pages.dev

`bilgiislemgunlugu.com` özel alan adı projeye eklenmiştir. DNS'te kök alan adı için `CNAME @ → bilgiislemgunlugu.pages.dev` kaydı gerekir; DNS doğrulaması ve sertifika tamamlandığında özel alan adı aktif olur. MX/TXT gibi e-posta kayıtlarını değiştirmeyin.

Yönetim paneli: https://bilgiislemgunlugu.pages.dev/admin/ (özel alan adı aktif olduğunda https://bilgiislemgunlugu.com/admin/). GitHub erişim belirtecini yalnızca CMS giriş ekranına girin. Belirteci bu dosyaya, depoya veya sohbet mesajına eklemeyin. Ayrı bir OAuth uygulaması kurulmadı; mevcut giriş yöntemi Sveltia'nın desteklediği GitHub belirteci girişidir.

## Özellikler

Ana sayfada en fazla 3 son yazı gösterilir. `/yazilar/` arşivi ve `/yazilar/kategori/<kategori>/` arşivleri sayfa başına 9 yazı içerir; ek sayfalar build sırasında otomatik üretilir. Header/footer logosu `src/components/Logo.astro` içinde, aynı kimliğe ait favicon `public/favicon.svg` içindedir. Yönetim paneline genel menüden bağlantı verilmez; `/admin/` adresinden erişilir.

Kategori filtreleri, başlık/etiket araması (Ctrl/Cmd+K), açık/koyu tema, yazı içindekiler, mobil görünüm, tıklama parçacıkları, azaltılmış hareket tercihi, kanonik URL ve sosyal meta etiketleri.

Kaynaklar: https://docs.astro.build/en/guides/content-collections/ ve https://sveltiacms.app/en/docs/start
