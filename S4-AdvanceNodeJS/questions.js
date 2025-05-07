setTimeout(() => console.log("A"), 0); // T1

Promise.resolve()
.then(() => { // anonPB
    console.log("B");
    return new Promise(resolve => setTimeout(() => { // anonP1, anonT2
        console.log("C");
        resolve();
    }, 0));
})
.then(() => { // anonThen
    console.log("D");
});

// IIFE Anon
(async () => {
    console.log("E");
    await null;
    console.log("F"); // XYZ
})();

console.log("G");