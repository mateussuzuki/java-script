function verificar() {
    var ini = parseInt(document.querySelector("#number-inicio").value)
    var fim = parseInt(document.querySelector("#number-fim").value)
    var pass = parseInt(document.querySelector("#number-passo").value)
    var res = document.querySelector("#res")
    if (!ini || !pass || !fim) {
        return window.alert("[ERRO]: Faltam dados")
    }
    if (pass < 1) {
        return window.alert("[ERRO] O passo não pode ser negativo")
    }
    if (ini > fim) {
        // Contagem regressiva
        res.innerHTML = `${ini}, `
        while (ini - pass > fim) {
            ini -= pass
            res.innerHTML += `${ini}, `
        }
    } else {
        // Contagem crescente
        res.innerHTML = `${ini}, `
        while (ini + pass < fim) {
            ini += pass
            res.innerHTML += `${ini}, `
        }
    }
}