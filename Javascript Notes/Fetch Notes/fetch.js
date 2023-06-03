// Özellikle Fetch API videoları izle ve pekiştir

// https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a konu hakkında makale
// https://netbilio.com/orneklerle-javascript-fetch-api-kullanimi/ konu hakkında makale

// Fetch API

// Callbacks
function firstFunction(parameters , callback) {
    // do stuff
    callback() // Bir fonksiyonun çalışmasını sağladıktan sonra başka bir fonksiyonun çalışmasını sağlar
}

// Promises (Zamandan farksız olarak çalışabilirler)
// 3 aşama : Bekleme(Pending), Yerine getirme(Fulfilled), Reddedildi(Rejected)

const myPromise = new Promise((resolve,reject)=>{
    const error = true
    if(!error){
        resolve("Yes! resolved the promise")    // Başarılı sonuç aldığımızda resolve kodu çalışır
    }else{  
        reject("No! rejected the promise")      // Başarısız sonuç aldığımızda reject kodu çalışır
    }
})
console.log(myPromise);

myPromise.then(value =>{ // .then() ile yazdığımız promise kodundan resolve değerini çekeriz
    return value + 2
})
.then((newValue) =>{
    console.log(newValue);
})
.catch(err =>{          // .catch() ile yazdımız promise kodundan reject değerini çekeriz
    console.error(err);
})

// setTimeout kodun belli bir zaman sonunda çalışmasını sağlar mesela aşağıda 3 saniye sonunda çalışır
// 1 saniye = 1000 ms'dir

const myNextPromise = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("myNextPromise resolved!")
    },3000)
})

myNextPromise.then(value => {
    console.log(value);
})

// Async / Await
// Async anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken, Await ise sonucu Promise olan fonksiyonun bitmesini bekler
// https://www.yusufsezer.com.tr/javascript-es7-async-await/

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    console.log(jsonUserData);
    return jsonUserData
}

const anotherFunction = async () => {
    const data = await myCoolFunction()
    myUsers.userList = data
    console.log(myUsers.userList);
}
anotherFunction()
console.log(myUsers.userList);

// Async / Await Örnekleri

const getAllUserEmails = async () => {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData1 = await response1.json()

    const userEmailArray = jsonUserData1.map(user =>{
        return user.email
    })
    console.log(userEmailArray);
    postToWebPage(userEmailArray)
}
getAllUserEmails()

// 2
const postToWebPage = (data2) =>{
    console.log(data2);
}

const getDadJoke = async () =>{
    const response2 = await fetch("https://icanhazdadjoke.com/", {method:"GET" /*veri almak için kuulanılır*/, headers:{Accept: "text/plain" /*json olarak çıkarmak istersek application/json yazarız*/ }})
    const textJokeData2 = await response2.text()
    console.log(textJokeData2);
    
}
getDadJoke()

// 3
const jokeObject = {id: "xs4o49hF6pb", joke: "What kind of pants do ghosts wear? Boo jeans."}
const postData = async (jokeObject) => {
    const response3 = await fetch("https://httpbin.org/post",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(jokeObject)
        })
        const jokeResponse3 = await response3.json()
        console.log(jokeResponse3);
}
postData(jokeObject)

// 4
/* const requestJoke = async (firstName, lastName) => {
    const response4 = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse4 = await response4.json();
    console.log(jsonResponse4.value.joke);
}
requestJoke("Hazar" ,"Aliyazicioglu") */

//5
/* const getDataFromForm = () => {
    const requestObject = {
        firstName: "Jackie",
        lastName : "Chan",
        categories : ["nerdy"]
    };
    return requestObject;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
} */

// Fetch
// Fetch metodu bize verileri direkt olarak promise metodu şeklinde almamızı sağlar

const users = fetch("https://jsonplaceholder.typicode.com/users") 
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user =>{
        console.log(user);
    })
})