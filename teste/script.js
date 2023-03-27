function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iano = document.querySelector("input#iano")
    var res = document.querySelector("div#res")
    if (iano.value.lenght == 0 || iano.value > ano) {
        window.alert("ERRO essa idade não existe")
    } else {
        var idade = ano - Number(ano.value)
        var sex = document.querySelector("input.sex")
        var img = document.createElement("img")
        var genero = ""
        if (document.querySelector("#radio_masc").checked) {
            genero ="Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.appendChild("src", "criança-menino.png")
            } else if (idade < 20) {
                //jovem
                img.appendChild("src", "jovem-menino.png")
            } else if (idade < 35) {
                //adulto
                img.appendChild("src", "adulto-menino.png")
            }else if (idade < 50) {
                //idoso
                img.appendChild("src", "idoso-menino.png")
            }
        } else {
            genero = "Mulher"
        }
        res.style.textAlign = "center"
        res.innerHTML = `${genero}`
        
        
    }
}