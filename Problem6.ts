interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

function printBookDetails(value:Book){
    return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${(value.isAvailable?`Yes`:`No`)}`)
} 

