//Syncronous Vs Asyncronous

//Syncronous, Blocking, Single-Thread
// console.log ("proses 1")
// console.log ("proses 2")
// console.log ("proses 3")

//Asyncronous, Non-blocking
//Single-Thread : Concurent

// setTimeout (() =>{
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//         }, 3000)
//     }, 3000)
// }, 3000)

//Multi-Thread : Paralel

// console.log("Proses 1");
// setTimeout(() => {
//     console.log("Proses 2");
// }, 3000);
// console.log("Proses 3");

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, index) =>{
//     setTimeout(() => {
//         console.log(item);
//     }, index * 1000);
// });

let condition =true;

// let newPromise = new Promise ((resolve, reject) => {
//     if (condition){
//         resolve("Success")
//     }
//     else{
//         reject("Fail")
//     }W
// })

function newPromise(){
    return new Promise ((resolve, reject) => {
        if (condition){
            resolve("Success")
        }
        else{
            reject("Fail")
        }W
    })
    
}

//Then - Catch
// newPromise.then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })

//Async - Awat
// const getPromise = async () => {
//     try {
//         const res = await newPromise();
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// getPromise();