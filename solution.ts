const formatValue = (value: number | string | boolean): (string | number | boolean) => {
    if (typeof value === 'string') {
        return `${value.toUpperCase()}`;
    }

    if (typeof value === 'number') {
        return (value * 10);
    }

    if (typeof value === 'boolean') {
        return value ? false : true;
    }

    return '';
}


const getLength = <T>(value: T): number => {
    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

type Item = {
    title: string;
    rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}


type MyArray = (number | string)[];
const getUniqueValues = (arr1: MyArray, arr2: MyArray): MyArray => {
    const result: MyArray = [];

    function valueExists(value: number | string): boolean {
        for (let r = 0; r < result.length; r++) {
            if (result[r] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!valueExists(arr1[i])) {
            result[result.length] = arr1[i];
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!valueExists(arr2[j])) {
            result[result.length] = arr2[j];
        }
    }

    return result;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products.reduce((acc, product) => {
        const discount = product.discount ? product.discount : 0;

        return acc + (product.price * product.quantity) * (1 - discount / 100);
    }, 0);
}
