//function
//example
let a = 8;
let b = 3;

let LuasA = a*a;
let LuasB = b*b;

let total = LuasA + LuasB;
console.log(total);

function penjumlahanDuaBujurSangkar(a,b) //parameter 
{
    let LuasA = a*a;
    let LuasB = b*b;

    let total = LuasA + LuasB;

    return total;
}

const hasil = penjumlahanDuaBujurSangkar(8, 3); //argument
console.log(hasil);
//atau
console.log(penjumlahanDuaBujurSangkar(10, 5));
/* beda parameter dan argument
    jika argument lebih bnyak dari parameter 
    nilai lebihnya akan di abaikan
    jika kebalikannya, akan diisi nilai undefined lebihnya
*/
function tambah(a,b) {
    return a + b;
}
function kali(a,b) {
    return a * b;
}
console.log(tambah(kali(5,2), kali(10,2)));

//refactoring
function perjumlahanDuaBujurSangkar1(a,b){
    return a * a + b * b;
}
console.log(penjumlahanDuaBujurSangkar1(8, 3));