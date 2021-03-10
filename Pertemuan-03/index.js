// console.log ("Hello World")

/* let nilai bisa di gnti 
let nilai bisa di isi nanti*/

let hello = "Hello World !!!"
console.log(hello)

/* nilai const sudah fix tdk bs di gnti
const nilai harus di isi*/
const age = 33; 
console.log(age)

let age = 19;
age += 1;

let namadepan = "Ricky";
let namabelakang = "Pasulatan";
let namalengkap = namadepan + " " + namabelakang + ". Usia saya adalah " + age;

let alamat = "Bitung";

console.log(hello);
console.log(age);
console.log(alamat);
console.log(namalengkap);

console.log(10 == "10");  // Loose equality
console.log(10 === "10");  // strict equality

let angka = 10;
let hasil = angka % 2 === 0 || true ? "Genap" : "Ganjil";
console.log(hasil);

// single line comment

/*
        multi line comment
        multi line comment
*/

//Function declaration
function ucapkansalam(){
    return "Selamat Sore ini function declaration";
}
console.log(ucapkansalam());

//Function expression
const ucapkansalam2 = function(){
    console.log("selamat seore ini function expression");
}
ucapkansalam2();
