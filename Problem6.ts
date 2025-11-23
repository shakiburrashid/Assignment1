interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

function printBookDetails(value:Book){
    return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${(value.isAvailable?`Yes`:`No`)}`)
} 

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1985,
  isAvailable: true,
};

printBookDetails(myBook);