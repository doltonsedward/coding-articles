# Fetch dalam javascript
Sebelumnya ada dua cara untuk melakukan request. Pertama dengan _`XMLHttpRequest`_, kedua dengan method ajax() pada _`JQuery`_. Untungnya JavaScript sekarang menawarkan cara ketiga yaitu dengan menggunakan _`Fetch Api`_. Dalam artikel kali ini kamu akan belajar banyak tentang  fetch api pada javascript


## Introduction
Fetch Api membuat kegiatan **meminta/request** dan handle **response** sangat lebih baik dan mudah dari pada cara lama dengan **XMLHttpRequest**.

Fetch Api merupakan tambahan baru untuk JavaScript. Apa yang di lakukan fetch API ini adalah kegiatan untuk **meminta/request layanan ke endpoint pada website lain atau website sendiri**, untuk mengambil response resource / sumber daya berupa data berformat **json** yang biasa di lakukan programmer untuk membangun sebuah website dengan data dari website lain ataupun website yang membutuhkan konsep microservice di dalamnya

## Dasar-dasar pemanggilan Api
Saat anda membuat permintaan dengan fetch API, Anda akan membutuhkan dua hal. Yang pertama adalah metode `fetch()`. Metode inilah yang akan membuat permintaan. Metode pada dasarnya membutuhkan dua argumen. Argument yang kedua opsional. 

Argument pertama pada metode ini merupakan jalur atau URL yang ingin anda buatkan permintaan. Argument kedua merupakan metode apa yang ingin anda gunakan dalam proses pemanggilan, biasanya di sebut [Http Request Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). **Perlu diingat bahwa argument kedua menerima objek konfigurasi**

