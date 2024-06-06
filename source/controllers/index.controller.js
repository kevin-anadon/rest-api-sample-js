const { request, response } = require("express");

const get_index = async (req = request, res = response) => {
    try {
        let msg = "<h1>Welcome to the index page!!</h1><br><h2>this is an API Sample JS app.</h2><br><p>Example paragraph. DevOps Test</p>";

        res.send(msg);  
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    get_index
}
