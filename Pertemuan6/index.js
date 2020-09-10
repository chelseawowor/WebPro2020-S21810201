

// Mendeklarasi object

//1. Object literal
const mhs1 = {
    namaDepan: "Chelsea",
    namaBelakang:"Wowor",
    umur: 19,
    sudahLulus: true,
    alamat: { //objek dalam objek
        jalan: "Jln. Kampus Utara",
        Kecamatan: "Malalayang",
        kabupaten: "Malalayang",
    },
    IPSemester: [3.5, 3.7, 4.0, 3.7], //Array
    //fungsi dalam objek disebut method
    hitungIPK: function() {
        let total = 0;
        this.IPSemester.forEach(function(el){
            total= total +el;
        });
        this.IPKumulatif = total / 4;
    },

};
mhs1.hitungIPK();
console.log(mhs1);
//kata kunci new
const mhs2 = new Object();
mhs2.namaDepan = "Debora";
mhs2.namaBElakang = "Lumempouw";

//Mengakses Properti Objek
//1. Dot notation
console.log(mhs1.umur);
//2.Bracket notation
console.log(mhs1("namaBelakang"));

console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester[2]);


