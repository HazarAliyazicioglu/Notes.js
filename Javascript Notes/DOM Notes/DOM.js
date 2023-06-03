// DOM Document Object Model
// https://www.w3schools.com/js/js_htmldom.asp linke tıklayarak daha detaylı öğrenebilrsiniz

const view1 = document.getElementById("view1");       // Html kodu içerisinden IDsine göre element seçmemizi sağlar
console.log(view1);

const view2 = document.querySelector("#view2");       // Html kodu içerisinden istediğimiz element ile ilk eşleneni seçmemizi sağlar
console.log(view2);
view1.style.display = "flex";                         // .style.x ile x yerine verdiğimiz propertye göre seçtiğimiz yerin stilini değiştirebiliriz
view2.style.display = "flex";

const views = document.getElementsByClassName("view") // Html kodu içerisinden classına göre element seçmemizi sağlar
console.log(views);

const sameViews = document.querySelectorAll('.view')  // Html kodu içerisinden istediğimiz element ile bütün eşlenenleri seçmemizi sağlar
console.log(sameViews);

const divs = view1.querySelectorAll("div")            // Daha önce seçtiğimiz view1 içerisindeki bütün divleri seçtik
console.log(divs);

const sameDivs = view1.getElementsByTagName("div")    // Html tag ismine göre element seçmemizi sağlar 
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "red";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

const hText = document.querySelector("h1")
console.log(hText);
hText.textContent = "Welcome to my DOM Page";               // textContent ile seçtiğimiz yere yazmak istediğimiz metni yazarız

const headerBar = document.querySelector("header")
console.log(headerBar);
headerBar.innerHTML = '<h1>Welcome</h1> <p>DOM Page</p>'    // innerHTML ile HTML kodunu değiştirebiliriz
headerBar.style.justifyContent = "space-evenly"

console.log(evenDivs[1]);
console.log(evenDivs[1].parentElement);                     // .parentElement ebeveyn elementi seçmemizi sağlar
console.log(evenDivs[1].parentElement.children);            // .children seçilen elementin bütün çocuklarını seçmemizi sağlar
console.log(evenDivs[1].parentElement.childNodes);          // .childNodes seçilen elementin bütün çocuk nodeslerini ve text nodeslerini seçer
console.log(evenDivs[1].parentElement.hasChildNodes());     // .hasChildNodes çocuklarının nodesleri var mı diye kontrol eder
console.log(evenDivs[1].parentElement.lastChild);           // .lastChild ebeveynin son çocuğu text olarak seçmemizi sağlar 
console.log(evenDivs[1].parentElement.lastElementChild);    // .lastElementChild ebeveynin son çocuğunu element olarak seçmemizi sağlar
console.log(evenDivs[1].parentElement.firstChild);          // .firstChild ebeveynin son çocuğu text olarak seçmemizi sağlar
console.log(evenDivs[1].parentElement.firstElementChild);   // .firstElementChild ebeveynin son çocuğunu element olarak seçmemizi sağlar
console.log(evenDivs[1].nextSibling);                       // .nextSibling seçilmiş elementten sonra gelen kardeş elementi text olarak seçer    
console.log(evenDivs[1].nextElementSibling);                // .nextSibling seçilmiş elementten sonra gelen kardeş elementi element olarak seçer
console.log(evenDivs[1].previousSibling);                   // .previousSibling seçilmiş elementten önce gelen kardeş elementi text olarak seçer
console.log(evenDivs[1].previousElementSibling);            // .previousElementSibling seçilmiş elementten sonra önce kardeş elementi element olarak seçer

while (view2.lastChild) {
    view2.lastChild.remove()                                // .remove() html kodları içerisinden istediğimiz bir elementi kaldırmamızı sağlar
}

const createText = (parent,iter) => {
    const newText = document.createElement("p")             // .createElement() html kodları içerisinde element oluşturmamızı sağlar
    newText.textContent = iter
    newText.style.textAlign = "center"
    newText.style.display ="flex"
    newText.style.justifyContent ="center"
    newText.style.alignItems ="center"
    newText.style.paddingLeft ="260px"
    parent.append(newText);                                 // .append(x) x değerimizi seçmmiş olduğumuz yere eklememizi sağlar mesela burda parent yani view2'ye ekleriz
}  
createText(view2,"Goodbye") 