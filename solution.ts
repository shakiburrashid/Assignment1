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

/* type Data = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(data: Data[]): number {
    return data.reduce((total, prd) => {
        const discount = (prd.discount) ? (prd.price / 100) : 0;
        const PriceDiscount = prd.price - prd.price * discount;
        const TotalPrice = PriceDiscount * prd.quantity;

        return total + TotalPrice;
    }, 0);
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));
console.log(calculateTotalPrice(products));





*/




type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const discount = product.discount ? product.discount / 100 : 0;
    const finalPrice = product.price - product.price * discount;
    const productTotal = finalPrice * product.quantity;

    return total + productTotal;
  }, 0);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
// Output: 127.5
