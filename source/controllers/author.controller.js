const { request, response } = require("express");

//Get object by id
const get_author = async (req = request, res = response) => {
    // Send request
    try {
        const author = "Jhon Doe";
        res.status(200).send({
            author
        });  
    } catch (error) {
        throw(error); 
    }
}

module.exports = {
    get_author
}