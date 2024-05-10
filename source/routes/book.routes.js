const { Router } = require("express");
const { get_book, insert_book, delete_book, update_book } = require("../controllers/book.controller");

const router = Router();

// Get book info
router.get('/', get_book);

// Insert a book
router.post('/', insert_book);

// Remove a book
router.delete('/', delete_book);

// Update a book
router.put('/', update_book);

module.exports = router;