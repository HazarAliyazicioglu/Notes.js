// High ORder Functions

// High order functionlar aşağıdakilerden en az bir tanesini gerçekleştirir

// Bir veya birden fazla fonksiyonu değişşken olarak alır (parametre ile)
// Fonksiyonu sonuç olarak döndürür

// forEach()

import { posts } from "./posts.js";

// posts.js dosyasından aldığımız bütün verileri teker teker çalıştırıyoruz
posts.forEach(post => {
    console.log(post);
});
console.clear()

// Almış olduğumuz verileri belli bir koşula göre filtreliyoruz
const filteredPosts = posts.filter((post) =>{           // filter() yöntemi, bir işlev tarafından sağlanan testi geçen öğelerle dolu yeni bir dizi oluşturur.
    return post.userId === 2;
})
console.log(filteredPosts )

// Filtrelemiş olduğumuz veriler ile yeni bir dizi oluşturuyoruz
const mappedPosts = filteredPosts.map( (post) =>{       // map(), her dizi öğesi için bir işlev çağırarak yeni bir dizi oluşturur.
    return post.id * 10
})
console.log(mappedPosts);

const reduccedPosts = mappedPosts.reduce((sum,post)=>{  // reduce(), dizi öğeleri için matematiksel işlemler yaparak bir sonuç çıkarmamızı sağlar.
    return sum + post
} )
console.log(reduccedPosts);