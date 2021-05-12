function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let borrowed = books.filter((book) => book.borrows[0].returned == false)
  let notBorrowed = books.filter((book) => book.borrows[0].returned == true)
  result =[borrowed, notBorrowed]
  return result
}

function getBorrowersForBook(book, accounts) {
  

  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
