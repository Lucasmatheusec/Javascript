function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){//manha
    img.src = 'Imagens/manha-redonda.png'
    document.body.style.background = '#6f5548';
}else if (hora >= 12 && hora < 18){//tarde
    img.src = 'Imagens/tarde-redonda.png'
    document.body.style.background = '#cfc273';
}else{//noite
    img.src =  'Imagens/noite-redonda.png'
    document.body.style.background = '#1c1914';
}
}