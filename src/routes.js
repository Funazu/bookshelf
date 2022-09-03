const {
    addBookshelf,
    getAllBookshelf,
    getBookshelfById,
    editBookshelfById,
    deleteBookshelf,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookshelf,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookshelf,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookshelfById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookshelfById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookshelf,
  },
];

module.exports = routes;
