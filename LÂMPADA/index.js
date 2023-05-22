//Estou buscando os DOM 
const img = document.getElementById('lamp')
const ligarLampada = document.getElementById('ligar')
const desligarLampada = document.getElementById('desligar')
const resetarLampada = document.getElementById('resetar')

//Estou dando uma função à elas
ligarLampada.addEventListener('click', ligar)
desligarLampada.addEventListener('click', desligar)
resetarLampada.addEventListener('click', resetar)
img.addEventListener('mouseover', ligarNovamente)
img.addEventListener('mouseleave', desligarNovamente)
img.addEventListener('dblclick', quebrar)

//Função para caso a lâmpada esteja quebrada
function lampadaQuebrada(){
    return img.src.indexOf ('quebrada') > -1
}

//Criei uma função para elas
function ligar(){
    if(!lampadaQuebrada()){
        img.src = 'ligada.jpg'
    }
}

function ligarNovamente(){
    if(!lampadaQuebrada()){
        img.src = 'ligada.jpg'
    }
}

function desligar(){
    if(!lampadaQuebrada()){
        img.src =  'desligada.jpg'
    }
}

function desligarNovamente(){
    if(!lampadaQuebrada()){
       img.src = 'desligada.jpg' 
    }
}

function quebrar(){
    img.src = 'quebrada.jpg'
}

function resetar(){
    img.src = 'desligada.jpg'
}
