function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#itxtano")
    var res = document.querySelector("div#res")
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        if (fsex[0].checked) {
            gênero = "Homem"
        } else if (fsex[1].checked) {
            gênero = "Mulher"
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}