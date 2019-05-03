let promise = new Promise((resolve, reject) => {
    resolve("Successfull");
});

promise.then((value) => {
    console.log("value = " + value);
});