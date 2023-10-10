const { request, response } = require("express");
const books = require("../database/books.json");

const get_book = async (req = request, res = response) => {
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
    get_book
}