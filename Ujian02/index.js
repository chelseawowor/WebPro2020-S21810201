/* 
    UJIAN 2
*/
//1.
const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement = (object) => {
	const age = calculateAge(object.year);
	const retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}
 
yearUntilRetirement({year: 1987, firstName: 'John'});

//2. 
const addNumber = (...numbers) => {
    let sum = 0;
    numbers.forEach((el) => {
        sum = sum + numbers;
    })
    return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));

//3
const phi = 3.14;
const power = 2;
const radius = [7, 21];
 
const calculateArea = (obj) => {
  return phi * Math.pow(obj.radius, obj.power);
};

const area21 = calculateArea({radius: radius[0], power: 2 });
const area7 = calculateArea({radius: radius[1], power: 2 });
 
console.log(`area with 21 radius: ${area21} , and area with 7 radius: ${area7}`);

//4
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}
makeAjaxRequest('www.google.com');

//Bagian 2

//1.
const warnaKesukaan = (warna) => {
    return console.log(`Warna kesukaan saya adalah ${warna}`);
}
warnaKesukaan("Putih");

//2.
const namaBuah1 = ['apel', 'mangga'];
const namaBuah2 = ['sirsak', 'semangka'];

const semuaNamaBuah = [...namaBuah1, ...namaBuah2];
console.log(semuaNamaBuah);
