# Kenalan dengan React js

React adalah library JavaScript yang digunakan untuk membangun antarmuka pangguna yang cepat dan interaktif. React js dikembangkan oleh perusahaan raksasa yang kita kenal sebelumnya dengan Facebook pada tahun 2011, Yang saya maksud sebelumnya itu karena sekarang perusahaan Facebook berganti nama jadi Meta. 

> Saat artikel ini ditulis, React sangat populer dengan 178k bintang di [Github](https://github.com/facebook/react) dan masih banyak yang gunakan sampai sekarang

## Render Hello World dengan JavaScript
Mari kita lihat bagaimana me rener Hello World menggunakan JavaScript.

Dimulai dari membuat satu `div` dengan `id` sebagai `root`
```html
<div id="root"></div>
```

Sekarang saya mau menambahkan `<div class="container">Hello World</div>` ke div dengan id root diatas.
We dapat dengan mudah menggunakan JavaScript document API.
```javascript
// tangkap div dengan id root
const rootElement = document.getELementById('root')

// Membuat div baru sesuai kebutuhan
const divElement = document.createElement('div')
divElement.textContent = 'Hello World'
divElement.className = 'container'

// Memasukkan element div yang baru dibuat ke element id root
rootElement.append(divElement)
``` 

Apa yang kita buat ini sangat sederhana
1. Mendapatkan referensi ke element dengan id root 
2. Buat element div baru menggunakan document.createElement lalu atur kelas dan konten teksnya
3. Tambahkan element yang baru dibuat ini ke element dengan id root

Kode diatas akan menghasilkan HTML seperti berikut
```html
<div id="root">
    <div class="container">Hello World</div>
</div>
```
