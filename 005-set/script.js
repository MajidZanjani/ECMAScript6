let books = new Set();

books.add('Pride and Prejudice');
books.add('War and Peace').add('Oliver Twist');

console.log(books);
console.log(books.size);

books.delete('Oliver Twist');
books.add('Pride and Prejudice');
books.add('Pride and Prejudice');
books.add('Pride and Prejudice');

books.forEach(function (item) {
  console.log(item);
});

console.log('Has Oliver Twist', books.has('Oliver Twist'));
