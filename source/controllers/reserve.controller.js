const { request, response } = require("express");

// Displays "$HELLO_MSG $HELLO_TARGET"
const get_msg = async (req = request, res = response) => {
    // Send request
    try {
        const name = req.query.name; 
        const book = req.query.book;
        const message = `Hello ${name}, ${book} book is now reserved for you.`;
        res.status(200).send({ message });  
    } catch (error) {
        throw(error); 
    }
}

module.exports = {
    get_msg
}
