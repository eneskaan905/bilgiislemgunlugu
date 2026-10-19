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
2. `public/admin/config.yml` içindeki `backend.repo` alanına `kullanici/depo` yazın ve branch değerini doğrulayın.
3. HTTPS üzerinden `/admin/` adresini açın. Sveltia'nın desteklediği GitHub erişim belirteci veya OAuth yöntemiyle giriş yapın. Gizli anahtarları kaynak dosyalarına yazmayın. OAuth için kendi kimlik doğrulama servisinizi kurup Sveltia belgelerine göre backend ayarlarını ekleyin.
4. CMS kaydetmeleri GitHub'a commit oluşturur. Hosting sağlayıcısında aynı depoya bağlı otomatik build tanımlayın; aksi halde site kendiliğinden güncellenmez.

Dosya sistemi erişimini destekleyen tarayıcılarda Sveltia'nın yerel klasör açma seçeneğiyle de çalışabilirsiniz. CMS betiği CDN üzerinden yüklenir ve internet gerektirir.

## Alan adıyla yayınlama

Statik Astro destekleyen hosting üzerinde build komutu `npm run build`, çıktı klasörü `dist` olsun. Hosting panelinde `bilgiislemgunlugu.com` ve gerekirse `www` alanını ekleyin. DNS kayıtlarını hosting sağlayıcısının verdiği değerlerle değiştirin ve HTTPS'i etkinleştirin. `astro.config.mjs` içindeki site adresi alan adınıza hazırdır. DNS ve hosting hesaplarına bu projeden erişim yoktur; canlı yayın henüz yapılmadı.

## Özellikler

Ana sayfada en fazla 3 son yazı gösterilir. `/yazilar/` arşivi ve `/yazilar/kategori/<kategori>/` arşivleri sayfa başına 9 yazı içerir; ek sayfalar build sırasında otomatik üretilir. Header/footer logosu `src/components/Logo.astro` içinde, aynı kimliğe ait favicon `public/favicon.svg` içindedir. Yönetim paneline genel menüden bağlantı verilmez; `/admin/` adresinden erişilir.

Kategori filtreleri, başlık/etiket araması (Ctrl/Cmd+K), açık/koyu tema, yazı içindekiler, mobil görünüm, tıklama parçacıkları, azaltılmış hareket tercihi, kanonik URL ve sosyal meta etiketleri.

Kaynaklar: https://docs.astro.build/en/guides/content-collections/ ve https://sveltiacms.app/en/docs/start
