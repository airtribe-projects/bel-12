const outer = () => {
    console.log("Timer 1");
    setTimeout(inner, 1)
}

const inner = () => {
    console.log("Timer 2");
}


const main =  () => {
    console.log("start");
    setTimeout(outer, 1000);
}

main()



