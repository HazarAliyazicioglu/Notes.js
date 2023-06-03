/*
switch (expression OR value) {
    case choice1:
         run this code
         break;

    case choice2:
        run another code
        break;

    İhtiyacın olduğu kadar case ekleyebilirsin

    default:
        Eğer caseler koşulla eşleşmezse default kodunu kullanabiliriz
        breake gerek yok
}
*/

switch (2) {
    case 1:
        console.log(1);
         break;

    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    default:
        console.log("Eşleşme bulunamadı");
}


let playerOne = "paper"
let computer = "rock"

switch (playerOne) {
    case computer:
        console.log("Draw");
         break;

    case "rock":
        if (computer === "paper") {
            console.log("Lose");
        }else{
            console.log("Win")
        }
        break;

    case "paper":
        if (computer === "scissors") {
            console.log("Lose");
        }else{
            console.log("Win")
        }
        break;

    case "scissors":
        if (computer === "rock") {
            console.log("Lose");
        }else{
            console.log("Win")
        }
        break;
    default:
        console.log("Eşleşme bulunamadı");
}

/* Yukarıda gördüğünüz örnekte taş, kağıt, makas oyunu bulunmaktadır. Kod ise şu şekil işler. Switch yani anahtar kelime playerOne; computera, papera, rocka ve scissorsa eşit olduğu durumlarda neler olabilir.   */
