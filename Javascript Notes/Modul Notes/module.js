import playGuitar from "./gitar.js";                                // Başka bir js dosyasından veri almamızı sağlar ve defaultlar içindir
import {shredding as shred, plucking as pluck  } from "./gitar.js"; // as kelimesini kullanarak ismini değiştirebiliriz
import * as Guitars from "./gitar.js";                              // * veri alınacak dosyadan bütün verileri çekmemizi sağlar
import User from "./user.js"; 

console.log(playGuitar());
console.log(shred());
console.log(pluck());
console.log(Guitars);                                               // Verileri obje elemanlarına dönüştürür 
console.log(Guitars.default());                                     // Default veriyi ismi ile değil default() şeklinde yazarız
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("email@email.com","Hazar");
console.log(me);
console.log(me.greeting());
console.log(me.contact());