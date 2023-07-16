function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src',"imagens/menino.png")
                document.body.style.background = '#3b4232';
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src',"imagens/homem-jovem.png")
                document.body.style.background = '#b9b7a8'
            } else if (idade < 50){
                //adulto
                img.setAttribute('src',"imagens/homem-adulto.png")
                document.body.style.background = '#1e3525'
            } else {
                //idoso
                img.setAttribute('src',"imagens/idoso.png")
                document.body.style.background ='#9d4d2a'
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src',"imagens/menina.png")
                document.body.style.background = '#c9834f'
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src',"imagens/mulher-jovem.png")
                document.body.style.background = '#5b595c'
            } else if (idade < 50){
                //adulto
                img.setAttribute('src',"imagens/mulher-adulta.png")
                document.body.style.background = '#1f1c13'
            } else {
                //idoso
                img.setAttribute('src',"imagens/idosa.png")
                document.body.style.background = '#ae9167'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}   