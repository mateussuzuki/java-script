function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iano = document.querySelector("input#iano")
    var res = document.querySelector("div#res")
    if (iano.value.length == 0 || Number(iano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var idade = ano - Number(iano.value)
        var sex = document.querySelector("input.sex")
        var img = document.createElement("img")
        var genero = ""
        if (document.querySelector("#radio_masc").checked) {
            genero ="Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "criança-menino.png")
            } else if (idade < 20) {
                //jovem
                img.setAttribute("src", "jovem-menino.png")
            } else if (idade < 35) {
                //adulto
                img.setAttribute("src", "adulto-menino.png")
            }else if (idade < 50) {
                //idoso
                img.setAttribute("src", "idoso-menino.png")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "criança-menina.png")
            } else if (idade < 20) {
                //jovem
                img.setAttribute("src", "jovem-menina.png")
            } else if (idade < 35) {
                //adulto
                img.setAttribute("src", "adulto-menina.png")
            }else if (idade < 50) {
                //idoso
                img.setAttribute("src", "idoso-menina.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `É um ${genero} com ${idade} anos!`
        res.appendChild(img)
        
    }
}