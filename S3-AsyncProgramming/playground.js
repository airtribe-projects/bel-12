const asyncFunction1 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");            
            resolve();
        }, 1000);
    });
    
    
};

const asyncFunction2 = (cb) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Async Function 2");
            resolve();
        }, 1000);
    })
};

const asyncFunction3 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3");
            resolve();
        }, 1000);
    })
};

const main = async () => {
    console.log("Step 1");
    
    //Promise Chaining
    asyncFunction1()
        .then(asyncFunction2)
        .then(asyncFunction3)
        .then(() => {
            console.log("All Done");  
        })


    
    // asyncFunction1()
    //     .then(() => {
    //         asyncFunction2()
    //             .then(() => {
    //                 asyncFunction3()
    //                     .then(() => {
    //                         console.log("All Done");  
    //                     })
    //             })
    //         })

    
    
    console.log("Step 2");
};

main();