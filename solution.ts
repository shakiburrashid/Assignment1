//* Problem 1 -----------

const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    }
    if (typeof value === 'number') {
        return value * 10
    }
    if (typeof value === 'boolean') {
        return !value
    }
}


//* Problem 2 -----------

const getLength = (value: string | object) => {

    if (typeof value === 'string') {
        return value.length
    }
    if (Array.isArray(value)) {
        return value.length;
    }
}



//* Problem 3 -----------
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }

    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
}


//* Problem 4 -----------

type value = {
    title: string;
    rating: number;
};

function filterByRating(Value: value[]): value[] {
    return Value.filter(data => data.rating >= 4);
}

//* Problem 5 -----------

type UserData = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}


function filterActiveUsers(value: UserData[]): UserData[] {
    return value.filter(data => data.isActive)
}


//* Problem 6 -----------

interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

function printBookDetails(value: Book) {
    return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${(value.isAvailable ? `Yes` : `No`)}`)
}

//* Problem 7 -----------

function getUniqueValues(value1: number[], value2: number[]): number[] {
    return Array.from(new Set([...value1, ...value2]));

}



//* Problem 8 -----------



type Data = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(data: Data[]): number {
  return data.reduce((total, Prd) => {
    const discount = Prd.discount ? Prd.discount / 100 : 0;
    const finalPrice = Prd.price - Prd.price * discount;
    const PrdTotal = finalPrice * Prd.quantity;

    return total + PrdTotal;
  }, 0);
}
