// get özelliktir ve atanılmış değeri ekrana yazmak için kullanılır 
// set özelliktir ve değişkene değer atamak için kullanılır 


//Obje oluşturma anahtar-değer ilişkisi şeklindedir
const myObj = {name:"Hazar", yas:"22"}
console.log(myObj);
console.log(myObj.name);

// Bir anahtara birden fazla değer verilebilir ayrıca anahtar içine anahtar-değer yazılabilir
const myObj2 = {
    alive:true,
    answer:42,
    hobbies: ["Games", "Eating", "Code", "Reading"],
    beverage:{
        morning: "Milk",
        afternoon: "Coke",
    },
    action: function(){
        return `Time for ${this.beverage.afternoon}` ;
    }
}
console.log(myObj2.hobbies[2]);         // Objenin içindeki anahtar birden fazla değere sahipse dizilerde olduğu gibi yazdırabiliriz
console.log(myObj2.beverage.morning);   // Objenin içindeki anahtar birden fazla anahtar içeriyor ise bu şekilde istediğimiz değeri seçebiliriz
console.log(myObj2["hobbies"][0]);      // Yazdırmanın farklı bir şeklidir
console.log(myObj2.action());           // Objenin içerisinde fonksiyon var ise

// Bir objeyi başka nesneler yaratmak için kullanabiliriz aşağıda olduğu gibi
const vehicle = {
    wheels:  4,
    engine: function () {
        return "Vroooommm" 
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());
 
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {return "Whooooosh"}
console.log(car.wheels);
console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function () {return "Shhhhhhhhh"}
console.log(tesla.wheels);
console.log(tesla.engine());

// Object methodları
const characters = {
    gang: {
        leadEnforcer: "Arthur Morgan",
        gunman: "John Marston",
        leader: "Dutch van der Linde",
        co_founder: "Hosea Matthews",
        rat: "Micah Bell",
        gunwoman: "Sadie Adler",
        hunter: "Charles Smith"
    }
}
delete characters.gang.hunter                           // Obje listesinden bir anahtarın değerini siler
console.log(characters.gang.hasOwnProperty("hunter"));  // Obje listesindeki anahtarın değeri olup olmadığını kontrol eder
console.log(characters.gang.hasOwnProperty("rat"));
console.log(Object.keys(characters));                   // Obje listesindeki anahtarları yazar
console.log(Object.keys(characters.gang));              // Üstteki kodun daha detaylı hali
console.log(Object.values(characters));                 // Obje listesindeki değerleri yazar
console.log(Object.values(characters.gang));            // Üstteki kodun daha detaylı hali

for(let role in characters.gang){
    console.log(`On ${role} role, it's ${characters.gang[role]}`);
}

// Obje listesindeki anahtarların tanımlarını değiştirmek
const {leadEnforcer : myBest , rat : SonofaBitch , leader : oneMoreHeist} = characters.gang // Obje listesindeki anahtarların tanımlarını değiştirmek
const {gunman, gunwoman, co_founder} = characters.gang                                      // Obje listesindeki anahtarları kullanmak
console.log(myBest);
console.log(SonofaBitch);
console.log(oneMoreHeist);
console.log(gunwoman);

// Obje listesini kullanarak fonksiyon oluşturma
function cowboy({leadEnforcer}) { return `${leadEnforcer} is the best gang member`}
console.log(cowboy(characters.gang));