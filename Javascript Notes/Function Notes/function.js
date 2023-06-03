// Methods = Built-in Functions

// Function Declaration Syntax

function sum(num1,num2) {
    console.log(num1);
    console.log(num2);

    if (num2 === undefined){
        return num1 + num1;
    }
    return num1+num2 ;
}

console.log(sum(Math.floor(Math.random()*100 +1),Math.floor(Math.random()*100 +1)));


// Email adresinden kullanıcı adı oluşturmamızı sağlayan kod

const getUserNameFromEmail = function (email) { 
    return email.slice(0,email.indexOf('@'));
}

email = prompt("Please enter your email address")

if (email === null ) {
     alert('Please enter a valid email address')
}else{console.log(getUserNameFromEmail(email));}


// Ayrıca function(email) yerine (email) => {...} yazabiliriz aynı görevi görür

const toProperCase = (name1) => {
    return name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()  
}

console.log(toProperCase("HAZAR")); // girilen değerin 1. elemanından sonrasını küçük harfe çeviren fonksiyon