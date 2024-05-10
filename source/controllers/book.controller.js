const { request, response } = require("express");
const fs = require("fs")
const path = require("path");

const get_books = async (req = request, res = response) => {
    return require("../database/books.json");
} 

const get_book = async (req = request, res = response) => {
    try {
        const books = await get_books()
        const book = books.find((el) => el.name.toLowerCase() === req.query.book.toLocaleLowerCase());
        if (book) res.status(200).send(book); 
        else {
            const error = "Book not found";
            res.status(404).send({ error })
        } 
    } catch (error) {
        throw(error); 
    }
}

const insert_book = async (req = request, res = response) => {
    try {
        // book = name: string, author: string, genre: Array of string, reserved: boolean (default false)
        const newBook = req.body
        newBook.reserved = false

        // Check if the book has all properties
        if (newBook?.name && newBook?.author && newBook?.genre) {
            // fs.writeFileSync(path.resolve(__dirname,"../database/books.json"), JSON.stringify(newBook))
            const books = await get_books()
            fs.readFile(path.resolve(__dirname,"../database/books.json"), (err, data) => {
                console.log(books);
                books.push(newBook)
                fs.writeFileSync(path.resolve(__dirname,"../database/books.json"), JSON.stringify(books))
                const msg = 'Book has been succesfully inserted'
                res.status(200).send({ msg }); 
            })
        } else {
            const error = "Missing book info";
            res.status(404).send({ error })
        } 
    } catch (error) {
        throw(error); 
    }
}

const delete_book = async (req = request, res = response) => {
    try {
        const book = books.find((el) => el.name.toLowerCase() === req.query.book.toLocaleLowerCase());
        if (book) res.status(200).send(book); 
        else {
            const error = "Book not found";
            res.status(404).send({ error })
        } 
    } catch (error) {
        throw(error); 
    }
}

const update_book = async (req = request, res = response) => {
    try {
        const book = books.find((el) => el.name.toLowerCase() === req.query.book.toLocaleLowerCase());
        if (book) res.status(200).send(book); 
        else {
            const error = "Book not found";
            res.status(404).send({ error })
        } 
    } catch (error) {
        throw(error); 
    }
}

module.exports = {
    get_book,
    insert_book,
    delete_book,
    update_book
}