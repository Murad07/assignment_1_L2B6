var formatValue = function (value) {
    if (typeof value === 'string') {
        return "".concat(value.toUpperCase());
    }
    if (typeof value === 'number') {
        return (value * 10);
    }
    if (typeof value === 'boolean') {
        return value ? false : true;
    }
    return '';
};
// console.log(formatValue('hello'));
// console.log(formatValue(50));
// console.log(formatValue(false));
// Problem - 01
var getLength = function (value) {
    return value.length;
};
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
// Problem - 02
