function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar"
        //window.alert('[ERRO] Digite valores válidos.')
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando o PASSO = 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            //contagem decrescente
            for(let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}`
    }

}