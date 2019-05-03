const data = null;
let promise = new Promise((resolve, reject) => {
    if(data === null) {
        reject("Failed");
    }
    resolve("Successfull");
});

promise.then((value) => {
    console.log("value = " + value);
}, (err) => {
    console.error("Error: " + err);
});