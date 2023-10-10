const { Router } = require("express");
const { get_book } = require("../controllers/book.controller");

const router = Router();

// Get book info
router.get('/', get_book);

module.exports = router;