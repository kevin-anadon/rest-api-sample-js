const { request, response } = require("express");
const books = require("../database/books.json");

const get_msg = async (req = request, res = response) => {
    try {
        const reserved = books.find((el) => el.name.toLowerCase() === req.query.book.toLocaleLowerCase())?.reserved;        
        if (reserved !== undefined) res.status(200).send({ reserved });
        else {
            const error = "Book not found";
            res.status(404).send({ error })
        }
    } catch (error) {
        throw(error); 
    }
}

module.exports = {
    get_msg
}
