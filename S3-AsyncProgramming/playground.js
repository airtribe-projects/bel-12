const asyncFunction1 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");            
            reject({data: "Response 1"});
        }, 1000);
    });    
};


// async await

const sum = async (a , b) => {
    return new Promise( (resolve, reject) => {
        resolve(a+b);
    })
}


// const main = async () => {
//     const resp = await sum(5, 7);
    
//     console.log(resp);
//     console.log("Reached End");
// }


const main =  async () => {
    let resp;
    try {
        resp = await asyncFunction1();
    } catch (e) {
        console.log(e);
    }
    console.log(resp);
}


main()