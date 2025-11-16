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


const getLength = (value: string | any[]): number => {
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
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
