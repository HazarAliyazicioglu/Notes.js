// Web Storage API

// DOM sisteminin bir parçası değildir - Windows API anlamına gelir
// Global değişkenler aracılığı ile Js tarafından kullanılabilir - Windows

// Window yazmamıza gerek yok. Zaten birtek onu kastetmektedir


//Local Storage: Depolanan veriler tarayıcı kapansa bile depolanmaya devam eder. 
//Session Storage: Depolanan veriler tarayıcı sekmesi kapatıldığında kaybolur.



const myArray = ["eat","sleep","code"]
const myObj ={
    name : "Hazar",
    lastname : "Aliyazicioglu",
    logName : function(){
        console.log(`My name is ${this.name} ${this.lastname}`);
    }
}
myObj.logName()

sessionStorage.setItem("mySessionStore",myArray)                            // .setItem(x,y) Depolamaya öğe koymak için kullanılır x depolama alanının ismi yani key, y ise depolanacak veriler yani value
const mySessionData = sessionStorage.getItem("mySessionStore")              // .getItem(x) Depolama alanından veri çekmek için kullanılır x depolama alanına verilen isim
console.log(mySessionData);

sessionStorage.setItem("mySessionStore",JSON.stringify(myObj))              // Kullanmış olduğumuz JSON özelliği ile depoladığımız veriler JSON türünde depolanır (.stringify ile stringe çeviririz)
const mySessionData2 = JSON.parse(sessionStorage.getItem("mySessionStore")) // JSON özelliği ile depoladığımız veriler .parse ile eski haline çeviririz (array ise array, object ise object)
console.log(mySessionData2);

localStorage.setItem("myLocalStore",JSON.stringify(myArray))
const key = localStorage.key(0)                                             // Depolama alanındaki key değerini seçer
localStorage.removeItem("myLocalStore")                                     // Key değerine göre depolama alanındaki verileri siler
localStorage.clear()                                                        // Depolama alanındaki tüm verileri siler
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"))
console.log(myLocalData);
console.log(key);