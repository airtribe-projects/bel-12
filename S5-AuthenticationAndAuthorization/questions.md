AUD: Who is it intended for (client.example.com)
ISS: Who issued the token (server.example.com)



It is a way to establish trust boundary

```
const internalCall = async () => {
  process.nextTick(() => console.log("fromNextTick internalCall")); // N1
  
  return new Promise((resolve, reject) => {
    console.log("Internal Call Promise");
    resolve();
  });
  // console.log("Internal Call");
};
const main = async () => {
  setTimeout(() => { // T1
    console.log("Log from timer");
  }, 0);
  Promise.resolve().then(() => {  //P1
    console.log("Hello there from promise");
  });
  
  await internalCall();  // <-- Execution is paused, behaving as if it is a sync call 
  
  Promise.resolve().then(() => { // P2
    console.log("Hello there after await promise");
  });
  process.nextTick(() => console.log("fromNextTick 1"));
  console.log("End");
  process.nextTick(() => console.log("fromNextTick 2"));
};
main();
```

