const internalCall = async () => {
  process.nextTick(() => console.log("fromNextTick internalCall"));
  
  return new Promise((resolve, reject) => {
    console.log("Internal Call Promise");
    resolve();
  });
  // console.log("Internal Call");
};
const main = async () => {
  setTimeout(() => {
    console.log("Log from timer");
  }, 0);
  Promise.resolve().then(() => {
    console.log("Hello there from promise");
  });
  await internalCall();
  Promise.resolve().then(() => {
    console.log("Hello there after await promise");
  });
  process.nextTick(() => console.log("fromNextTick 1"));
  console.log("End");
  process.nextTick(() => console.log("fromNextTick 2"));
};
main();