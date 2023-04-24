
let arr = []
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
        arr.push(num)
    }      

    function finalizar() {
        let maiornumerolista
        let menornumerolista
        arr.forEach(item => {
            if (arr.every(item2 => item >= item2)) 
                maiornumerolista = item
            if (arr.every(item2 => item <= item2))
                menornumerolista = item
        });
        document.querySelector("#res").innerHTML = `O maior item da lista é ${maiornumerolista} <br> O menor item da lista é ${menornumerolista}`
    }