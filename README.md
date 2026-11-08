# Akış

Akış, tarayıcıda çalışan bir EPUB okuyucudur. Kelimeleri ekranın ortasında tek tek gösterir. İstersen klasik sayfa düzeninde de okuyabilirsin.

**Dene:** https://asumankolbasi.github.io/akis/

![Akış ikonu](icons/icon-192.png)

## Nasıl çalışır?

Akış iki okuma modu sunar.

- **Akış modu:** Kelimeler ekranın ortasında sırayla belirir. Her kelimenin bir harfi kırmızıdır. Gözün o harfe odaklanır, böylece gözünü kaydırmadan okursun.
- **Klasik mod:** Kitap normal bir kitap gibi sayfalara bölünür. Sayfayı kenarlara dokunarak ya da kaydırarak çevirirsin.

İki mod aynı yeri hatırlar. Akış modunda bıraktığın yerden klasik modda devam edebilirsin.

## Özellikler

- Okuma hızını dakikada kelime olarak ayarlayabilirsin.
- Cümle sonlarında ve virgüllerde kısa duraklar olur.
- Durdurduğunda o anki paragraf altta görünür. Bir kelimeye dokunursan okuma oradan devam eder.
- Koyu, sepya ve açık tema vardır.
- Tırnaklı ya da tırnaksız yazı tipi seçebilirsin.
- Bölümler listesinden istediğin bölüme atlayabilirsin.
- Kütüphanede kitaplar kapaklarıyla görünür. Kapağı olmayan kitaba renkli bir kapak çizilir.
- Kütüphanede her kitabın ilerlemesi ve kalan süresi görünür.
- Klavye kısayolları vardır: boşluk başlatır ya da durdurur, sol ve sağ ok cümle atlar, yukarı ve aşağı ok hızı değiştirir.
- İnternet olmadan da açılır. Ana ekrana ya da masaüstüne uygulama olarak eklenebilir.

## Kullanım

1. Siteyi aç.
2. **+ EPUB ekle** düğmesine bas ve bir EPUB dosyası seç.
3. Kitaba dokun ve okumaya başla.

Kitaplar ve kaldığın yerler yalnızca senin tarayıcında saklanır. Hiçbir şey bir sunucuya gönderilmez. Tarayıcının site verilerini silersen kütüphane boşalır. O zaman kitapları yeniden eklemen yeterli.

DRM korumalı kitaplar açılmaz. Satın alınmış kitapların çoğu bu türdendir.

## Dosyalar

| Dosya | Görevi |
|---|---|
| `index.html` | Uygulamanın tamamı. HTML, CSS ve JavaScript tek dosyada. |
| `sw.js` | Uygulamanın internet olmadan açılmasını sağlar. |
| `manifest.webmanifest` | Uygulamanın adını ve ikonunu tanımlar. |
| `icons/` | Uygulama ikonları. |

Harici bir kütüphane kullanılmaz. EPUB dosyası tarayıcının kendi araçlarıyla açılır.

## Geliştirme

Derleme adımı yoktur. Dosyaları bir yerel sunucuyla açman yeterli:

```
python3 -m http.server 8000
```

Sonra tarayıcıda `http://localhost:8000` adresine git.

`sw.js` dosyası uygulamayı önbelleğe alır. Değişikliklerin hemen görünmeyebilir. Sayfayı bir kez daha yenile. Yeni bir dosya eklersen onu `sw.js` içindeki listeye de ekle.
