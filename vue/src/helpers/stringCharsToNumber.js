const stringCharsToNumber = (str) => str.split('').reduce((a, c, i) => a += c.charCodeAt(0) * 10 ** i, 0);

export default stringCharsToNumber;
