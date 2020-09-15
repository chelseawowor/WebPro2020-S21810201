/*
    JS Conditional
*/

// Cara penulisan conditional
//1. if, else if, else
//contoh:
//a.
let nilai = 85;

if (nilai>75) {
    console.log("LULUS");
}
else
{
    console.log("TIDAK LULUS");
}
//b.
let nilai1 = 95
if (nilai > 80) {
    console.log("SANGAT MEMUASKAN");
} 
else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
    console.log("MEMUASKAN");
} 
else {
    console.log("JANGAN MENYERAH, COBA LAGI!");
}
  
//2.Switch dan case
//contoh:
//a.
let seragamSekolah;
let hari = "selasa";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
    //default  dijalankan kalo hasil pernyataan di switch tidak ada yang sesuai dengan masing-masing kondisi di case
}
console.log(seragamSekolah);

//b.
let inggrisWarna;
let warna = "biru";

switch (warna) {
    case "merah":
        inggrisWarna = "Bahasa Inggris dari warna merah adalah Red";
        break;
    case "kuning":
        inggrisWarna = "Bahasa Inggris dari warna kuning adalah Yellow";
        break;
    case "hijau":
        inggrisWarna = "Bahasa Inggris dari warna hijau adalah Green";
        break;
    case "biru":
        inggrisWarna = "Bahasa Inggris dari warna biru adalah Blue";
        break;
    case "ungu":
        inggrisWarna = "Bahasa Inggris dari warna ungu adalah Purple";
        break;
    default :
        inggrisWarna = "Tanyakan pada Google:)"
}
console.log(inggrisWarna);


/*
    JS Loop
*/
// 5 jenis loop:
//for
for (let i=1; i<=10; i++){
    console.log(i);
}
//for...in
const buku = { 
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997 
};
/*
 buku adalah nama objek
 judul, pengarang, tahun adalah propertiObjek
 variable dari propertiObjek bisa diganti dengan nama variabel apapun
*/
for (x in buku) { // for(propertiObjek in namaObjek)
    console.log(x, ':', buku[x]);
}
 
//for...of
const buku1 = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku1) {
  console.log(x);
}
//variable element juga bisa diganti dengan nama variable apapun

//while
let ik = 1;
while (ik <= 10) {
  console.log(i);
  ik++;
}

//do...while
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

