const formatValue = (value: number | string | boolean) => {
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

// console.log(formatValue('hello'));
// console.log(formatValue(50));
// console.log(formatValue(false));
// Problem - 01