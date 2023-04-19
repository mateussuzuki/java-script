
function adicionar() {
    let num = document.querySelector("#number-num").value
    var select = document.querySelector("#select-numeros")
    if (num == 0 || num > 100) {
        window.alert("O número não foi encontrado ou já foi adicionado")
    } else {
        let sec = document.createElement("option")
            sec.innerHTML = `O valor ${num} foi adicionado`
            select.appendChild(sec)
    }
}