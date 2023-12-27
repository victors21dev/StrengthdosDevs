let partes_forca = []
let palavra_separada_arrray = ''
let dica = ''
let letras_jogadas_acertadas = []
let tentativas_total = ''
let tentativas = document.querySelector("#tentativas")
let gameOver = false
let cont_forca = 0
let dica_div = document.querySelector("#dica")

// Pegar parametros
async function get() {
    var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var id_nivel = urlClass.searchParams.get("palavras");
    banco_get(id_nivel)
}
// Pegar palavras no banco
async function banco_get(nivel_id) {
    const url = `/palavras_banco`
    const response = await fetch(url);
    const responseJson = await response.json();
    let banco_palavras = []
    responseJson.forEach((element) => {
        banco_palavras.push(element)
    })
    let palavras_pelo_id = banco_palavras.filter(nivel => (nivel.id_nivel == `${nivel_id}`))
    palavras_pelo_id
    let palavras_para_python = ''
    palavras_pelo_id.forEach((element) => {
        palavras_para_python += `${element.palavra},`
    })

    // Sortear Palavra python
    resposta_python = await sorteamento_palavra_python(palavras_para_python)

    // Salvar variáveis
    palavra_separada_arrray = resposta_python.letras_separadas
    tentativas_total = resposta_python.tentativas
    palavra_sort = resposta_python.palavra
    tentativas.innerHTML = tentativas_total

    template_forca()
    add_letras_html(resposta_python.qtd_letras)
    pegar_dica(banco_palavras, palavra_sort)
    setTimeout(() => {
        let loading_tela = document.querySelector(".loading_div")
        loading_tela.setAttribute("style", "animation-name: none_display; animation-duration: 1s;animation-fill-mode:both; display='none'")
    }, 100)
}

// Sortear palavra no python
async function sorteamento_palavra_python(palavras_para_python) {
    const url = `/python_sortear?palavras=${palavras_para_python}`
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(response)
    const responseJson = await response.json();
    return responseJson
}
// Adicionar squares no html
async function add_letras_html(quantidade) {
    let letras_div = document.querySelector(".letras_div")
    for (let index = 0; index < quantidade; index++) {
        let posicao = 0
        let posicao_add = 'not'
        let estilo = ''
        palavra_separada_arrray.forEach(element => {
            if (element == " ") {
                posicao_add = posicao
                estilo = 'style="background-color:rgb(237, 238, 255);"'
            } else if(element == "-"){
                posicao_add = posicao
                estilo = ''
            }
            posicao++
        });
        if (index == posicao_add) {
            letras_jogadas_acertadas.push(palavra_separada_arrray[posicao_add])
            letras_div.innerHTML += `<div posicao="${index}" class="square_letras" ${estilo}>${palavra_separada_arrray[posicao_add]}</div>`
        } else {
            letras_div.innerHTML += `<div posicao="${index}" class="square_letras"></div>`
        }
    }

}

// Posicao da forca
async function template_forca() {
    let template_forca = document.querySelector(".template_forca")

    for (let i = 0; i < template_forca.children.length; i++) {
        partes_forca.push(template_forca.children[i].getAttribute("class"))
    }
}
// Letra clicada
function letra_clicada(letra) {
    if (gameOver == true) {
        gameOver_tela()
    } else {
        let result = letras_jogadas_acertadas.includes(letra.getAttribute("id"))
        if (result == false) {
            letra.setAttribute("class", "disable")
            letra.setAttribute("onclick", "")
            verificar_letra(letra.getAttribute("id"))
        }
    }

}
// Verificar se letra disponível
function verificar_letra(letra) {
    let pos = 0
    let posicao_squares = document.querySelector(".letras_div")
    let nessa_rodada_teve = ''

    palavra_separada_arrray.forEach(element => {
        if (element == String(letra)) {
            posicao_squares.children[pos].innerHTML = String(letra)
            letras_jogadas_acertadas.push(letra)
            nessa_rodada_teve = true
        }
        pos++
    })

    var arr = palavra_separada_arrray;
    var novaArr = arr.filter(function (este, i) {
        return arr.indexOf(este) === i;
    });
    var arr2 = letras_jogadas_acertadas;
    var novaArr2 = arr2.filter(function (este, i) {
        return arr2.indexOf(este) === i;
    });

    if(novaArr.length == novaArr2.length){
        gameOver_tela()
    }

    if (nessa_rodada_teve == true) {
        
    } else {
        if (tentativas_total == 0) {
            gameOver = true
            gameOver_tela()
        } else {
            tentativas_total = (tentativas_total - 1)
            mostrar_forca()
            tentativas.innerHTML = tentativas_total
            if (tentativas_total == 0) {
                gameOver = true
                gameOver_tela()
            }
        }
    }
}
function gameOver_tela() {
    setTimeout(() => {
        let tela_gameOver = document.querySelector("#tela_gameOver")
        tela_gameOver.style.display = "block"
    }, 500)
}
function mostrar_forca(){
    let classe = document.querySelector(`.${partes_forca[cont_forca]}`)
    classe.style.display = "block"
    cont_forca = cont_forca+1
}
function pegar_dica(lista, palavra){
    for(let i = 0; i<lista.length; i++){
        if(lista[i].palavra == palavra){
            dica_div.innerHTML = lista[i].dica
        }
    }
}