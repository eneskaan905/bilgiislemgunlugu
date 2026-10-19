---
title: 'Docker Compose ile daha düzenli bir çalışma ortamı'
description: 'Dağınık docker run komutlarını geride bırak. Servislerini tek dosyada tanımla, ortamını yeniden üretebil.'
date: 2026-10-08
category: DevOps
tags: [docker, compose, container]
minutes: 7
demo: true
art: docker
---
Bir test ortamını yeniden kurarken hangi portları ve diskleri kullandığını hatırlamak zor olabilir. Compose bu tercihleri dosyada tutar.

## Servisi tanımla

Proje klasöründe bir `compose.yaml` oluştur:

```yaml
services:
  web:
    image: nginx:stable-alpine
    ports:
      - "127.0.0.1:8080:80"
```

Bu örnek yalnızca yerel makineden erişilebilen bir test servisi başlatır. Üretimde imaj sürümünü veya digest değerini sabitle ve yayınlama ayarlarını ayrıca değerlendir.

## Başlat ve incele

```bash
docker compose up -d
docker compose ps
docker compose logs --tail 50 web
```

## Yaşam döngüsünü yönet

```bash
docker compose down
```

Veri kalıcılığı gerekiyorsa volume tanımla. Volume silen seçenekleri kullanmadan önce hangi verilerin silineceğini doğrula.
