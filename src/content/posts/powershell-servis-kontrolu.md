---
title: 'PowerShell ile tekrarlayan kontrolleri otomatikleştir'
description: 'Her sabah aynı ekranları açmak yerine küçük bir betik yaz. Servis durumlarını tek bakışta kontrol et.'
date: 2026-10-05
category: Otomasyon
tags: [powershell, windows, script]
minutes: 5
art: code
---
Otomasyona başlamak için büyük bir projeye gerek yok. Salt okunur bir servis raporu iyi bir ilk adımdır.

## Kontrol listesini oluştur

İlk denemeyi kendi test bilgisayarındaki servislerle yap:

```powershell
$serviceNames = @('Spooler', 'wuauserv')
foreach ($serviceName in $serviceNames) {
    Get-Service -Name $serviceName -ErrorAction Continue |
        Select-Object Name, Status, DisplayName
}
```

## Beklentiyi tanımla

Her durmuş servis arıza değildir. Bazı servisler tetiklenince çalışır. Raporu sunucunun rolüne ve beklenen duruma göre yorumla.

## Raporu sakla

Çıktıyı tarih bilgisiyle saklamak değişimleri görmeyi kolaylaştırır. Betiğe yeniden başlatma gibi değişiklik yapan adımlar eklemeden önce hata yönetimini ve yetki sınırlarını tasarla.
