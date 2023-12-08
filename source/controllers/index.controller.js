const { request, response } = require("express");

const get_index = async (req = request, res = response) => {
    try {
        let msg = "Welcome to the index page!! \nThis is an API Sample JS app.";

        res.send(msg);  
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    get_index
}
