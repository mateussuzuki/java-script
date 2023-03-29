function verificar() {
    var ini = parseInt(document.querySelector("#number-inicio").value)
    var fim = parseInt(document.querySelector("#number-fim").value)
    var pass = parseInt(document.querySelector("#number-passo").value)
    var res = document.querySelector("#res")
    if (!ini || !pass || !fim) {
        return window.alert(``)
    }
    if (pass < 1) {
        return window.alert("asdkolasdkodksa")
    }
    if (ini > fim) {
        res.innerHTML = `${ini}\n`
        while (ini - pass > fim) {
            ini -= pass
            res.innerHTML += `${ini}\n`
        }
    } else {
        res.innerHTML = `${ini}\n`
        while (ini + pass < fim) {
            ini += pass
            res.innerHTML += `${ini}\n`
        }
    }
}