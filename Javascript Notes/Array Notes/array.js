// ARRAYS 
const myArray = [];

// Diziye eleman ekleme

myArray[0] = "Hazar"
myArray[1] = 10001
myArray[2] = false
myArray[3] = "Nasuh"
myArray[4] = 94

// Diziyi yazdırmak
console.log(myArray);

// Dizinin uzunluğunu yazdırmak
console.log(myArray.length);

// Dizinin son elemanını yazdırmak
console.log(myArray[myArray.length - 1]);

// Dizinin istediğimiz bir elemanını yazdırma
console.log(myArray[1]);

// Dizinin sonuna eleman ekleme
myArray.push(Math.floor(Math.random() * 100 + 1 ))
console.log(myArray);

// Dizinin sonundan eleman çıkarma
myArray.pop()
console.log(myArray);
const lastItem = myArray.pop()
console.log(lastItem);

// Dizinin başına eleman ekleme
myArray.unshift(Math.floor(Math.random() * 100 + 1))
console.log(myArray);

// Dizinin başından eleman çıkarma
const firstItem = myArray.shift()
console.log(firstItem);

// Diziden eleman silme (silinen eleman empty slot olarak gözükür kaç adet silinerse o kadar empty slot sayısı olur)
delete myArray[0]
console.log(myArray);

// Dizinin belli aralığından eleman çıkarma yada değiştirme
myArray.splice(1,1,31) // İlk element hangi elementten başlıyacağı, ikinci element kaç elemenanın kaldırılacağı yada değiştirileceği ve son element ise diziye eklenecek elemanı temsil eder.  
console.log(myArray);

// Dizideki elemanarı ayırmamızı sağlar. İlk eleman nereden ayırmaya başlayacağımız ikinci eleman nerede biteceğini gösterir. 
const myArray2 = ["A","B","C","D","E","F"]
const newArray = myArray2.slice(2);
const newArray2 = myArray2.slice(2,5)
console.log(newArray);
console.log(newArray2);

// Diziye tersine döndürme
myArray.reverse()
console.log(myArray);

// Dizide elemanları stringe döndürmek
console.log(myArray.join(","));

// Dizileri birbiri ile birleştirme
const anArray1 =[1, 2, 3]
const anArray2 =[4, 5, 6]

const realArray1 = anArray1.concat(anArray2)
const realArray2 = [...anArray2, ...anArray1] // Bu yöntemde dizileri birleştirmenin farklı bir yöntemi. Eğer üç noktalar olmaz ise sadece dizilerin uzunlukları yazılır elemanları yeni diziye aktarılmaz
console.log(realArray1);
console.log(realArray2);

//Dizi içerisine dizi eklemek
const equip1 = ["beyzbol topu","futbol topu","voleybol topu"]
const equip2 = ["basketbol topu","golf topu","tenis topu"]

const clothes1 = ["atlet","tshirt","forma"]
const clothes2 = ["sweat üstü", "sweat altı", "hoodie"]

console.log(equip1[1]);
console.log(clothes2[0]);

const equips = [equip1,equip2]
const clothes = [clothes1,clothes2]

console.log(equips[1][0]); // equips dizisinin içinde farklı diziler bulunduğu için sayılar sırayla  equpsin 1. elemanının 0.elemanı demektir 
console.log(clothes[0][1]); // clothes dizisinin içinde farklı diziler bulunduğu için sayılar sırayla  equpsin 0. elemanının 1.elemanı demektir

const sportStore = [equips,clothes]
console.log(sportStore[0][0][2]);