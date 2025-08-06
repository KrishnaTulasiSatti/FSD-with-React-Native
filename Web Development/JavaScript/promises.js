const result = new Promise(function(resolve,reject) {
    var age = 19;

    if(age >= 18) {
        resolve(age);
    }
    else {
        reject();
    }
})



result.then(function(age) {
    console.log(age+" is Eligible");
})
.catch(function() {
    console.log("Not Eligible");
})
