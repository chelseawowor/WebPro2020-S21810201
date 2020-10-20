/*
    Destructuring

    Memecah item atau property pada array atau abject ke dalam variable yang berbeda
*/
//1. array
const colors = ["merah","kuning","hijau"];

//biasanya
//let satu = colors[0];
//let dua = colors[1];
//let tiga = colors[2];

//cara destruc

let [satu, dua, tiga] = colors;

//let [satu, , tiga] = colors; //Kosongkan indeks yg tdk mau diambil
// let [satu, dua, tiga, empat="biru"] = colors;
//console.log(satu, dua, tiga, empat);

//2. Object
const user ={
    name:"Chelsea",
    gender:"female",
    age:19,
};

// let {name, gender, age} = user;
// let {name, age} = user; //langsung sja
let {name, gender, age, born="manado"} = user;
console.log(name, gender, age, born);