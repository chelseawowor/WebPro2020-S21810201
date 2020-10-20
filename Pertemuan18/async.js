// Synchronous (blocking)
//jS secara default menggunakan syncronous, 
//yang dimana proses selanjutnya dilakukan ketika proses sebelumnya telah selesai dijalankan, jadi proses" yang ada dilakukan secara berurutan
// Asyncronous (non-blocking)
//js tidak menunggu proses sebelum selesai untuk menunggu proses sebelumnya selesai.
//Callback
//memanggil kembali kode yang ada diprogram js dari proses async(berupa fungsi)

//Synchrnous
// const second = () => {
//     console.log('Second');   
// }
// const first = () => {
//     console.log('First');
//     second();
//     console.log('Second');
// }
// first();

//Async
// const second = () => {
//     setTimeout(() => {
//         console.log('Second');  
//     }, 2000) 
// }
// const first = () => {
//     console.log('First');
//     second();
//     console.log('Second');
// }
// first()

//Masalah Async 
//Callback hell: Program jadi sulit dibaca misalnya settimeout lebih dari 10
//diatasi dengan promise
const getData = () => {
    return new Promise((resolve,reject)=> {
    setTimeout(() => {
        const error = false;
        if(error){
            reject("Error");
        }
        else {
            resolve("10");
        }
    }, 2000);
})
}
const getName = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ID: ${id} Success')
        }, 2000)
    })
}

// getData
//     .then(id => getName(id))
//     .then(success => console.log(success))
//     .catch(error => console.log(error))
// async function getNameById{

// }

//Async await
// const getNameById = async () => {
//     const id = await getData();
//     const success = await getName(Id);
//     console.log(success);
// }

const getNameById = async () => {
    let id, success;
    try {
        const id = await getData();
        const success = await getName(Id);
        console.log(success);
    } catch(error){
        console.log(error);
    }
    return success;
}
    
getNameById().then(result => console.log(result));
//untuk memanggil async tidak bisa dipanggil seperti biasa
//seperti
/* const result = getNameById();
console.log(result); */
