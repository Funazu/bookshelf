const bookshelf = require('../bookshelf');

const deleteBookshelf = (request, h) => {
  const { id } = request.params;
  const index = bookshelf.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookshelf.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }).code(404);
  return response;
};

module.exports = deleteBookshelf;