let lr1 = document.querySelector("#letrasRow1")
let lr2 = document.querySelector("#letrasRow2")
let lr3 = document.querySelector("#letrasRow3")

let letrasRow1 = [{ m1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"] }]
let letrasRow2 = [{ m2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"] }]
let letrasRow3 = [{ m3: ["Z", "X", "C", "V", "B", "N", "M"] }]

let matriz = [letrasRow1, letrasRow2, letrasRow3]
matriz.forEach(matriz => {
    if (matriz[0].m1 == undefined) {
        if (matriz[0].m2 == undefined) {
            matriz.forEach(element => {
                element.m3.forEach(letra => {
                    lr3.innerHTML += format_letra(letra)
                })
            })
        } else {
            matriz.forEach(element => {
                element.m2.forEach(letra => {
                    lr2.innerHTML += format_letra(letra)
                })
            })
        }
    } else {
        matriz.forEach(element => {
            element.m1.forEach(letra => {
                lr1.innerHTML += format_letra(letra)
            })
        })
    }
})
function format_letra(letra) {
    return `<li id="${letra}" class="letras_design" onclick='letra_clicada(this)'>${letra}</li>`
}