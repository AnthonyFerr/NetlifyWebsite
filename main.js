const fs = require('fs');

function getRandomLine(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}

// Usage
const randomLine = getRandomLine('./quotes.txt');
console.log(randomLine);