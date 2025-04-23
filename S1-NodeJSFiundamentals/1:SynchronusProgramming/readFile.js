const fs = require('fs');

const filePath = "./lengthyFile.txt";

const data = fs.readFileSync(filePath, "utf-8");

console.log(`${Date.now()} File reading complete`); // Line 1

for (let i=0; i< 10; i++) {
    console.log(`${i} doing more work`);        // For Loop
}