const { request, response } = require("express");

//Get index page
const get_index = async (req = request, res = response) => {
    // Send request
    try {
        let msg = "Welcome to the index page!! \nThis is API Sample JS app.";

        res.send(msg);  
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    get_index
}