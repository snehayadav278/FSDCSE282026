// console.log("Hello , using JS");

// function sum(a,b){
//     let add = a+b;
//     let result = Math.sqrt(add);
//     console.log(result);
// }
// sum(9, 16);


// var a=34;
// if(a>20){
//     var a=45;
//     console.log("a inside a = " + a);
// }
// console.log("a outside a = "+ a);

// let a=34;
// if(a>20){
//     let a=45;
//     console.log("a inside a = " + a);
// }
// console.log("a outside a = "+ a);

// const sum = function sum(a,b){
//     return a+b;
// }
// sum(23,30);

// const sum = (msg)=>{return 20+90+msg}
// console.log(sum("hello"));


// const sum=(a,b)=>{return Math.sqrt(a+b)}
// console.log(sum(40,90))


//iife (immediate invoke functionn expression)
// (()=>{
//     console.log("hiii")
// })();


// callbacks function
// function sum(a,b){
//     return a+b;
// }

// function sumwithMsg(clbck , msg){
//     const result = clbck(12,40);
//     console.log("Hii" +" " +  msg + " " + result);
// }
// sumwithMsg(sum,"Ram");


// function login(msg , error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username , password , clbck){
//     // username="gogo12";
//     // password="12345";
//     if(username == "gogo12" && password == "12345"){
//         clbck("successs", null)
//     }else{
//         clbck(null , "username or password is incorrect");
//     }
// }

// loginHandler("gogo12", "12345", login);


//callback hell
// setTimeout(()=>{console.log("onee")
//     setTimeout(()=>{console.log("two")
//         setTimeout(()=>{console.log("three")
//             setTimwout(()=>{console.log("four")
//                 setTimeout(()=>{console.log("five")
//                     setTimeout(()=>{console.log("six")
//                         setTimeout(()=>{console.log("seven")
//                             setTimeout(())
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)




const myPromise = new Promise((resolve , reject) => {
    let username = "syadav17";
    let password = "1234";
    if(username == "syadav17" && password=="1234"){
        resolve("success");
    }
    else{
        reject("invalid");
    }
}
);
console.log(myPromise);

// myPromise.then((msg) => {console.log(msg)})
// .catch(msg => {console.log(msg)})
// .finally(console.log("resource closed"))


async function orderReceived() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("One Order received");
        }, 1000);
    });
}

async function orderPrepared() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order prepared");
        }, 1000);
    });
}

async function orderHandOver() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order handed over");
        }, 1000);
    });
}

function OTP() {
    return Math.floor(Math.random() * 10000);
}

async function orderDelivered() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order delivered");
        }, 1000);
    });
}

async function handleLogin() {
    const status = await myPromise;
    console.log(status);
    if(status === "Success") {
        const orderStatus = await orderReceived();
        console.log(orderStatus);
        const orderPreparedStatus = await orderPrepared();
        console.log(orderPreparedStatus);
    }
    const otp = OTP();
    console.log("OTP = " + otp);
    if(otp) {
        const orderHandOverStatus = await orderHandOver();
        console.log(orderHandOverStatus);
        const orderDeliveredStatus = await orderDelivered();
        console.log(orderDeliveredStatus);
    }
}
handleLogin();