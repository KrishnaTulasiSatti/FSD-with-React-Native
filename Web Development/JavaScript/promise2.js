function fun1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(1);
        },1000)
    })
}

function fun2(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value+1);
        },1000)
    })
}

function fun3(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value+1);
        },1000)
    })
}

// fun1().then(function(res1){
//     console.log("Fun-1 is completed",res1);
//     fun2(res1).then(function(res2) {
//         console.log("Fun-2 is completed",res2);
//         fun3(res2).then(function(res3) {
//             console.log("Fun-3 is completed",res3);
//         })
//     })
// })

async function execute() {
    try {
        const res1 = await fun1();
        console.log(res1)
        const res2 = await fun2(res1);
        const res3 = await fun3(res2);
        console.log(res3);
    }
    catch(err) {
        console.log(err);
    }
}

execute();