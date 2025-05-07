

// const main = () => {
    
    
//     Promise.resolve().then(() => {
//         console.log("Promise Callback");   
//     })
    

//     setTimeout(() => {
//         console.log("Main Timer")
//     }, 0)
    
    

//     console.log("Main script");    
// }

// main();




/* Option 1:
Main Script
Main Timer
Promise Callback


Option 2:
Main Script
Promise Callback
Main Timer



Call Stack



I Task Queue: anonP


A Task Queue: anonT



Task Queue
Macro Task Queue [General] Everything else 

Micro Task Queue [VIP] Callbacks of promises and process.nextTick




Event loop ==> 
- Check if call stack is empty
- Y ==> Schedule everything in m(I)crotask queue on callstack
then move to m(a)cro task queue
*/


setTimeout(() => {
    console.log("Main Timer")
}, 0)


Promise.resolve().then(() => {
    console.log("Promise Callback");   
    Promise.resolve().then(() => {
        console.log("Resolved inner promise");   
    })
})

console.log("Main script");


