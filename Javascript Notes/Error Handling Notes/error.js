// Javascript Errors and Error Handling

"use strict"; // Yazdığımız kodun javascript standartları dışına çıkmasını katı kurallar ile engeller


// ReferenceError bir değişkenin türü olmadığı zaman aldığımız error'dur. Örneğin aşağıda const olmasaydı alacaktık

const variable = "Hazar"
console.error(variable); // Konsola değeri error şeklinde yazdırır

// SyntaxError yanlış, eksik veya fazla kelime ya da yanlış noktalama işareti kullanımında alırız

const makeError1 = () => {
    try {
        Object.create()
    } catch (er) {
        console.table(er); // Konsola değeri tablo şeklinde yazdırır
    }
}
makeError1()


//TypeError Uygulanmak istenen işlem ya da fonksiyona onunla uyumlu olmayan veri türü geçirildiğinde tetiklenir.

let name = "Hazar"
name = "Nasuh"
console.warn(name); // Konsola değeri uyarı şeklinde yazdırır

// Try...Catch...Finaly methodu bizim oluşabilcek errorlerin üstesinden gelmemizi sağlar 
// Try kısmına hesaplanmak istenen ifade 
// Catch kısmına bir hata türü tespit edilince verilmesi gereken mesaj    
// Finally kısmı ise her durumda çalıştırılacak olan kod parçası  
// Throw ifadesi ile bir tabir atılır ve throw ifadesinden sonra bir catch gelmiyorsa kod sonlandırılır

const makeError2 = () => {
    let i = 1
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new customError("Odd number")    
            }
            console.log("Even number");     
        } catch (err) {
            console.error(err.stack) // .message sadece errorun mesajını konsola yazar, .name errorun türünü ekrana yazdırır, .stack errorun detaylı şekilde ekrana yazdırır. 
        } finally {
            console.log("...finally");
            i++;
        }
    }
}
makeError2()

function customError(message) {
    this.message = message
    this.name = "customError"
    this.stack = `${this.name}: ${this.message}`
    
}
