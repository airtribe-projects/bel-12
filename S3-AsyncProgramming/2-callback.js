const asyncFunction = (cb) => {
    console.log("2. Inside async Function");
        
    setTimeout(() => {
        console.log("3. Inside Timeout");
        cb();
        cb();
        cb();
    }, 2000);
}

const main =  async () => {
    console.log("1. Start");    
    asyncFunction(() => console.log("4. End") );
}



main()







