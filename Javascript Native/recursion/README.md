# Untuk paham rekursi, kita harus paham dulu apa itu rekursi

> "To understand recursion, one must first understand recursion" - Unknow

Kalau kamu bingung dengan kata-kata di atas, Tenang saja kamu tidak sendiri 😂. Kalau kamu seperti saya maka kamu mungkin tidak mengerti **_rekursi/recursion_** pada saat pertama kali membaca nya

Menurut ku itu karena:
1. Rekursif merupakan konsep yang sulit dalam dirinya sendiri
2. Kebanyakan tutorial dan artikel yang beredar tidak terlalu jelas

Untuk beberapa alasan, sebagian besar artikel yang menjelaskan rekursi menggunakan contoh bilangan **_Faktorial_** dan deret **_Fibonacci_**. Itu berarti kita harus paham dulu cara kerja angka **_Fibonacci_** lalu menghubungkannya dengan rekursi, dan bakal membuat kita pusing di awal padahal niat nya belajar biar mudah paham.


## Perkenalan singkat
Cara paling sederhana untuk menggambarkan apa itu rekursif, kita bisa katakan bahwa rekursif adalah fungsi yang memanggil dirinya sendiri. Fungsi yang memanggil dirinya sendiri itulah yang di sebut sebagai "_**recursive function**_". Tidak masalah apakah itu sebuah rekursif dalam JavaScript atau bahasa lain. Ide utamanya adalah kita memiliki sebuah fungsi dan fungsi ini memanggil dirinya sendiri, Setidaknya sekali.

