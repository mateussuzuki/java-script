function gerar() {
    var num = parseInt(document.querySelector("#number-numero").value)
    var select = document.querySelector("#select-tabuada")
    if (num.lenght == 0 || num < 0) {
        window.alert("[ERRO] Verifique o número")
    } else {
        select.innerHTML = ""
        for (var a = 1; a <= 10; a++) {
            var sec = document.createElement("option")
            sec.text = `${num} x ${a} = ${num*a}`
            select.appendChild(sec)
        }
    }
}
