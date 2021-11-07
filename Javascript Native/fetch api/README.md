# Fetch dalam javascript
Sebelumnya ada dua cara untuk melakukan request. Pertama dengan _`XMLHttpRequest`_, kedua dengan method ajax() pada _`JQuery`_. Untungnya JavaScript sekarang menawarkan cara ketiga yaitu dengan menggunakan _`Fetch Api`_. Dalam artikel kali ini kamu akan belajar banyak tentang  fetch api pada javascript


## Introduction
Fetch Api membuat kegiatan **meminta/request** dan handle **response** sangat lebih baik dan mudah dari pada cara lama dengan **XMLHttpRequest**.

Fetch Api merupakan tambahan baru untuk JavaScript. Apa yang di lakukan fetch API ini adalah kegiatan untuk **meminta/request layanan ke endpoint pada website lain atau website sendiri**, untuk mengambil response resource / sumber daya berupa data berformat **json** yang biasa di lakukan programmer untuk membangun sebuah website dengan data dari website lain ataupun website yang membutuhkan konsep microservice di dalamnya

## Dasar-dasar pemanggilan Api
Saat kita membuat permintaan dengan fetch API, kita akan membutuhkan dua hal. Yang pertama adalah metode `fetch()`. Metode inilah yang akan membuat permintaan. Metode pada dasarnya membutuhkan dua argumen. Argument yang kedua opsional. 

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
// Buat data untuk di kirim
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
```

```javascript
// Alternatif dengan fungsi handler promise
// Buat data untuk di kirim
const userData = {
    firstName: 'John'
    lastName: 'Doe',
    email: 'johndoe@gmail.com'
}

const config {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        JSON.stringify(userData)
    }
}

fetch('/users/register', config)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

## Delete request
Ketika kita ingin menghapus beberapa data, file, dll. Kita dapat membuat permintaan DELETE. Membuat jenis permintaan ini membutuhkan sintaks yang sedikit lebih banyak daripada permintaan GET, tapi kurang dari POST. Yang perlu kita lakukan adalah menyetel opsi metode untuk `fetch()` ke **DELETE**. Kemudian, kita perlu mengetahui URL yang benar dan apa yang ingin kita hapus.

```javascript
const makeDeleteRequest = async () => {
    // Gunakan pernyataan try..catch 
    try {
        // Membuat konfigurasi untuk mengubah konfigurasi awal dari fetch
        const config = {
            method: 'DELETE' // Ubah request method
        }

        // Buat request GET pada fetch
        const response = await fetch('/users/jogn', config)

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

// Panggil makeDeleteRequest()
makeDeleteRequest()
```

```javascript
// Alternatif dengan fungsi handler promise
const config = {
    method: 'DELETE'
}

fetch('/users/john', config)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

## PUT request
Jenis permintaan **PUT** paling sering di gunakan untuk memperbarui atau melakukan updating pada data atau sumber daya yang sudah ada. Permintaan ini terlihat hampir sama dengan **POST**. Perbedaan utama adalah bahwa opsi konfigurasi untuk `fetch()` harus di setel ke **PUT**. Cukup ingat saja ketika ingin membuat data kita menggunakan **POST**, ketika ingin mengubah data kita gunakan **PUT**

```javascript
const userData = {
    firstName: 'Joh\'nes',
    lastName: 'Brian',
    email: 'johnes@brian.com'
}

const makePutRequest = async () => {
    // Gunakan pernyataan try..catch 
    try {
        // Membuat konfigurasi untuk mengubah konfigurasi awal dari fetch
        const config = {
            method: 'PUT' // Ubah request method,
            body: JSON.stringify(userData) // Masukkan data yang ingin di kirim
        }

        // Buat request GET pada fetch
        const response = await fetch('/users/john', config)

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

// Panggil makePutRequest()
makePutRequest()
```

```javascript
// Alternatif dengan fungsi handler promise
const userData = {
    firstName: 'Joh\'nes',
    lastName: 'Brian',
    email: 'johnes@brian.com'
}

const config = {
    method: 'PUT',
    body: JSON.stringify(userData) // Masukkan data yang ingin di kirim
}

fetch('/users/john', config)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

## PATCH request
Jenis permintaan terakhir yang akan dibahas ialah permintaan **PATCH**. Jenis permintaan ini sangat mirip dengan **PUT**. Perbedaan antara keduanya adalah PUT digunakan untuk memperbarui versi lama dengan versi baru. Artinya, kita dapat memperbarui semuanya. Dengan **PATCH**, kita hanya memperbarui sebagian data yang ada, email pengguna misalnya.

```javascript
const userData = {
    email: 'johnbrian@gmail.com'
}

const makePatchRequest = async () => {
    // Gunakan pernyataan try..catch 
    try {
        // Membuat konfigurasi untuk mengubah konfigurasi awal dari fetch
        const config = {
            method: 'PATCH' // Ubah request method,
            body: JSON.stringify(userData) // Masukkan data yang ingin di kirim
        }

        // Buat request GET pada fetch
        const response = await fetch('/users/john', config)

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

// Panggil makePatchRequest()
makePatchRequest()
```

```javascript
// Alternatif dengan fungsi handler promise
const userData = {
    email: 'johnesbrian@gmail.com'
}

const config = {
    method: 'PATCH', 
    body: JSON.stringify(userData) // Masukkan data yang ingin di kirim
}

fetch('/users/john', config)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

## Catatan tentang Response object
Kita tadi membahas secara singkat metode yang dapat di gunakan pada respon objek dengan menggunakan `json`, tapi masih banyak metode yang bisa di gunakan untuk repon objek seperti `teks()`, `json()`, `FormData()`, `blob()`,
`arrayBuffer()`, `clone()`, `redirect()`. Metode-metode ini bukanlah segalanya yang dikandung oleh respon objek. Ini juga berisi sejumlah properti. Kemungkinannya, kamu mungkin menemukan beberapa properti ini akan berguna

Beberapa properti yang paling berguna dan paling sering dipakai adalah `statusText`, `status`, dan `ok`. `statusText` adalah string yang berisi pesan [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). `status` adalah nomor yang menentukan kode dari status respons. Ketika kita membuat permintaan dan berhasil, itu akan memiliki status dengan nilai 200

`ok` adalah boolean yang menentukan apakah status berada dalam rentang kode dari 200 hingga 299. Jadi jika permintaan kita berhasil atau `status` nya itu 200, nilai `ok` akan menjadi true. Dan satu lagi, ada juga properti `body`. Properti ini berisi data yang kita terima. Saat kita menggunakan beberapa metode untuk mengurai respons, itu akan masuk ke dalam properti `body` ini

## Kesimpulan
JavaScript Fetch API menyediakan cara yang mudah dan ramah untuk membuat permintaan. Saya harap artikel ini membantu kamu dalam mempelajari apa itu fetch API dan bagaimana cara kerjanya. Saya juga berharap contoh yang di kerjakan di atas bisa membantu kamu untuk mudah memahami Fetch API pada JavaScript. 