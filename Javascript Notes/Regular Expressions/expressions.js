document.getElementById("phoneNum").addEventListener("input",(event) => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g
    const input = document.getElementById("phoneNum")
    const format = document.querySelector(".phoneFormat")
    const phone = input.value
    const found = regex.test(phone)
    if (!found && phone.length) {
        input.classList.add("invalid")
        format.classList.add("block")
    }else{
        input.classList.remove("invalid")
        format.classList.remove("block")
    }
})

document.getElementById("phoneForm").addEventListener("submit",(event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum")
    const regex = /[()-. ]/g
    const savedPhoneNum = input.value.replaceAll(regex,"")
    console.log(savedPhoneNum);
})

document.getElementById("textForm").addEventListener("submit",(event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry")
    const regex = / {2,}/g
    const newText = input.value.replaceAll(regex," ").trim()
    console.log(newText);
    const encodedInputText = encodeURI(input.value)
    const encodedCleanText = encodeURI(newText)
    console.log(encodedInputText);
    console.log(encodedCleanText);
})




/*

Anlamak için farklı farklı örnekler ile pratik yap

Global Expression:
xyz             xyz'nin birlikte bulunduğu yerleri seçer
[xyz]           metinde bulunan her bir x,y,z harfini seçer
[^xyz]          metindeki x,y,z harfleri dışında kalan bütün harfleri seçer
[a-z]           metindeki a'dan z'ye kadarki küçük harfleri seçer
[A-Z]           metindeki A'dan Z'ye kadarki büyük harfleri seçer
[0-9]           metindeki 0'dan 9'a kadarki sayıları seçer
[\w]            metindeki bütün harfleri ve sayıları seçer
[\W]            metindeki harfler ve sayılar hariç herşeyi seçer (boşluk ve noktalama işaretleri dahil)
[\d]            metindeki bütün sayıları seçer 
[\D]            metindeki sayılar hariç kalan herşeyi seçer
[\s]            metindeki bütün boşlukları seçer
[\S]            metindeki boşluklar dışında kalan herşeyi seçer
.               metindeki herşeyi seçer 

Multiline Expression:
x$              metindeki cümlelerin sadece sonundaki x harfini seçer (Büyük, küçük harf dikkat)
^X              metindeki cümlelerin sadece başındaki X harfini seçer (Büyük, küçük harf dikkat)
(?:xyz)         metindeki xyz'nin birlikte bulunduğu yerleri seçer
a(?=xyz)        metindeki xyz'nin birlikte bulunduğu yerlerde xyz'den önce a harfi geçen yerleri seçer
a(?!xyz)        metindeki xyz'nin birlikte bulunduğu yerlerde a harfinden sonra xyz'nin olmadığı yerleri seçer
(xyz)?a         metindeki xyz'nin birlikte bulunduğu yerlerde xyz'den sonra gelen ve metindeki tüm a harflerini seçer
[A-Z]\w+        metindeki A-Z ye kadar olan harflerle başlayan ve kelime olan yerleri seçer
[A-Z]\w+?       metindeki A-Z ye kadar olan harfleri ve ondan sonra gelen harfi birlikte seçer
[A-Z][a-z]*     metindeki seçilmiş olan yerler ile 0 yada 1'den fazla kez eşleşir
\d{3,4}         metindeki sayıları hem 3'erli hem de 4'erli grup şeklinde seçer (Yüksek sayıdan başlar)
(x|y)z          metindeki xz ve yz harf gruplarını seçer

*/