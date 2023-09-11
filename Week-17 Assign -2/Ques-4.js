// [ title, author, and year]

let books = {
  title: "Lords Of the Rings",
  author: "J. R. R. Tolkien",
  year: 1954,
};

function createList(books) {
  let newlist = Object.create(books);
  books.title1 = "Title 1";
  books.title2 = "Title 2";
  books.title3 = "Title 3";
  books.title4 = "Title 4";

  console.log(newlist);
}

function arrangeit(books, createList) {
  return createList(books);
}

console.log(arrangeit(books, createList));
