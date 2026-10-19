---
title: 'Yedek almak yetmez: geri dönebiliyor musun?'
description: '3-2-1 yaklaşımı, geri yükleme testleri ve bir yedekleme planında unutulmaması gereken temel noktalar.'
date: 2026-10-01
category: Sistem Yönetimi
tags: [backup, yedekleme, recovery]
minutes: 6
art: backup
---
Başarılı tamamlanan bir yedekleme işi iyi bir başlangıçtır. Asıl soru, ihtiyaç duyduğunda veriyi ne kadar sürede geri getirebildiğindir.

## 3-2-1 yaklaşımı

Üç veri kopyası, iki farklı depolama türü ve bir farklı konumda kopya düşün. Erişim yetkileri ve çevrimdışı veya değiştirilemez kopyalar da plana dahil edilmeli.

## Hedeflerini yaz

Ne kadar veri kaybı kabul edilebilir? Hizmet ne kadar süre kapalı kalabilir? Bu iki soru yedekleme sıklığını ve geri dönüş sürecini şekillendirir.

## Geri yüklemeyi dene

Yalıtılmış bir test ortamında dosya, uygulama ve tam sistem geri dönüşlerini dene. Süreyi ölç; şifreleme anahtarlarının ve gerekli hesapların erişilebilir olduğunu doğrula.

## Sonucu izle

Başarısız işler için uyarılar oluştur. Kapasiteyi, saklama süresini ve test sonuçlarını düzenli olarak gözden geçir.
