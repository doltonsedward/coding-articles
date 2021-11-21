# Kenalan dengan React js
React adalah library JavaScript yang digunakan untuk membangun antarmuka pangguna yang cepat dan interaktif. React js dikembangkan oleh perusahaan raksasa yang kita kenal sebelumnya dengan Facebook pada tahun 2011, Yang saya maksud sebelumnya itu karena sekarang perusahaan Facebook berganti nama jadi Meta. 

> Saat artikel ini ditulis, React sangat populer dengan 178k bintang di [Github](https://github.com/facebook/react) dan masih banyak yang gunakan sampai sekarang

<br />

## Pengantar
React JS adalah _open source client-side library_ dan _gratis_ untuk membangun Antarmuka Pengguna atau komponen UI yang dinamis. Komponen adalah kombinasi kode HTML dan JavaScript yang berisi semua fungsi yang diperlukan untuk menampilkan bagian kecil dari antarmuka pengguna yang lebih besar

React membuat semuanya sebagai komponen. Komponen dapat membuat HTTP request dan memuat data tanpa memuat ulang halaman keseluruhan. Ini disebut sebagai V dalam MVC. Stack Overflow Insights dari tahun 2021 menyatakan bahwa React adalah yang paling dicari, diinginkan oleh satu dari empat pengembang. [Insights 2021](https://insights.stackoverflow.com/survey/2021#web-frameworks)

<br />

## React adalah Library, bukan Framework
React JS secara teknis adalah library, bukan framework karena tidak memiliki beberapa hal penting yang disertakan oleh framework seperti Router, HTTP, dll. Misalnya, React tidak memiliki mekanisme routing di intinya, tetapi kita dapat menginstal itu menggunakan package manager, bahkan React menggunakan fetch API JavaScript asli dari pada menyediakan fetching API sendiri

<br />

## Render Hello World dengan JavaScript
Mari kita lihat bagaimana merender Hello World menggunakan JavaScript.

Dimulai dari membuat satu `div` dengan `id` sebagai `root`
```html
<div id="root"></div>
```

<br />

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

<br />

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

<br />

## Render Hello World dengan React APIs
Sekarang mari kita coba menggunakan React API untuk membuat markup yang kita butuhkan daripada menggunakan JavaScript murni (vanilla).

Kita membutuhkan dua API penting untuk mencapai tugas kita. Dalam vanilla JavaScript. mereka:
```javascript
document.createElement()
rootElement.append(domElement)
```

<br />

Versi React API
```javascript
React.createElement()
ReactDOM.render(reactElement, rootElement)
```

Mari lihat juga `React.createElement()` dengan lebih detail.

<br />

### React.createElement()
`React.createElement()` membutuhkan dua tiga parameter:
1. Komponen atau Tag yang akan digunakan untuk membuat element
2. Props untuk komponen
3. Children, Anak dari komponen

API ini kelihatannya seperti ini `React.createElement(component, props, ...children)`.
Jadi, untuk membuat element seperti `<div class="container">Hello World</div>`, kode nya bisa seperti ini
```javascript
React.createELement('div', { className: "container" }, "Hello World")
```

<br />

Di HTML kita butuh
```javascript
<div id="root"></div>
```

<br />

Untuk menambahkan `<div class="container">Hello World</div>` ke element root menggunakan React, we bisa seperti ini:
```javascript
const rootElement = document.getElementById('root')

const divElement = React.createElement('div', { className: 'container' }, 'Hello World')

ReactDOM.render(divElement, rootElement)
```

<br />

Nah, dari yang kita buat diatas, kamu pasti bisa melihat kemiripan React API dengan DOM API pada JavaScript murni (vanilla).

Perlu diperhatikan, kita bahkan dapat membuat elemen bersarang menggunakan ini.

Sebagai contoh, mari coba membuat markup berikut.
```html
<div class="container">
    <span>Hello</span>
    <span>World</span>
</div>
```

Untuk membuat markup diatas
```javascript
const rootElement = document.getElementById('root')

const helloElement = React.createElement('span', null, 'Hello')
const worldElement = React.createElement('span', null, 'World')
const divElement = React.createElement('div', { className: 'container' }, helloElement, worldElement)

ReactDOM.render(divElement, rootElement)
```

<br />

Kita bahkan bisa menggunakan properti `children` untuk menambahkan anak komponen seperti berikut.
```javascript
React.createElement('div', {
    className: 'container', 
    children: [helloElement, worldElement]
})
```

<br />

Bahkan bisa seperti ini
```jsx
React.createElement('div', { className: 'container' }, helloElement, worldElement)
```

<br />

## Menggunakan JSX
Jika kamu sudah menggunakan React atau melihat kode React kapan saja, kemungkinan besar kamu tidak akan melihat `React.createElement` digunakan. Sebagai gantinya, kamu mungkin telah melihat beberapa kode yang terlihat mirip dengan HTML. Mari kita lihat apa itu.
```jsx
const divElement = <div id="container">Hello World</div>
```

<br />

Kode diatas disebut [JSX](https://reactjs.org/docs/introducing-jsx.html), yang merupakan ekstensi sintaks untuk JavaScript yang bahkan dari React sendiri merekomendasikan untuk menggunakan ini. Tapi perlu di ingat, JSX bukanlah kode JavaScript yang valid, jadi kita menggunakan kompiler yang disebut [Babel](https://babeljs.io/) untuk melakukan konversi kode JSX ke kode `React.createElement` yang valid

Sekarang mari kita lihat betapa mudahnya membuat markup tadi dengan JSX.
```jsx
const rootElement = document.getElementById('root')

const divElement = <div className="container">
                        <span>Hello</span>
                        <span>World</span>
                    </div>

ReactDOM.render(divElement, rootElement)
```

<br />

Perhatikan kode diatas, kita menambahkan properti `class` tapi dengan `className`. Itu merupakan salah satu perbedaan antara JSX dan HTML.

Jadi mungkin kamu cukup ingat saja bagaimana penulisan yang benar dalam JavaScript agar mudah bekerja dengan JSX. 

<br />

### Interpolasi dalam JavaScript
Karena JSX ditulis dalam JavaScript itu sendiri, ada beberapa hal menarik yang dapat kamu lakukan. Salah satunya dengan menggunakan interpolasi JSX. Ini pada dasarnya memberi kita kemampuan untuk menggunakan javascript di dalam JSX. Setiap kali kamu melakukan interpolasi, kamu akan mengelilinginya dengan {  }. Ini memberitahu kompiler Babel bahwa interpolasi sedang digunakan di sini tepat di dalam tanda kurung kurawal.

Sebagai contoh, gunakan kode berikut
```javascript
const divElement = <div className="container">Hello World</div>
```

Sekarang, misalnya kamu mau membuat nama `class` dan konten text nya menjadi dinamis. Kamu dapat melakukan sesuatu seperti
```jsx
const divClassName = 'container'
const divTextContent = 'Hello World'

const divElement = <div className={divClassName}>{divTextContent}</div>
``` 

<br />

### Conditional and Loops
Kamu bahkan bisa membuat kondisi dan perulangan pada JSX
```jsx
{ condition ? <div>Hello World</div> : <div>Goodbye World</div> }
```

<br />

Seperti yang kamu lihat diatas, dengan mudah kita juga bisa menggunakan conditional dalam JSX. Ini akan sering kalian lakukan dan temui dalam project yang menggunakan **React Js**.

Bagaimana dengan perulangan ?
```jsx
{items.map(item => <div key={item.id}>{item.title}</div>)}
```

<br />

Untuk menggunakan perulangan, kita bisa gunakan fungsi `map`. Bahkan kita juga dapat menggunakan literal template di JSX seperti
```javascript
const element = <div id={`item-${itemId}`}>{itemContent}</div>
```

<br />

Untuk mengetahui lebih lanjut tentang JSX, kamu bisa mencoba mengunjungi dokumentasi asli nya tentang [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)

## Membuat custom component
Perhatikan kode JSX berikut
```jsx
<div className="container">
  <div className="message">Hello World</div>
  <div className="message">Goodbye World</div>
</div>
```

<br />

Pada kode diatas kamu bisa melihat `<div className="message"></div>` dibuat dua kali

Untuk menghindari duplikasi, hal paling sederhana yang bisa kita lakukan adalah membuat fungsi dan kemudian memanggilnya.

```jsx
const message = (text) => {
    return <div className="message">{text}</div>
}
```

```jsx
<div className="container">
    {message('Hello World')}
    {message('Goodbye World')}
</div>
```

<br />

Mari refactor sedikit dengan menggunakan object destructuring

```jsx
function message({ children }) {
    return <div className="message">{children}</div>
}
```

```jsx
<div className="container">
    {message({ children: 'Hello World' })}
    {message({ children: 'Goodbye World' })}
</div>
```

<br />

Bahkan bisa di refactor lagi dengan menggunakan `React.createElement`
```jsx
function message({children}) {
    return <div className="message">{children}</div>
}
```
```jsx
<div className="container">
    {React.createElement(message, null, 'Hello World')}
    {React.createElement(message, null, 'Goodbye World')}
</div>
```

<br />

Sebelumnya di semua contoh yang telah kita lihat, argumen pertama dari `React.createElement()` adalah string yang berisi nama elemen dari tag HTML seperti `span` atau `div`

Tetapi React.createElement juga menerima fungsi yang mengembalikan sesuatu yang dapat dirender seperti JSX, beberapa string, angka dll. 

Itu alasan kenapa kode diatas bisa bekerja, karena pada dasarnya sama saja perilakunya

Sekarang mari kita coba untuk konversikan kode diatas ke JSX
```jsx
function message({children}) {
    return <div className="message">{children}</div>
}
```

```jsx
<div className="container">
    <message>Hello World</message>
    <message>Goodbye World</message>
</div>
```

<br />

Kalau di lihat dari kode diatas, seperti nya sudah sempurna. Kalau kamu berpikir seperti itu maka jawabannya tidak. Kode diatas tidak akan berfungsi sebagaimana mestinya. Alasannya adalah bagaimana babel mengkompilasi kode JSX ke kode `React.createELement()` yang valid

`<message />` di kompilasi oleh babel ke `React.createELement('message')`. Tapi yang kita inginkan adalah `React.createElement(message)`. Dalam kasus pertama, argumen pertama adalah string, dalam kasus kedua, itu adalah fungsi

Agar babel mengubahnya menjadi apa yang kita butuhkan, kita harus membuat nama depan dari fungsi `message` menjadi huruf besar
```jsx
function Message({children}) {
    return <div className="message">{children}</div>
}
```
```jsx
<div className="container">
    <Message>Hello World</Message>
    <Message>Goodbye World</Message>
</div>
```

<br />

Sekarang `<Message>Hello World</Message>` ini akan dikompilasi ke `React.createElement(Message, { children: 'Hello World' })`, yang persis seperti yang kita kita butuhkan

JSX | React.createElement() 
:--- | :--- |
`<Capitalized />` | `React.createElement(Capitalized)` 
`<property.access />` | `React.createElement(property.access)` 
`<Property.Access />` | `React.createElement(Property.Access)` 
`<Property['Access'] />` | `SyntaxError` 
`<lowercase />` | `React.createElement('lowercase')` 
`<kebab-case />` | `React.createElement('kebab-case')` 
`<Upper-Kebab-Case />` | `React.createElement('Upper-Kebab-Case')` 
`<Upper_Snake_Case />` | `React.createElement(Upper_Snake_Case)` 
`<lower_snake_case />` | `React.createElement('lower_snake_case')`

Jadi, kita dapat melihat bahwa nama komponen harus **_UpperCamelCased_** agar berfungsi sebagaimana dimaksud.

## PropTypes
Mari refactor sedikit komponen `<Message />` sebelumnya sehingga menerima nama prop.
```jsx
function Message({ name }) {
    return <div className="message">Hi, my name is {name}.</div>
}
```
```jsx
<Message name='John Doe' />
<Message />
```

<br />

Hasil kode diatas.
```
Hi, my name is John Doe.
Hi, my name is .
```

<br />

Seperti yang kalian lihat yg diberikan properti name akan menampilkan output seperti pada nilai dari properti tersebut sedangkan yang tidak mengisi properti sama sekali akan tetap tampil tapi tanpa nama. 

Tentunya ini tidak terlihat bagus. Untungnya, React memberi kita cara untuk menetapkan properti nya harus berupa tipe apapun yang kita buat menggunakan `PropTypes`.

Mari buat `PropTypes` untuk menerapkan tpe `name` menjadi sring
```jsx
const PropTypes = {
    string(props, propName, componentName) {
        if (typeof props[propName] !== 'string') {
            return new Error(`In component ${componentName}, ${propName} needs to be a string, but it was of type ${typeof props[propName]}`)
        }
    },
}

function Message({ name }) {
    return <div className="message">Hi, your name is {name}.</div>
}

Message.propTypes = {
    name: PropTypes.string,
}
```

<br />

Sekarang setiap kali kita melewatkan apa pun selain string untuk prop `name`, itu menimbulkan kesalahan.

Karena kasus seperti ini sangat umum, tim React mengembangkan library yang disebut [prop-types](https://github.com/facebook/prop-types) yang dapat kita gunakan dengan cara yang sama - PropTypes.string.isRequired. Lihat [repo ini](https://github.com/facebook/prop-types) untuk lebih jelasnya.

Perhatikan bahwa PropTypes akan dinonaktifkan di lingkungan produksi karena alasan kinerja

## React Fragments
Yang satu ini saya pikir masih sering dan pasti akan dipakai sampai sekarang. Kita secara sadar saat bekerja dengan JSX tidak akan bisa me render semua elemen sekaligus, minimal ada satu `parent element`

Sebagai contoh mari coba buat dari markup nya dulu
```jsx
<div id='root'>
    <span>Hello</span>
    <span>World</span>
</div>
```

<br />

Kode nya akan seperti ini jika kita mencoba membuatnya
```jsx
const rootElement = document.getElementById('root')

const elementOne = React.createElement('span', null, 'Hello')
const elementTwo = React.createElement('span', null, 'World')

ReactDOM.render(????, rootElement)
```

<br />

Sekarang apa yang harus di tempatkan pada `????` di baris terakhir?. Itu tidak bisa berisi elementOne atau elementTwo, karena kita ingin keduanya di render (bukan hanya satu). Tetapi ReactDOM.render() hanya mengambil satu elemen react sebagai argumen dan kemudian menambahkannya ke rootElement 

Salah satu cara untuk mencapai ini adalah jika kita dapat membungkus kedua elmeen dalam elemen baru.
```jsx
const rootElement = document.getElementById('root')

const elementOne = React.createElement('span', null, 'Hello')
const elementTwo = React.createElement('span', null, 'World')

const combinedElement = React.createElement('div', null, elementOne, elementTwo)

ReactDOM.render(combinedElement, rootElement)
```

<br />

Kode diatas mungkin terlihat bagus, tapi menghasilkan HTML yang berbeda dari yang kita butuhkan

Kode diatas akan di render seperti ini.
```jsx
<div id='root'>
    <div>
        <span>Hello</span>
        <span>World</span>
    </div>
</div>
```

<br />

Ini yang menjadi alasan kenapa kita tidak boleh menggunakan kode seperti berikut
```jsx
function Message() {
    return <span>Hello</span><span>World</span>
}
```

<br />

Karena tidak ada cara bagi babel untuk dapat mengkonversikan ini menjadi satu `React.createElement()`

`React Fragments` diperkenalkan di [React v16.2.0](https://github.com/facebook/react/blob/main/CHANGELOG.md#1620-november-28-2017) untuk memecahkan masalah ini. Sekarang kamu dapat mengembalikan beberapa elemen hanya dengan menggungkusnya dengan React.Fragment

Sebagai contoh.
```jsx
function Message() {
    return (
        <React.Fragment>
            <span>Hello</span>
            <span>World</span>
        </React.Fragment>
    )
}
```

Semenjak berkembangnya React, kita bisa juga gunakan ini sebagai alternative `React.Fragment` 

```jsx
function Message() {
    return (
        <>
            <span>Hello</span>
            <span>World</span>
        </>
    )
}
```

<br />

## Kesimpulan
Apa yang sudah kita pelajari tadi?

* Asal usul React, siapa yang buat dan apa fungsi nya
* Perbandingan cara merender JavaScript murni dengan React API
* Perkenalan dan cara gunakan JSX
* Interpolasi dalam JavaScript
* Cara gunakan kondisi dan perulangan pada JSX
* Membuat custom component
* Apa itu PropTypes dan cara gunakannya
* React.Fragment

Ada banyak sekali library atau bahkan framework yang bisa kalian gunakan. Semua hadir dengan keunggulan masing-masing. Tetaplah pelajari tentang teknologi yang ingin kamu gunakan pada saat ini. Gunakan dengan bijak, karena pada dasarnya library dibuat untuk mempermudah kita. 