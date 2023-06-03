// EVent Listener

const nav = document.querySelector("nav")
const div = nav.querySelector("div")
const h1 = div.querySelector("h1")


// Syntax addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("Doing something")
}

h1.addEventListener("click",doSomething,false)      //.addEventListener kullanıcı bir yer ile etkileşime geçtiğinde oluşacak olayı yazmamızı sağlayan kod
h1.removeEventListener("click",doSomething,false)   //.removeEventListener eklediğimiz Listener olayını kaldırmamızı sağlar

h1.addEventListener("click",function (event){
    console.log(event.target);                      //.target olayı tetikleyen öğeye etki eder
    event.target.textContent = "Clicked"
})

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readystate: complete");
        initApp()
    }
})

const initApp = () => {
    const nav = document.querySelector("nav")
    const div = nav.querySelector("div")
    const h1 = div.querySelector("h1")

    nav.addEventListener("click", (event) => {
        nav.classList.add("purple")                 // Html kodları içerisinde belirtilen yere class ekler
        nav.classList.remove("darkblue")            // Html kodları içerisinde belirtilen yerden class kaldırır         
    },false)

    div.addEventListener("click", (event) => {
        div.classList.toggle("green")               // Html kodları içerisinde belirttiğimiz class bulunuyor ise kaldırır bulunmuyor ise ekler
        div.classList.toggle("blue")              
    },false)

    h1.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My Page" ? (event.target.textContent = "Clicked") : (event.target.textContent ="My Page")
        event.stopPropagation();                    // .stopPropagation() event eyleminin durdurulmasını sağlar
    },
    false)

    const nav2 = document.querySelector("nav")
    nav2.addEventListener("mouseover",(event) => {
        event.target.classList.add("height100")
    })
    nav2.addEventListener("mouseout",(event) => {
        event.target.classList.remove("height100")
    })
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readystate: complete");
        initApp2()
    }
})

const initApp2 = () => {
    const view3 = document.querySelector("#view3")
    const myForm = view3.querySelector("#myForm")
    const valuable = myForm.querySelector("#myTextInput")
    myForm.addEventListener("submit",(event) => {
        event.preventDefault()                      // .preventDefault() ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar. Örneğin a elementine tıklandığı zaman varsayılan davranışı ilgili url adresine yönlenmektir bu davranışı engellemek için kullanırız.
        console.log(valuable);
    })
}



// https://www.webcebir.com/180-javascript-event-nesnesi-dersi.html Event öğeleri için