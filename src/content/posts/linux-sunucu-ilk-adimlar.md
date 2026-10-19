---
title: 'Bir Linux sunucuyu ayağa kaldırmak: ilk 10 adım'
description: 'Kurulum bitti, peki ya sonrası? Güncellemelerden SSH ayarlarına, yeni bir sunucuda izlediğim başlangıç rotası.'
date: 2026-10-15
category: Linux
tags: [linux, ubuntu, sunucu]
minutes: 8
demo: true
featured: true
art: terminal
---
Yeni kurulan bir sunucu, boş bir defter gibi. İlk sayfada vereceğin kararlar sonraki bakım işlerini kolaylaştırır. Bu örnek, Ubuntu tabanlı bir test sunucusu için başlangıç kontrol listesidir.

> Komutları önce test ortamında dene. SSH veya güvenlik duvarını değiştirirken mevcut oturumunu açık tut ve konsol erişimini doğrula.

## 1. Sistemi tanı

Önce hangi sürümde ve hangi kaynaklarla çalıştığını gör:

```bash
cat /etc/os-release
free -h
df -h
```

## 2. Paketleri güncelle

```bash
sudo apt update
sudo apt upgrade
```

Değişecek paketleri incele. Üretim sunucularında güncelleme için bakım zamanı planla.

## 3. Günlük kullanıcı hesabını oluştur

```bash
sudo adduser enes
sudo usermod -aG sudo enes
```

## 4. SSH anahtarı kullan

İstemcinde oluşturduğun açık anahtarı yeni hesabına aktar. Ayrı bir terminalden anahtarla girişin çalıştığını doğrulamadan parola girişini kapatma.

## 5. Güvenlik duvarını planla

Önce gerçek SSH portunu izin listesine ekle. UFW kullanıyorsan kuralları etkinleştirmeden incele; özel port kullanıyorsan OpenSSH profilinin yeterli olmayabileceğini unutma.

## 6. Saat dilimini kontrol et

```bash
timedatectl status
```

Kayıtların tutarlı olması için sunucular arasında zaman senkronizasyonunu doğrula.

## 7. Gereksiz servisleri incele

```bash
systemctl --type=service --state=running
```

Bir servisin görevini ve bağımlılıklarını öğrenmeden durdurma.

## 8. Logları kontrol et

```bash
journalctl -p err -b
```

## 9. Yedekleme ve izleme ekle

Yedeğin alındığını görmek yetmez. Geri yükleme denemesi yap; disk, bellek ve servis durumları için uyarı eşiklerini belirle.

## 10. Değişiklikleri belgele

Sunucunun rolünü, erişim yöntemini ve yaptığın değişiklikleri kaydet. Parolaları ve özel anahtarları bu notlara ekleme.
