---
title: '“İnternet yok” denildiğinde: DNS ile nereden başlamalı?'
description: 'Bağlantı var ama sayfalar açılmıyor. DNS sorunlarını katman katman incelemek için küçük bir kontrol listesi.'
date: 2026-10-12
category: 'Ağ & Güvenlik'
tags: [dns, network, troubleshooting]
minutes: 6
demo: true
art: network
---
Bir bağlantı sorununun kaynağını bulmak için önce belirtisini netleştir: Tek bir site mi açılmıyor, yoksa tüm alan adları mı?

## Önce kapsamı belirle

Aynı ağa bağlı başka bir cihazda sorunu tekrar dene. Tek cihaz etkileniyorsa yerel ayarları, tüm ağ etkileniyorsa ortak altyapıyı incele.

## Çözümleyiciyi sorgula

```bash
nslookup example.com
```

Yanıttaki DNS sunucusunu ve hata türünü kaydet. Zaman aşımı ile olmayan bir alan adı yanıtı farklı sorunlardır.

## Kayıtları karşılaştır

Yetkili sunucudaki kayıtlarla istemcinin aldığı yanıtı karşılaştır. Önbellek ve TTL nedeniyle değişiklikler hemen görünmeyebilir. Kurumsal ağda herkese açık bir DNS sunucusuna geçmeden önce iç alan adlarının ve erişim politikasının etkisini değerlendir.

## Sonucu belgele

Sorgu zamanı, istemci ağı, kullanılan çözümleyici ve dönen yanıt bir sonraki incelemeyi hızlandırır.
