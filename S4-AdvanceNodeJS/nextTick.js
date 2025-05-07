// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })


// process.nextTick(() => console.log('process.nextTick'));

// console.log("Main script");

/*
anon
CallStack



I: anonP, anonN
Promises [VIP]
NextTick [VVIP] (Ambani)


A [General]:  anonT

*/


// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// process.nextTick(() => console.log('process.nextTick 1'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 1");   
// })

// process.nextTick(() => console.log('process.nextTick 2'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 2");   

// })

// console.log("Main script");

setTimeout(() => {
    Promise.resolve().then(() => {
        console.log("Resolved inner promise");   
    })
}, 0)


setTimeout(() => {
    console.log("Main Timer")
}, 0)





console.log("Main script");
