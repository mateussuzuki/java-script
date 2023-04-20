
let arr = []
function adicionar() {
    let num = document.querySelector("#number-num").value
    let select = document.querySelector("#select-numeros")
    if (num == 0 || num > 100) {
        window.alert("O número não foi encontrado ou já foi adicionado")
    } else {
        let sec = document.createElement("option")
            sec.innerHTML = `O valor ${num} foi adicionado`
            select.appendChild(sec)
        }
        let res = []
        arr.push(num)
        arr.sort()
    }      

function finalizar() {
    return arr[arr.length - 1]
    let p = document.createElement("p")
    p.innerHTML = `O valor ${num} foi adicionado`
    select.appendChild(sec)


}