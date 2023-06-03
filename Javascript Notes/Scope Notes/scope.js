// var, let and const

/*
var keyword'ü ile değişkenler tekrar tanımlanabilir ve değerleri güncellenebilir. 
let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz. 
const anahtar kelimesi ile sabit bir değişken oluşturabilirsiniz
*/

const x = 1 ;
console.log(x); 

var y = 1;
var y = 2;
console.log(y);

let z = 1;
z = 2;
console.log(z);


// GLOBAL SCOPE

var a = 1 ;
let b = 2 ;
const c = 3 ;

// LOCAL SCOPE

{
    let k = 4 ; 
    console.log(k); // 4
}

// console.log(k);  not defined

function scope() {
    const l = 5;
    console.log(l); // 5
}

// console.log(l);  not defined 

var e = 1 ;
let m = 2;
const i = 3;

console.log(`global: ${e}`);
console.log(`global: ${m}`);
console.log(`global: ${i}`);

function myFunc() {
    var e = 10 ;
    const i = 5;
    {
        var e = 11
        const i = 6
        console.log(`block : ${e}`);
        console.log(`block : ${m}`);
        console.log(`block : ${i}`);
    }

    console.log(`function : ${e}`);
    console.log(`function : ${m}`);
    console.log(`function : ${i}`);

}

myFunc()

console.log(`global: ${e}`);
console.log(`global: ${m}`);
console.log(`global: ${i}`);
/*

Global Scope ne fonksiyonun ne de bloğun içerisinde bulunmayan scope türüdür
Local Scope fonkisyonun yada bloğun içerisinde bulunan scope türüdür
var function scope değişkenleri için kullanılabilir
let ve const block scope değişkenleri için kullanılabilir

Çoğunlukla var kullanmaktan uzak dur. const ve let kullanmaya özen göster
Eğer bir değeri değiştirmek zorunda değilsen constu kullan Eğer değiştireceksen de leti kullan

*/