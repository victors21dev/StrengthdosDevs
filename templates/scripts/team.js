let team_div = document.querySelector("#team_div")
let persons = [
    format("Victor Santos", "../team/victor.jpeg", "santosvictor18", "victor-santos-da-silva-2753a6191", "victors21dev"),
    format("Mirella Louise", "../team/mirella.jpg", "miih__3", "", ""),
    format("Paulo Vinicio", "../team/paulo.jpg", "ashura_ink", "paulo-vin%C3%ADcio-a634a7168", ""),
    format("Caio Porto Ramos", "../team/caio.jpg", "", "", "Tapioquito"),
    format("Charlesson Bezerra", "../team/charlesson.jpg", "chaysociais", "", "SociologiaDev"),
    format("Adrian", "../team/the-programmer.png", "", "", ""),
]
persons.forEach(element => {
    team_div.innerHTML += `
        <div class="square">
            <div class="circle_img" style="background-image:URL(${element.url}); background-size: cover; background-position: center center">
                
            </div>
            <div>
                <h4>${element.nome}</h4>
            </div>
            <div class="social">
                ${add(0, element)}
                ${add(1, element)}
                ${add(2, element)}
            </div>
        </div>
    `
})

function format(n, u, inst, lin, gith){
    return { nome: `${n}`, url: `${u}`, instagram: `${inst}`, LinkedIn: `${lin}`, github: `${gith}`}
}
function add(rede, elemento) {
    switch (rede) {
        case 0:
            if (elemento.LinkedIn == "") {
                return ""
            } else {
                return `<div>
                            <a target="_blank" href="https://www.linkedin.com/in/${elemento.LinkedIn}">
                                <div class="icon_txt">
                                    <div>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                    <p>${elemento.LinkedIn}</p>
                                </div>

                            </a>
                        </div>`
            }
            case 1:
                if (elemento.instagram == "") {
                    return ""
                } else {
                    return `<div>
                    <a target="_blank" href="https://www.instagram.com/${elemento.instagram}">
                        <div class="icon_txt">
                            <div>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <p>${elemento.instagram}</p>  
                        </div>

                    </a>
                </div>`
                }
            case 2:
                if (elemento.github == "") {
                    return ""
                } else {
                    return `<div>
                                <a target="_blank" href="https://github.com/${elemento.github}">
                                    <div class="icon_txt">
                                        <div>
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                        <p>${elemento.github}</p>
                                    </div>
                                </a>
                            </div>`
                }
        default:
            break;
    }
}