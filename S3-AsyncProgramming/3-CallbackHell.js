const asyncFunction1 = (cb) => {
    setTimeout(() => {
        console.log("Async Function 1");            
        cb();
    }, 1000);
};

const asyncFunction2 = (cb) => {
    setTimeout(() => {
        console.log("Async Function 2");
        cb();
    }, 1000);
};

const asyncFunction3 = (cb) => {
    setTimeout(() => {
        console.log("Async Function 3");
        cb();
    }, 1000);
};

const main = async () => {
    console.log("Step 1");
    asyncFunction1(() => {
        asyncFunction2(() => {
            asyncFunction3(() => {
                console.log("All Done");
            });
        });
    });
    console.log("Step 2");
};

main();