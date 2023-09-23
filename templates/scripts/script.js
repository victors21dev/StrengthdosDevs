// ler dados
async function get() {
    let nome = document.querySelector("#nome").value
    let sobrenome = document.querySelector("#sobrenome").value
    let resultado = document.querySelector("#resultado")
    const url = `http://localhost:3000/name?firsname=${nome}&lastname=${sobrenome}`

    const response = await fetch(url);
    const responseJson = await response.json();
    resultado.innerHTML = (`Nome: ${responseJson.nomecompleto}. Sobrenome: ${responseJson.sobrenome}`)
}