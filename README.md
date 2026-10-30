# Club Med Makers · Your Resort Activities

İngilizce, mobil uyumlu, GitHub / Netlify için hazır statik site. Kurulum veya build komutu gerekmez.

## Bilgisayarında aç

ZIP'i çıkart, `index.html` dosyasına çift tıkla. Görseller ve gün seçimi internet olmadan da çalışır; Google Fonts ve diğer Hub sayfalarına bağlantılar için internet gerekir.

## GitHub → Netlify

1. GitHub'da yeni bir repository oluştur (örnek isim: `opio-resort-activities-2026`).
2. Bu klasörün **içindeki dosyaları ve assets klasörünü** repository'nin ana dizinine yükle. `index.html` ana dizinde olmalı.
3. Netlify'da **Add new project → Import an existing project → GitHub** üzerinden repository'yi seç.
4. Build command: boş. Publish directory: `.`
5. Deploy et. `netlify.toml` ayarları zaten içeriyor.

Alternatif olarak Netlify'ın manuel deploy alanına, `index.html` dosyasının bulunduğu klasörü sürükleyebilirsin.

## İçerik ve saatleri değiştir

Canlı sayfanın veri kaynağı: **activities-data.js**. Açıklamalar, fotoğraf yolları ve her aktivitenin `sessions` listesi burada.

- Tarihler: 8, 9, 11, 12 Kasım 2026.
- Tennis, padel, golf, archery ve pétanque: 17:00–19:00.
- Stretching: 18:00; bitiş saati verilmediği için eklenmedi.
- Saat dilimi: Europe/Paris (Opio).
- Günler veri kaynağından oluşturulur; farklı günlerde farklı aktiviteler tanımlanabilir.
- `activities.json` yalnızca veri aktarımı / gelecekteki Excel bağlantısı için referans kopyadır. Şu anda otomatik Excel senkronizasyonu yoktur. Sayfayı değiştirmek için `activities-data.js` dosyasını düzenle.
- Gün linki paylaşılabilir: `?day=2026-11-11`.
- Sabit veya geçici yer bilgisi, rezervasyon, kontenjan ya da ekipman dahil olduğu iddiası eklenmedi.

## Görsel kaynakları

- Ana kapak: kullanıcı tarafından sağlanan The Art of Free Time kampanya görseli (`Free Time_KV_Snow_Yoga_Full_150 DPI JPEG.jpg`). Mobilde yazı ve fotoğraf ayrı alanlarda gösterilerek iki kişinin de kadrajda kalması sağlandı.

- Tennis, padel, golf, archery ve pétanque: kullanıcı tarafından sağlanan Club Med fotoğrafları.
- Stretching: Club Med Opio resmi sayfasının **Training Soft** aktivite görseli.
  - Sayfa: https://www.clubmed.fr/r/opio-en-provence/y
  - Görsel: https://assets.dream.clubmed/pm_7531_406_406573-l9ejnpjq0h-swhr.jpg
- Opio logosu: mevcut Find Your Group sayfasının logo dosyası.

Başlıkta, gönderilen kampanya görselinin ince serif / italik düzenine yakın **Newsreader** kullanıldı. Bu, kampanya fontunun birebir doğrulanmış kopyası değildir. Diğer metinler **Inter**. Gerçek marka fontu dosyası sağlandığında CSS @font-face ile değiştirilebilir.

## Kontrol

JavaScript sözdizimi, fotoğrafların yüklenmesi, gün değişimi ve 390px genişlikte mobil düzen kontrol edildi. Canlı GitHub repository'si ve Netlify deploy'u bu paketle birlikte oluşturulmuş değildir.
