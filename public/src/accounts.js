function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id == id)
  return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  books.forEach(({borrows}) => {
    borrows.forEach(({id}) => {if (id == account.id) result ++ })
  })
  return result
}


function getBooksPossessedByAccount(account, books, authors) {
  

  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
