const { getAllBookshelf, getBookshelfById } = require('./read');
const addBookshelf = require('./create');
const editBookshelfById = require('./update');
const deleteBookshelf = require('./delete');

module.exports = {
    addBookshelf,
    getAllBookshelf,
    getBookshelfById,
    editBookshelfById,
    deleteBookshelf,
}