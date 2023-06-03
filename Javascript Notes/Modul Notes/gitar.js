// const yerine export default function playGuitar() yazılabilir
const playGuitar = () => {
    return "Playing guitar!"
}

//const önüne export yazılabilir
const shredding = () => {
    return "Shredding some licks!"
}

//const önüne export yazılabilir
const plucking = () => {
    return "Plucking the strings..."
}

export default playGuitar   // Varsayılan olarak çalıştırılanı seçmemizi sağlar
export {shredding,plucking} // Export diğer programlara export ettiğimiz verileri kullanabilme yetkisi verir