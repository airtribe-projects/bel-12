const f1 = () => {
    console.log("F1");
}

const f2 = () => {
    console.log("F2");
    f1();
}

const f3 = () => {
    console.log("F3");
    f2();
}

const f4 = () => {
    console.log("F4");
    f3();
}

const main = () => {
    f4();
    console.log('Main')
}

main();
