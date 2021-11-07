fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(console.log)
    .catch(error => {
        console.log(error)
    })