const { request, response } = require("express");
const books = require("../database/books.json");

const get_author = async (req = request, res = response) => {
    try {
        const author = books.find((el) => el.name.toLowerCase() === req.query.book.toLocaleLowerCase())?.author;
        if (author) res.status(200).send({ author });
        else {
            const error = "Book not found";
            res.status(404).send({ error })
        }
    } catch (error) {
        throw(error); 
    }
}

module.exports = {
    get_author
}