
/* ? operatörü if mantığı gibi çalışır. Eğer bir değişkenin yanına ? koyuluyorsa o değişkenin değeri var mı diye bakar

Örneğin aşağıdaki örnekte yemeğin yanına soru işareti konulmuş ve araya iki nokta koyarak iki cümle yazılmış. Eeğer değişkenin değeri var ise soldaki cümle, değişkenin değeri yok ise sağdaki cümle seçilir. Sol cümle true durumunda sağ cümle false durumunda kullanılır.
? operatörünü iki kere yan yana yazarsak sadece false cümlesini yazmamız yetecektir   
*/ 

let food1 = "Karnıyarık";
let response = food1 ?? "Maalesef karnıyarığımı bulunmamaktadır";
console.log(response);

// Aşağıdaki örnek gibi iç içe kullanım yapabiliriz

let food2 ;
let isCustomerBanned = false;
let foodAccess = isCustomerBanned ? "Maalesef size yemek servisi yapmıyoruz": food2
? "Evet elimizde patates bulunmaktadır":"Maalesef elimizde patates bulunmamaktadır"
console.log(foodAccess);

// Aşağıdaki örnekte olduğu gibi birden fazla koşul durumu yazabiliriz

let testScore = Math.floor(Math.random() * 100 ) + 1
let myGrade = 
testScore > 90 ? "A":
testScore > 80 ? "B":
testScore > 70 ? "C":
testScore > 60 ? "D":
testScore > 50 ? "E": "F"  

console.log(myGrade);

// Aşağıdaki örnekte olduğu gibi koşullar içerisinde && kullanarak tek seferde kontrol edilmesi gerekn koşul sayısını arttırabiliriz

let playerOne = "rock"
let computer = "scissors"
let result = 
    playerOne === computer 
        ? "Draw"
        : playerOne === "rock" && computer === "paper"
        ?"Computer Wins"
        : playerOne === "paper" && computer === "scissors"
        ?"Computer Wins"
        : playerOne === "scissors" && computer === "rock"
        ?"Computer Wins"
        : "Player One Wins"

console.log(result);

/*
MATEMATİKSEL OPERATÖRLER:
+ 	Toplama
- 	Çıkarma
* 	Çarpma
** 	Üs alma
/ 	Bölme
% 	Mod alma
++ 	Artış sağlama
-- 	Azalış sağlama
*/

/*
ATAMA OPERATÖRLERİ:
= 	    x = y 	    x = y
+= 	    x += y 	    x = x + y
-= 	    x -= y 	    x = x - y
*= 	    x *= y 	    x = x * y
/= 	    x /= y 	    x = x / y
%= 	    x %= y 	    x = x % y
**= 	x **= y 	x = x ** y
*/

/*
KARŞILAŞTIRMA OPERATÖRLERİ:
== 	    eşittir
=== 	hem değer hem de tipi eşittir
!= 	    Eşit değildir
!== 	hem değer hem de tipi eşit değildir
> 	    büyüktür
< 	    küçüktür
>= 	    büyük eşittir
<= 	    küçük eşittir
?       Yukarıda öğrendiğimiz ternay oparetörü
*/

/*
MANTIK OPERATÖRLERİ:
&& 	mantıksal ve
|| 	mantıksal veya
! 	mantıksal değil
*/

/*
BİT OPERATÖRLERİ:
&   	ve 	
|   	veya 	
~   	değil	
^    	özel veya	
<< 	    left shift  
>> 	    right shift 	
>>> 	unsigned right shift
*/