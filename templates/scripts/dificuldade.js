let images = ["../images/dif1.png", "../images/dif2.png", "../images/dif3.png"]
let arrow = [`<i class="fa-solid fa-arrow-down"></i>`, `<i class="fa-solid fa-arrow-right"></i>`, `<i class="fa-solid fa-arrow-up"></i>`]

function out(element){
    animation_card(element, "desloc_b")
}
function over(element){
    animation_card(element, "desloc_t")
}
function animation_card(target, classe){
    let number_img = Number(target.getAttribute("id_nivel"))
    let imgs = document.querySelectorAll("img")
    imgs[number_img-1].setAttribute("class", `img_nivel ${classe}`)
}
function game(element) {
    redirecionamento(`game?palavras=${element.getAttribute("id_nivel")}`)
}
function redirecionamento(local){
    window.location.href = `/${local}`
}