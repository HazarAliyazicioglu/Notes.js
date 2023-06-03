// Javascript Obje Not Sistemi
/*
JSON birçok dilde veri almak ve göndermek için kullanılırdı
JSON dilden bağımsız bir metin formatıdır
*/

const myObj = {
    name : "Hazar",
    hobbies: ["Games", "Eating", "Reading" ],
    hello: function() {
        console.log("Hello world!");
    },
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.hobbies[2]);
myObj.hello();

const sendJSON = JSON.stringify(myObj); // Obje metodumuzu JSON ile stringe çevirme
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON) // JSON ile elde ettiğimiz stringler obje metodu haline geri çevirme
console.log(receiveJSON);
console.log(typeof receiveJSON);
console.log(receiveJSON.name);