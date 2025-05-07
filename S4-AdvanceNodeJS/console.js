setTimeout(() => console.log("A"), 0);

Promise.resolve()
.then(() => { // anpnPB
    console.log("B");
    return new Promise(resolve => setTimeout(() => { // anonP1, anonT2
        console.log("C");
        resolve();
    }, 0));
})
.then(() => { // anonThen
    console.log("D");
});


(async () => {
    console.log("E");
    await null;
    console.log("F"); // XYZ
})();

console.log("G");