// Strings
console.log("Helloo World");
console.log(typeof "Hazar");
console.log(typeof 10);

const myVariables = "JavaScript";

console.log(myVariables.length); // string değerlerde .length bize değerizimin kaç harften oluştuğunu yani uzunluğunu verir.
console.log("Every good boy does fine".length);

console.log(myVariables.charAt(3)) // .charAt(x) bize x sayısına göre x. sıradaki elemanı verir. Sıralamalar 0'dan başlar yani ilk elemenın sırası 0'dır.
console.log("Variables".charAt(3))

console.log(myVariables.indexOf("crip")) // .indexOf("x") bize x değerinin kaçıncı sırada olduğunu söyler, eğer bualamazsa -1 değerini verir. İki tane aynı değer varsa ilk önce bulduğunu gösterir.
console.log(myVariables.lastIndexOf("a")) // .lastIndexOf("x") eğer x değerininden birden fazla var ise sonuncu olanı bulup gösterir. 

console.log(myVariables.slice(2,6)) // .slice(x,y) x her zaman y'den küçük olmalıdır. x ile y arasında kalan string değerlerini verir.
console.log("Hazar yakışıklıdır.".slice(2,12)) 

console.log(myVariables.toUpperCase()) // string değerin harflerini büyütür

console.log(myVariables.toLowerCase()) // string karakterin harflerini küçültür

console.log(myVariables.includes("za")) // .includes("x") x değeri cümlemizin içinde var mı yok mu ona bakar

console.log(myVariables.split("c")) // .split("x") kelime yada kelimeleri x değerlerinin olduğu yerden birbirinden ayırır. Eğer .split("") şeklinde yazılırsa her bir değeri ayırır. Eğer .split(" ") şeklinde yazılırsa boşlık olan yerlerden ayrılır.   

const myName = "    Hazar     "
console.log(myName.length);
let result = myName.trim()  // Stringimizin sağ ve sol tarafından boşlukları atar
console.log(result.length);

const variable = " Variableh"
let outcome = variable.replace("h","s") // .replace("x","y") olmak üzere stringimizde bulunan x değerini y ile değiştirir
console.log(outcome);

let text = "5";
let padded = text.padEnd(4,0); // .padEnd(x,y) metodumuz değerimizin sonuna x kadar y ekler ayrıca padStart diye bir metodumuz da bulunmakta
console.log(padded);



/*  

Daha fazla string methodları için;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/
 