![Fungsi rekursif](https://i.ibb.co/HhPnqtz/carbon-1.png "Fungsi rekursif")


## Apa itu rekursif ?
Dalam istilah paling dasar, rekursif adalah suatu fungsi yang memanggil dirinya sendiri sampai tidak perlu lagi.

Fungsi rekursif bukan sembarang fungsi. Ada beberapa kondisi yang harus terpenuhi oleh setiap fungsi rekursif. Kenapa harus menggunakan kondisi?. 

Katakanlah kamu memiliki fungsi. Fungsi ini memanggil dirinya sendiri. Apa yang terjadi kalau kamu memanggil fungsi ini? Jelas yah, fungsi itu akan memanggil dirinya sendiri. Selanjutnya gimana? Ketika fungsi itu memanggil dirinya sendiri, dia akan memanggil dirinya sendiri lagi, dipanggil lagi, dan begitu saja seterusnya sampai terjadi error **Maximum callstack size** seperti dibawah

![Call stack](https://i.stack.imgur.com/BRgh1.jpg "Call stack")

Sebagai contoh: 
Pikirkan rekursi sebagai balapan sirkuit. Seperti berlari di trek yang sama berulang-ulang tapi putarannya terus mengecil setiap saat. Dan akhirnya, kamu akan menjalankan putaran terakhir yang terkecil dan balapan berakhir di putaran terakhir 

Sama dengan rekursi, fungsi nya terus memanggil diri sendiri dengan input yang akan semakin mengecil sampai berhenti. 

Tapi fungsi tidak memutuskan sendiri kapan harus berhenti. Kita harus memberi tahu kapan suatu fungsi rekursif berhenti memanggil dirinya sendiri. Kita memberhentikan fungsi dengan kondisi yang dikenal sebagai **_Base Case_**.


## Base Case
Base case adalah nama yang bagus untuk kondisi tertentu. Ini juga disebut **"base condition"**. Kondisi ini akan memaksa fungsi untuk melakukan salah satu dari dua hal. Jadi jika kondisi bernilai false, fungsi rekursif akan memanggil dirinya sendiri lagi. Jika kondisi bernilai true, fungsi rekursif hanya akan mengembalikan nilai dan berhenti memanggil dirinya

Cara termudah untuk membuat _base case_ ini adalah dengan menggunakan pernyataan if...else sederhana. Dalam satu blok, kita akan mengembalikan beberapa nilai. Di blok lain kita akan memanggil fungsi rekursif lagi. Ini memungkinkan kita untuk menghentikan fungsi pada waktu yang tepat.

```javascript
// Fungsi rekursi sederhana
function recursive() {
  // Buatkan base case / kasus dasar
  if (/* kondisi */) {
    // Kembalikan apa saja dari pada memanggil fungsi recursive lagi
    return /* nilai apa saja */
  } else {
    // Panggil fungsi recursive
    recursive()
  }
}

// Call the recursive function
recursive()
```

Kita bisa membuat kode nya lebih pendek lagi. Kita dapat mengganti pernyataan if..else dengan [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator?retiredLocale=id)

```javascript
// Fungsi rekursi dengan ternary operator
function recursive() {
  // Buatkan base case / kasus dasar
  return (/* kondisi */) ? /* nilai apa saja */ : recursive()
}

// Call the recursive function
recursive()
```

## Contoh rekursi
Dari tadi kita sudah membahas sedikit dan berkenalan dengan **_rekursi/recursion_**. Sekarang mari kita lihat beberapa contoh untuk paham cara kerja rekursi.

Ingat pertama kali belajar tentang loop? Contoh pertama yang mungkin kamu lakukan adalah program hitung mundur. Ayo kita coba buatkan

Pertama, mari kita pahami apa yang kita ingin program kita lakukan. Hitung mundur dari angka yang diberikan ke angka terkecil, kurangi 1 setiap kali

Anggaplah kita mulai dari angka 5 dan berekspektasi outputnya jadi seperti ini:

```javascript
// 5
// 4
// 3
// 2
// 1
```

Oke, jadi bagaimana tuh kode nya kalau dalam rekursi? 

```javascript
let countDown = number => {
    // base case
    if (number === 0) {
        return // keluar dari fungsi apabila argumen nya 0
    }

    console.log(number)

    // setiap memanggil dirinya sendiri, 
    // nilai inputan atau argumen akan berkurang 1 sampai kondisi if diatas terpenuhi
    return countDown(number - 1) 
}

console.log(countDown(5)) // 5, 4, 3, 2, 1
```

Jadi apa yang sebenarnya terjadi ?
Jika kamu perhatikan, hal pertama yang kita lakukan adalah mendefinisikan base case. Kenapa ? Karena fungsi kita perlu tau kapan dia akan berhenti memanggil dirinya sendiri.

Kamu tidak akan pernah mulai balapan kalau tidak tau berapa lama balapannya kan?

Jika kamu tidak memberi tau fungsi kapan harus berhenti, maka sesuatu yang disebut stackoverflow akan terjadi. Stack akan diisi dengan fungsi yang dipanggil tetapi tidak kembali atau dikeluarkan dari tumpukan

Fungsi rekursif nya terjadi pada bari ke 11 `return countDown(number - 1) `. Di sana kita memberi tahu fungsi untuk terus mengembalikan dirinya sendiri tapi dengan keadaan input atau argumen yang terus berkurang satu setiap kali.

Kira kira seperti ini yang terjadi

```javascript
// Input sekarang adalah 5
// Apakah 5 sama dengan 0 ?
// Tidak, tampilkan 5 ke console.
// Fungsi nya dipanggil lagi dengan number - 1 ATAU 5 - 1
// Input sekarang adalah 4
// Apakah 4 sama dengan 0 ?
// Tidak, tampilkan 4 ke console.
// Dan berulang terus sampai input nya itu sama dengan 0 maka fungsi nya tidak akan dipanggil lagi
```

Oke ya, keliatan nya sudah masuk akal untuk dimengerti. Mari coba contoh lain.

Tahukah kamu gimana kita dapat mengetahui bahwa suatu bilangan genap dengan menggunakan operator remainder/sisa (%)? Jadi jika ada bilangan % 2 === 0 maka bilangan itu genap atau jika bilangan % 2 === 1 maka bilangan itu ganjil.

Nah, ternyata ada cara lain.

Jadi kalau kita terus terusan mengurangi dua dari suatu bilangan hingga bilangan terkecil adalah 0 atau 1 maka kita dapat mengetahui apakah bilangan tersebut genap atau ganjil

Mari kita coba dengan rekursi. Jadi, kalau kita memberikan angka 6 pada program kita dan akan mengembalikan 'Genap' karena 6-2-2-2 = 0. Dan jika angka nya itu 7, program kita akan mengembalikan 'Ganjil' karena 7-2-2-2 = 1.

Jadi seperti ini kode nya
```javascript
// Fungsi untuk cek angka genap atau ganjil
let oddOrEven = (number) => {
    // Base case
    if (number === 0) { // Cek apakah number ketika dikurang hasil akhirnya 0
        return 'Genap'
    } else if (number === 1) { // Cek apakah number ketika dikurang hasil akhirnya 1
        return 'Ganjil'
    } else {
        // Panggil ulang fungsi dengan number yang akan terus berkurang 2
        return oddOrEven(number - 2)
    }
}

console.log(oddOrEven(20)) // Genap
console.log(oddOrEven(75)) // Ganjil
console.log(oddOrEven(98)) // Genap
console.log(oddOrEven(113)) // Ganjil
```

Sama seperti tadi, langkah pertama adalah memberi tahu fungsi kapan harus berhenti memanggil dirinya sendiri. Kemudian kita memberi tahu apa yang harus dilakukan ketika ia memanggil dirinya sendiri.

## Rekursi vs Perulangan
Dalam hal kecepatan, loop berjalan jauh lebih cepat daripada fungsi rekursif. Menulis loop juga lebih mudah daripada fungsi rekursif. Dan dalam hal keterbacaan, lebih mudah untuk mengetahui apa yang terjadi dengan loop daripada fungsi rekursif. 

Tapi fungsi rekursif terlihat lebih elegan.

Jadi apa pilihan terbaik ? Efisien atau kecepatan ?

Berikut kutipan dari buku eloquent JavaScript.

> Worrying about efficiency can be a distraction. It’s yet another factor that
> complicates program design, and when you’re doing something that’s already difficult, 
> that extra thing to worry about can be paralyzing. 
> Therefore, always start by writing something that’s correct and easy to understand.
> If you’re worried that it’s too slow—which it usually isn’t since most code simply isn’t executed often enough to take any significant amount
> of time—you can measure afterward and improve it if necessary.

Pada titik ini kamu mungkin bertanya tanya kenapa kamu pernah menggunakan fungsi rekursif padahal perulangan biasa jauh lebih mudah di baca, di buat bahkan di pakai.

Ya itu memang benar, tapi ada beberapa masalah yang lebih mudah di selesaikan dengan rekursi. Jika kamu ingin menjelajahi satu masalah seperti itu, sempatkan waktu mu untuk membaca bab 3 dari [Eloquent JavaScript](https://eloquentjavascript.net/03_functions.html).

Setelah menjadi fasih dalam rekursif, bijak lah dalam menggunakannya. Ini bukan tentang seberapa elegan kode mu tapi tentang seberapa mudah untuk di baca dan dibuat. Ada masa nya kapan kita menggunakan rekursif dan ada juga masa nya kapan kita menggunakan perulangan

## Kesimpulan
Rekursi merupakan topik **_advanced_** yang bisa sangat sulit untuk dipahami sepenuhnya. Namun, ada baiknya kamu menyempatkan waktu untuk mempelajari nya agar tidak kaku dalam ilmu. Rekursi dapat menjadi alat yang sangat berguna untuk menyelesaikan beberapa masalah dengan lebih baik dan lebih cepat. 

Seperti yang saya bilang tadi diatas. Gunakan lah rekursif dengan bijak. Rekursif bukanlah pengganti perulangan bukan juga yang terbaik untuk penyelesaian masalah. Ada masa waktu kapan pakai rekursif kapan pakai looping, semua tergantung keadaan kita saat membuat program. Saya harap artikel ini membantu kamu dalam memahami rekursif dan cara dia bekerja pada JavaScript.