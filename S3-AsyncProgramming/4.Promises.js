const asyncFunction1 = (cb) => {
    console.log("Inside async Function 1");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Timeout 1");
            resolve({"data": "Worked succcessfully"});
            console.log("After resolve");
        }, 2000);    
    })
}


const main = async () => {
    console.log("Start");
    const resp = asyncFunction1();
    resp
        .then(data => console.log(data))
        .catch(err => console.log(err));

    
    console.log(resp);
}

main()







