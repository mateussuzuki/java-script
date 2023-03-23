function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iano = document.querySelector("input#iano")
    var res = document.querySelector("div#res")
    if (iano.value.lenght == 0 || iano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var idade = ano - Number(iano.value) 
        var isex = document.getElementsByName("sex")
        var genero = ""
        if (isex[0].checked) {
            genero = "Homem"
        } else if (isex[1].checked) {
            genero = "Mulher"
        }
        res.innerHTML = `Então é um ${genero} de ${idade} anos!`
    }
}    