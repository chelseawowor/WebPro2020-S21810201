/*
    Arrow Function
    -> kelebihan penulisan fungsi jadi lebih singkat dan mudah dibaca
    syntax:
    const namaFungsi = (parameter1, ..., parameterX) => {
        //kode yang ingin dijalankan dalam fungsi
    };

    //kalo tidak ada parameter
    const namaFungsiTanpaParameter = () => {
        //kode yang ingin dijalankan dalam fungsi
    };

*/

//Contoh dari buku
//Fungsi ada parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
};
console.log(operasiPenjumlahan(3, 4));

//Fungsi tidak ada parameter
const namaJenisAnjing = () => {
    const anjing = ["Bulldog", "Pug", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
console.log(namaJenisAnjing());

/*
implicit return value
-> Fungsi langsung mengembalikan nilai tanpa deklarasi terlebih dahulu
-> Tidak membutuhkan'{}' dan kata 'return' .
*/
//misal
function greeting(nama) {
    return `Hi ${nama}`;
}
console.log(greeting('Chelsea'));

const greeting2 = (nama) => `Hallo ${nama}`;
console.log(greeting2('Angelique')); 

