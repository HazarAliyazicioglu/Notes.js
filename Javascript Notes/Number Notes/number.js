// Numbers 
const myNumber = 94 // Tam sayılar için integter ifadesini kullanırız

const myFloat = 94.1 // float ondalıklı sayılar için kullanılır

const myString = "94"

console.log(myNumber)
console.log(myFloat)

// Javascript'teki == ve === operatörü arasındaki temel fark, == operatörünün karşılaştırmadan önce işlenenlerin tür dönüşümünü yapması, oysa === operatörünün işlenenlerin veri tiplerinin yanı sıra değerleri karşılaştırmasıdır.

console.log(myNumber == (myFloat - 0.1))  
console.log(myNumber === myFloat) 

console.log(myString + 3)
console.log(Number(myString) + 3)

console.log(Number(true))
console.log(Number(false))

console.log(Number.isInteger(myNumber)) // değerimizin Integer olup olmadığını kontrol eder

console.log(Number.parseInt(myFloat)) //değerimizi tam sayıya çevirir
console.log(Number.parseFloat(myNumber)) //değerimizi ondalıklı değere dönüştürür.

console.log(Number.parseFloat(myNumber).toFixed(3)) // değerimizin ondalıklı kısmının kaç basamaklı olacağını yazmamızı sağlar

console.log(myFloat.toString()) //değerimizi stringe yani kelimelere cevirir

//CHAINING

console.log(Number.parseFloat("4.123abc").toFixed(3).toString()) // Birden fazla metodu bu şekilde birlikte yazabiliriz

//NaN = Not a number cümlesinin kısaltılmış hali

console.log(Number("Hazar"))

console.log(Number.isNaN(myFloat))
console.log(isNaN(myFloat));
/*
isNaN() metodu değer Not-a-Number ise true değeri verir.
Number.isNaN() metodu numara Not-a-Number ise true değeri verir.
*/


// Daha fazla number metodu için https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number