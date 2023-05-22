const img = document.getElementById('imagem')
const botao = document.getElementById('botao')

botao.addEventListener('click', ligarDesligar)
function ligarDesligar(){
    if(img.src.includes('desligada.jpg')){
        img.src = 'ligada.jpg'
        botao.innerText = 'Desligar'
    }
    else{
        img.src = 'desligada.jpg'
        botao.innerText = 'Ligar'
    }
}