Objek konfigurasi ini opsional. Ini memungkinkan anda untuk mengatur berbagi pengaturan untuk permintaan. Misalnya, kamu dapat menambahkan header, mengatur metode untuk [cross-origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), izinkan atau larang redirect. Kamu dapat melihat opsi nya di [MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

```javascript
// Sintaks Fetch
fetch(someURL)

// Atau dengan objek konfigurasi
fetch(someURL, {/* Konfigurasi di buat disini */})
```

## Handling request dengan promise handler function
Hal berikut nya yang kamu perlukan adalah **promise handler function**. Karena fetch API berbasis peromise maka kita gunakan beberapa fungsi handler pada promise. Ini berarti bahwa setiap kali kita membuat permintaan/request, hasilnya ialah data yang di kembalikan oleh method `fetch()` akan menjadi promise/janji. Untuk memproses promise ini, anda perlu menggunakan salah satu fungsi handler pada promise.

Dua fungsi handler yang mungkin paling sering kita gunakan adalah `then()` dan `catch()`. Fungsi handler `then()` membantu kita menangani status janji yang terpenuhi atau tercapai. Ini berlaku untuk janji yang di selesaikan dan yang di tolak. Cara lain untuk menangani janji yang di tolak adalah dengan menggunakan `catch()`

Keduanya, `then()` dan `catch()` dapat menangani janji yang ditolak. Namun, hanya `then()` yang dapat menangani janji yang terpenuhi. Jadi, pastikan untuk menggunakan `then()` setidaknya hanya untuk menangani status janji yang terpenuhi atau tercapai. Untuk menangani status di tolak gunakan `catch()`

Ketika janji terpenuhi, data yang di terimanya secara otomatis di teruskan ke fungsi handler yang di gunakan. Saat kita ingin bekerja dengan data tersebut, kita harus melakukannya dari dalam fungsi handler tersebut. Jika kita ingin membuat data tersebut tersedia di luarnya, Kita dapat membuat data tersebut masuk ke variable yang ada di luar fungsi handler.

```javascript
// Penggunakan metode fetch() dengan promise handler function
fetch(someURL)
    .then(response => {
        // Ketika permintaan kita terpenuhi data nya akan di terima di sini
        // Tampilkan data dengan console.log untuk melihat data nya
        console.log(response)
    })
    .catch(error => {
        // Jika permintaan kita di tolak
        // Tampilkan data dengan console.log untuk melihat alasan di tolak nya
        console.log(error)
    })
```

```javascript
// Contol real 
fetch('https://fakestoreapi.com/products/1')
    // Convert respon ke format JSON
    .then(response => response.json())
    // Tampilkan ke console respon yang sudah di convert
    .then(console.log)
    .catch(error => {
        // jika permintaan di tolak
        // tampilkan error ke console
        console.log(error)
    })


// Output:
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// }
```

Seperti yang kita lihat pada contoh di atas, Kita dapat merangkai fungsi-fungsi penanganan janji satu demi satu. Ini merupakan cara yang bagus untuk menempatkan fungsi `then()` sebagai yang pertama dan catch sebagai yang kedua.

## Handling fetch dengan async/await

Opsi lain jika kita tidak ingin menggunakan fungsi handler bawaan promise yaitu, `await`. `await` melakukan dua hal. Pertama, ia menjeda eksekusi kode di sekitarnya hingga janji terpenuhi. Hal kedua yang di lakukan oleh await adalah menggantikan fungsi `then()`. Secara otomatis mengekstrak dan memberikan data yang di kembalikan oleh promise ke variabel 

Ada dua hal yang perlu diingat jika kita ingin menggunakan await. Pertama, gunakan di dalam `try...catch`. await melengkapi fungsi `then()` namun tidak melengkapi `catch()`. Jika kita ingin menangkap kesalahan apa pun yang mungkin muncul, anda dapat menangkapnya dengan pernyataan `try..catch`

Hal kedua sampai [top-level await](https://github.com/tc39/proposal-top-level-await) dirilis, kita dapat menggunakan `await` hanya dalam fungsi `async`. Inilah yang dapat kita lakukan. Gunakan `fetch()` bersama dengan `await`. Kemudian, bungkus keduanya dengan pernyataan `try...catch` dan masukkan ke dalam fungsi async

```javascript
// Membuat async function
const makeRequest = async () => {
    // Gunakan pernyataan try...catch 
    try {
        // Gunakan await dan buat fetch request
        const responseData = await fetch('https://fakestoreapi.com/products/1')
        // Convert respon ke format JSON
        const responseJSON = await responseData.json()

        // Tampilkan ke console respon yang sudah di convert
        console.log(responseJSON)
    } catch (error) {
        // jika permintaan di tolak
        // tampilkan error ke console
        console.log(error)
    }
}

// Panggil makeReques() 
makeRequest()


// Output: 
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// }
```

## Membuat request dengan fetch
By default, jenis permintaan yang dibuat oleh metode `fetch()` adalah GET. Jika kita ingin membuat jenis permintaan yang berbeda, kita dapat mengubahnya. Kita dapat mengubah jenis permintaan melalui objek konfigurasi opsional yang ada pada argument kedua dari metode `fetch()`. Misalnya, kita dapat mengatur metode ke **POST** untuk membuat permintaan **POST** dan seterusnya

## GET Request
Jika kamu menggunakan metode `fetch()` dan hanya menyediakan satu argument yang merupakan URL, secara otomatis itu akan menjalankan permintaan **GET**

```javascript
const makeGetRequest = async () => {
    // Gunakan pernyataan try..catch 
    try {
        // Buat request GET pada fetch
        const response = await fetch('https://sv443.net/jokeapi/v2/joke/Programming')

        // Convert respon ke format JSON
        const data = await response.json()

        // Tampilkan hasil yang sudah di convert ke console
        console.log(data)
    } catch (error) {
        // jika permintaan di tolak
        // tampilkan error ke console
        console.log(error)
    }
}

// Panggil makeGetRequest()
makeGetRequest()


// Output: 
// {
//   "error": false,
//   "category": "Programming",
//   "type": "single",
//   "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
//   "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
//   },
//   "id": 37,
//   "safe": true,
//   "lang": "en"
// }
```

## POST request
Jenis permintaan lainnya adalah **POST**. Kita dapat membuat permintaan jenis ini dengan mengambil API jika kamu mengubah metode pada objek konfigurasi. Objek ini adalah argument kedua dari metode `fetch()`, opsional, yang dapat kamu berikan sebagai argumen untuk `fetch()`. Jika kamu menyetel metode nya ke **POST**, metode `fetch()` akan mengeksekusi permintaan dengan request **POST**

Saat kamu mmebuat permintaan **POST**, kamu perlu mengirim beberapa data. kamu dapat menambahkan data ini melalui opsi `body`. Opsi ini juga ada di objek konfigurasi. Selain itu, kamu mungkin ingin mengubah Content-Type. Itu dapat di lakukan melalui opsi header. Namun, untuk **POST** sederhana, metode dan body saja sudah cukup 

```javascript
// Beberapa data untuk di kirim
const userData = {
    firstName: 'John'
    lastName: 'Doe',
    email: 'johndoe@gmail.com'
}


const makePostRequest = async () => {
    // Gunakan pernyataan try..catch 
    try {
        // Membuat konfigurasi untuk mengubah konfigurasi awal dari fetch
        const config = {
            method: 'POST', // Ubah request method
            headers: { // Ubah Content-Type
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData) // Tambahkan data yang mau di kirim dan harus berupa string
        }

        // Buat request GET pada fetch
        const response = await fetch('/users/register', config)

        // Convert respon ke format JSON
        const data = await response.json()

        // Tampilkan hasil yang sudah di convert ke console
        console.log(data)
    } catch (error) {
        // jika permintaan di tolak
        // tampilkan error ke console
        console.log(error)
    }
}

// Panggil makePostRequest()
makePostRequest()

// Output: 
// {
//   "error": false,
//   "category": "Programming",
//   "type": "single",
//   "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
//   "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
//   },
//   "id": 37,
//   "safe": true,
//   "lang": "en"
// }
```

```javascript
// Alternatif dengan fungsi handler promise
const config {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        
    }
}

fetch('/users/register', config)
```