const fs = require('fs');

const filePath = "./lengthyFile.txt";

const data = fs.readFile(filePath, "utf-8", (err, data) => {
    console.log(`${Date.now()} File reading 1 complete`); // Line 1
});


for (let i=0; i< 10; i++) {
    console.log(`${i} doing more work`);        // For Loop
}


setTimeout(() => {
    console.log("ABC Timer")
}, 0)

const data2 = fs.readFile(filePath, "utf-8", (err, data) => {
    console.log(`${Date.now()} File reading 2 complete`); // Line 1
});


for (let i=0; i< 10; i++) {
    console.log(`${ i + 10} doing more work`);        // For Loop
}



// 1. For loop first then line 1
// 2. Line 1 in between
// 3. Line 1 first then forloop
// 4. Depends on file size
