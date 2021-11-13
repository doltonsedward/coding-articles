# Rekursif

> "To understand recursion, one must first understand recursion"

Kalau kamu bingung dengan kata-kata di atas, Tenang saja kamu tidak sendiri 😂. Kalau kamu seperti saya maka kamu mungkin tidak mengerti **_rekursi/recursion_** pada saat pertama kali membaca nya

Menurut ku itu karena:
1. Rekursif merupakan konsep yang sulit dalam dirinya sendiri
2. Kebanyakan tutorial dan artikel yang beredar tidak terlalu jelas

Untuk beberapa alasan, sebagian besar artikel yang menjelaskan rekursi menggunakan contoh bilangan **_Faktorial_** dan deret **_Fibonacci_**. Itu berarti kita harus paham cara kerja angka **_Fibonacci_** lalu menghubungkannya dengan rekursi, dan bakal membuat kita pusing di awal padahal niat nya belajar biar mudah paham.


## Perkenalan singkat
Cara paling sederhana untuk menggambarkan apa itu rekursif, kita bisa katakan bahwa rekursif adalah fungsi yang memanggil dirinya sendiri. Fungsi yang memanggil dirinya sendiri itulah yang di sebut sebagai "_**recursive function**_". Tidak masalah apakah itu sebuah rekursif dalam JavaScript atau bahasa lain. Ide utamanya adalah anda memiliki sebuah fungsi dan fungsi ini memanggil dirinya sendiri, Setidaknya sekali.

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