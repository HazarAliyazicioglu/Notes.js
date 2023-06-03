// While döngüsü koşul gerçekleşene kadar devam eder. Mesela aşağıda myNumber 50 olana kadar döngü sonlanmayacaktır
let myNumber = 0;
while(myNumber <= 20){
    console.log(myNumber);
    myNumber += 2; // Yada bunun yerine myNumber = myNumber + 2 yazabiliriz 
}

// Asla sonsuz döngü oluşturma

// Do...while döngüsünün while döngüsünden farkı en az bir kez kesin olarak gerçekleşmesidir. Bir kez gerçekleşir ve ondan sonra koşullar gerçekleştiği sürece devam eder
do{
    console.log(myNumber)
}while (myNumber < 20);{}

/* 
for (let index = 0; index < array.length; index++) {
     const element = array[index];}


for (bilinmeyen(index); koşul; artış şekli) {     
     const element = array[index];}              
*/

let name1 = "Hazar" ;
for(let i = 0;i < name1.length;i++){
    console.log(name1.charAt(i))
    ;
}

let name2 ="Hazar"
let counter = 0;
let myLetter ;
while (counter <= 3) {
    myLetter = name2[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "r") break;
    counter ++;
}
console.log(counter);

//  break ifadesi döngü sonlandırmak için kullanılır
//  continue ifadesi döngünün kendisinden sonraki kısmını atlayarak döngüyü tekrar başa sarar ve devam ettirir.