const express = require('express');
const app = express();
const port = 3000;
const books = require("./data/books.json") // Para pasarme todos los libros

app.use(express.json());

/*1*/
//http://localhost:3000/all
app.get('/all', (req, res) => {
    res.status(200).json(books)
})

/*2*/
//http://localhost:3000/first
app.get('/first', (req, res) => {
    res.status(200).json(books[0])
})

/*3*/
//http://localhost:3000/last
app.get('/last', (req, res) => {
    res.status(200).json(books[books.length - 1])
})

/*4*/
//http://localhost:3000/middle
app.get('/middle', (req, res) => {
    res.status(200).json(books[books.length / 2])
})

/*5*/
//http://localhost:3000/author/dante-alighieri
app.get('/author/dante-alighieri', (req, res) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Dante Alighieri") {
            res.status(200).json(books[i].title)
        }
    }
})
// Método .FIND ---> Buscar algo en concreto
/* app.get("/author/dante-alighieri", (req, res) => {
    const book = books.find((item) => item.author == "Dante Alighieri");
    res.status(200).json(book.title);
}); */

/*6*/
//http://localhost:3000/country/charles-dickens
app.get('/country/charles-dickens', (req, res) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Charles Dickens") {
            res.status(200).json(books[i].country)
        }
    }
})

/*7*/
//http://localhost:3000/year&pages/cervantes
app.get('/year&pages/cervantes', (req, res) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Miguel de Cervantes") {
            res.status(200).json({ pages: books[i].pages, year: books[i].year })

        }
    }
})

/*8*/
//http://localhost:3000/country/count/spain
app.get('/country/count/spain', (req, res) => {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].country == "Spain") {
            count += 1
        }
    }
    res.status(200).json(count)
})

/*9*/
//http://localhost:3000/country/at-least/germany
app.get('/country/at-least/germany', (req, res) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].country == "Germany") res.status(200).json(true)
    }
})
// Método .SOME ---> Buscar si hay alguno que cumpla la condición ---> true/false
/* app.get("/country/at-least/germany", (req, res) => {
    const comparison = books
        .some(element => element.country === "Germany");
    res.status(200).json(comparison);
}); */

/*10*/
//http://localhost:3000/pages/all-greater/200
app.get('/pages/all-greater/200', (req, res) => {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].pages > 200) count++
    }
    if (count == 100) {
        res.status(200).json(true)
    } else res.status(200).json(false)
})
// Método  .EVERY ---> Para comprobar si todos cumplen una condición ---> true/false
/* app.get("/pages/all-greater/200", (req, res) => {
    const comparison = books
        .every(element => element.pages > 100);
    res.status(200).json(comparison);
}); */


app.listen(port, () => { //Tu servidor va a escuchar en el puerto indicado
    console.log(`Example app listening on http://localhost:${port}`)
})