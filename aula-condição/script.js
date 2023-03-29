function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#itxtano").value
    var res = document.querySelector("div#res")
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute("src", "criança-menino.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "jovem-menino.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "adulto-menino.png")
            } else {
                //idoso
                img.setAttribute("src", "idoso-menino.png")
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute("src", "criança-menina.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "jovem-menina.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "adulto-menina.png")
            } else {
                //idoso
                img.setAttribute("src", "idosa-menina.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}