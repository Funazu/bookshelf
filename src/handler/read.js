const bookshelf = require('../bookshelf');

const getAllBookshelf = (request, h) => {
  const { name, reading, finished } = request.query;
  if (name) {
    const bookshelf = bookshelf.filter((b) => b.name.toLowerCase() === name.toLowerCase());
    return h.response({
      status: 'success',
      data: {
        books: bookshelf.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }).code(200);
  }
  if (reading) {
    const bookshelf = bookshelf.filter((b) => Number(b.reading) === reading);
    return h.response({
      status: 'success',
      data: {
        books: bookshelf.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }).code(200);
  }
  if (finished) {
    const bookshelf = bookshelf.filter((b) => Number(b.finished) === finished);
    return h.response({
      status: 'success',
      data: {
        books: bookshelf.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }).code(200);
  }
  if (!name && !reading && !finished) {
    return h.response({
      status: 'success',
      data: {
        books: bookshelf.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }).code(200);
  }
};

const getBookshelfById = (request, h) => {
  const { id } = request.params;
  const book = bookshelf.filter((b) => b.id === id)[0];
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
  return response;
};

module.exports = { getAllBookshelf, getBookshelfById };