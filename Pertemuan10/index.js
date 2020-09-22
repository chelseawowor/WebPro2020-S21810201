//Var, let, const
 //var penamaan variable yang bisa lebih dari satu, yang seharusnya tidak boleh
// var nama = "chelsea";
// var nama = "dea";
let nama =  chelsea;
console.log(nama);

//Scope dalam javascript
//1. Function scope
//2. Block scope
//Scoping variable dgn var
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i); //kalo pake var i bisa diakses dari luar padahal deklarasi dlm block

for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i); //let akan ada error krna tidak bisa diakses krna deklarasi dlm block



//Tamplate Literal
const person = {
    firstName: "Chelsea",
    lastName: "Wowor",
    age:19,
};
console.log(`Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun.`);

//Contoh lain
let umur = 16;
let kalimat = `Umur saya tahun depan adalah ${umur + 1}`; // bisa untuk operasi mat juga
console.log(kalimat); 
let kalimat2 = `Tahun depan saya ${umur + 1 >= 17 ? 'bisa' : 'tidak bisa'} ikut pemilu`;
console.log(kalimat2);
