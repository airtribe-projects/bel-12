const asyncFunction1 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Async Function 1");            
            reject({data: "Response 1"});
        }, 1000);
    });
    
    
};

const asyncFunction2 = (cb) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            // console.log("Async Function 2");
            resolve({data: "Response 2"});
        }, 2000);
    })
};

const asyncFunction3 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Async Function 3");
            reject({data: "Response 3"});
        }, 3000);
    })
};

const main = async () => {
    console.log("Step 1");
    const start = Date.now();

    // const resp = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()])
    //                 .then(data => console.log(data))
    //                 .then(() => {
    //                     console.log(Date.now() - start);
    //                 }).catch((err) => {
    //                     console.log(err)
    //                 })
                    
    //                 ;

    // const respAny =     Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]).then(data => console.log(data))
    //                 .then(() => {
    //                     console.log(Date.now() - start);
    //                 })
    //                 .catch((err) => {
    //                     console.log(err)
    //                 })

    const respRace = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]).then(data => console.log(data))
    .then(() => {
        console.log(Date.now() - start);
    }).catch((err) => {
        console.log(Date.now() - start);
        console.log(err)
    }).finally(() => {
        console.log("Finally executed");
    })


    // const respAllSettled = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()])
                            // .then(data => console.log(data))


    // console.log(resp);

    // //Promise Chaining
    // asyncFunction1()
    //     .then(asyncFunction2)
    //     .then(asyncFunction3)
    //     .then(() => {
    //         console.log(Date.now() - start);
    //     })


    
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