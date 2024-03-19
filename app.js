const express = require('express');
const app = express();
const port = 3000;
const books = require("./data/books.json")

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
    for(let i = 0; i < books.length; i++) {
        if(books[i].author == "Dante Alighieri") {
            return res.status(200).json(books[i].title)
        }
    }
})

/*6*/
//http://localhost:3000/country/charles-dickens
app.get('/country/charles-dickens', (req, res) => {
    for(let i = 0; i < books.length; i++) {
        if(books[i].author == "Charles Dickens") {
            return res.status(200).json(books[i].country)
        }
    }
})

/*7*/
//http://localhost:3000/year&pages/cervantes
app.get('/year&pages/cervantes', (req, res) => {
    for(let i = 0; i < books.length; i++) {
        if(books[i].author == "Miguel de Cervantes") {
            res.status(200).json({pages: books[i].pages, year: books[i].year})
            
        }
    }
})

/*8*/
//http://localhost:3000/country/count/spain
app.get('/country/count/spain', (req, res) => {
    let count = 0;
    for(let i = 0; i < books.length; i++) {
        if(books[i].country == "Spain") {
            count += 1
        }
    }
    return res.status(200).json(count)
})

/*9*/
//http://localhost:3000/country/at-least/germany
app.get('/country/at-least/germany', (req, res) => {
    let count = 0;
    for(let i = 0; i < books.length; i++) {
        if(books[i].country == "Germany") return res.status(200).json(true)
    } 
})

/*10*/
//http://localhost:3000/pages/all-greater/200
app.get('/pages/all-greater/200', (req, res) => {
    let count = 0;
    for(let i = 0; i < books.length; i++) {
        if(books[i].pages > 200) count++
    }
    if(count == 100) {
        res.status(200).json(true)
    } else res.status(200).json(false)
})


app.listen(port, () => { //Tu servidor va a escuchar en el puerto indicado
    console.log(`Example app listening on http://localhost:${port}`)
})