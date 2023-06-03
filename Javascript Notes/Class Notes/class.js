// Function (Aşağıdaki class metoduna benzer çalıştığını göstermek için bir örnekl)
function pizzaFactory(pizzaSize) {
    const crust = "original"
    const size = pizzaSize
    return{
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}

const pizzaMake = pizzaFactory("medium")
pizzaMake.bake()

// Classes (Fonksiyonlar gibi çalışır) 
class Pizza{
    #sauce = "traditional"
    constructor(pizzaSize){
        
        this.size = pizzaSize;  // Class içerisindeki değişkeni parametre olarak kullanabiliriz
        this.crust = "original" // Class içerisinde değişkene değer atayabiliriz
        this.toppings = []      // Class içerisinde dizi kullanabiliriz
    }
     
    getCrust(){
        return this.crust;      // Değer okutmak istediğimiz metodun önüne get anahtar kelimesini yazarız
    }

    setCrust(pizzaCrust){       // Değer atamak istediğimiz metodun önüne set anahtar kelimesini yazarız 
        this.crust =pizzaCrust
    }

    getToppings(){ 
        return this.toppings
    }

    setToppings(topping){
        this.toppings.push(topping)
    }

    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}

const myPizza = new Pizza("pepperoni","medium"); // Pizza classımızı myPizza adlı değişkenimize atadık ve class içerisinde bulunan değişkenlere değer verdik
myPizza.setCrust("thin")                         // this.crust değişkenine set metodu sayesinde yeni değer atadık
myPizza.type ="supreme"                          // Yukarıda yaptığımıza new Pizza("pepperoni","medium") kodunun farklı satırda tek başına yapılmış hali
myPizza.bake()                                   // myPizza'ya atamış olduğumuz class içerisindeki fonksiyonumuzu çalıştırdık
myPizza.setToppings("sausage")                   // this.toppings dizisine eleman eklememizi sağlar
myPizza.setToppings("mushroom")
console.log(myPizza.getToppings());              // this.toppings dizisini konsola yazdırır
console.log(myPizza.type);                       // myPizza'ya atamış olduğumuz class içerisindeki değeri yazırdık
console.log(myPizza.getCrust());                 // this.crust değişkenini konsola yazdırır

// Classlar arası bağlantı kurma (extends)
class SpecialtyPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize); // super methodu ebeveyn olan classın parametresine erişim sağlar. Örneğin bu kodda Pizza classı ebeveyn classtır ve Pizza classı içerisinden pizzaSize parametresine erişim sağlayarak parametreyi çalıştırırız
        this.type = "The Works"
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialtyPizza = new SpecialtyPizza("medium");
mySpecialtyPizza.slice();

class Hamburger{
    crust = "original"
    #sauce = "ketchap" // Bir değişkenin başına # işareti koymak o değişkenin sadece bulunduğu class içerisinde işleme sokulabileceği yani private olduğu anlamına gelir. Eğer class dışarısında bir yerde kullanmak istersek hata alırız
    #size;
    constructor(hamburgerSize) {
        this.#size = hamburgerSize 
    }

    getSauce(){
        return this.#sauce
    }
    setSauce(hamburgerSauce){
        this.#sauce = hamburgerSauce
    }
    hereYouGo(){
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} hamburger`
        );
    }
}

const myHamburger = new Hamburger("extra large");
myHamburger.hereYouGo()
console.log(myHamburger.sauce); // #sauce yazsak bile konsola yazdıramayız


// Can I use sitesinden tarayıcıların hangi özellikleri destekleyip desteklemediğine bakabilirsiniz 