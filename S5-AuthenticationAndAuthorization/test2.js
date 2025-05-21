Promise.resolve().then(() => {  //P1
    console.log("P1");
});

Promise.resolve().then(() => {  //P2
    console.log("P2");
    process.nextTick(() => console.log("N1"));
});

process.nextTick(() => console.log("N2"));

Promise.resolve().then(() => {  //P3
    console.log("P3");
});