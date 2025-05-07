const internalCall = async () => {
    return new Promise((resolve, reject) => {
        console.log("Internal log");
        resolve();
    })
    
}


const main = async () => {
    setTimeout(() => {
        console.log('Log from timer');
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("Hello there 1123");
    })


    Promise.resolve().then(() => {
        console.log("Hello there");
    })


    await internalCall();



    //call back of promise
    console.log("End");
    process.nextTick(() => console.log("fromNextTick"))
}

main();


