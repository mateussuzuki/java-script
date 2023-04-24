
let arr = []
let maiornumerolista
function adicionar() {
    let num = document.querySelector("#number-num").value
    let select = document.querySelector("#tabela")
    if (num == 0 || num > 100 || arr.some(item => item == num)) {
        window.alert("O número não foi encontrado ou já foi adicionado")
        return 
    } else {
        let sec = document.createElement("div")
            sec.innerHTML = `O valor ${num} foi adicionado`
            select.appendChild(sec)
        }
        let res = []
        arr.push(num)
    }      

    function finalizar() {
        arr.forEach(item)
            if(arr.every(item2 => item <= item2)) {
                let maiornumerolista = item
            }
        
    }
    console.log(maiornumerolista)