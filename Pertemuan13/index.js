// Rest Parameter & Spread Operator

// const hitung = (a, b, c, d, e) => {
//     const angka = [a, b, c, d, e];
//     let total = 0;
//     for(let i = 0; i<7; i++) {
//         total = total +angka[i];
//     }
//     return total;
// }

//Rest Operator
//digunakan di parameter, input nilai
// rest operator harus bgian akhir parameter, tidak boleh tengah
//dari bebrapa elemen mnjadi satu array
const hitung = (...angka) => {
    let total = 0;
    angka.forEach((el) => {
        total = total +angka[i];
    })
    return total;
}
console.log(hitung(1, 2,3,4,5));

const hitung1 = (angaka1,angka2,...angka) => {
    // console.log(angka1);
    // console.log(angka)
    let total = 0;
    angka.forEach((el) => {
        total = total +angka[i];
    })
    return total;
}
console.log(hitung1(1, 2,3,4,5));

//Spread Operator
//memecah array mnjadi elemen msing"
//1. Duplikasi Array
//penggunaan utk mengcopy isi array
const bil =[1, 2, 3, 4, 5];
console.log(bil);
console.log(...bil);

const bil2 = [...bil2];

//2. menggabungkan array
const number1 = [1,2,3,4,5];
const number2 = [6,7,8,9,10];
const number3 = [12,13];
const gabungES5 = number1.concat(number2, number3);
console.log(gabungES5);

const gabungES6 = [...number1, ...number2, 11, number3];
console.log(gabungES6);

//Spread operator di objek
//menambah properti di objek
let orang= {
    nama: "Chelsea",
    umur: 19,
};
orang = {...orang, pekerjaan: "Mahasiswa", pendidikan:"S1 soon"};
console.log(orang);
//