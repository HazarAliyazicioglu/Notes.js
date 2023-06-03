alert("Welcome to my page") // Sitemizin kutu içerisinde bize mesaj vermesini sağlar

confirm("Ok === True : Cancel === False") // Sitemizin ekrana onay kutucuğu çıkarmasını sağlar

let myBoolean = confirm("Ok === True : Cancel === False")
console.log(myBoolean);

let name = prompt("Enter your name: "); // prompt metodumuz kullanıcının kendi istediği değeri girmesini sağlar

if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name);
}else{
    console.log("Please enter your name");
}