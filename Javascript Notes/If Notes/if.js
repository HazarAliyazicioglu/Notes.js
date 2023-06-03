let customerIsBanned = false;
let yemek = "Karnıyarık";
let reply;
let cracker = true;

if(customerIsBanned){
    reply="Size yemek hizmeti sunmuyoruz "
} else if (yemek && cracker) {
    reply = `${yemek} yemeğiniz ve krakeriniz hazır efendim  `;
    
} else if (yemek) {
    reply = `${yemek} yemeğiniz hazır efendim `;
    
} else {
    reply="Yemeğimiz bitti efendim"
}

console.log(reply)

/*

Yukarıda gördüğünüz örneklerde;

Eğer If ifadesinin aynı anda birden fazla durumu kontol etmesini istiyorsak  &&  işaretini kulanırız

Eğer cümle içerisinde + kullanmak zorluyorsa onun yerine cümleyi (``) backtick içerisinde yazarız ve değişkenide ${} içerisine yazarız. Bu durumu oparatör notunda daha uzun anlattım ordan da bakabilirsin. 

*/

let testScore = (Math.floor(Math.random() *100) + 1);
let collegeStudent = true
let grade;

if (testScore >= 90){
    grade = `A`
}else if (testScore>= 80){
    grade = `B`
}
else if (testScore>= 70){
    grade=`C`
}
else if (testScore>= 60){
    grade=`D`
}
else if (testScore>= 50){
    grade=`E`
} else {
    if (collegeStudent){
        grade = `U`
    }else{
        grade = `FF`
    }
}

console.log(grade);

// Yukarıda gördüğünüz üzere If ifadelerinin içerisine tekrar if yerleştirebiliyoruz


if(playerOne===computer){
    console.log("Draw");
}else if (playerOne==="Rock"){
    if (computer=="Paper"){
        console.log("Computer wins")
    } else {
        console.log("Player wins");
    }
}else if (playerOne==="Paper"){
    if (computer=="Scissors"){
        console.log("Computer wins")
    } else {
        console.log("Player wins");
    }
}else if (playerOne==="Scissors"){
    if (computer=="Rock"){
        console.log("Computer wins")
    } else {
        console.log("Player wins");
    }
}

// Yukarıda taş kağıt makas örneği görmekteyiz bunu ilerde oyuna çevirmeyi öğreneceğiz




















