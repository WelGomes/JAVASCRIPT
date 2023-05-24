const img = document.getElementById('foto')
const botoes = document.getElementById('botoes')
let coresArray = 0
let intervaloID = null

const botao = (event) =>{
    pararAutomatico()
    sinal[event.target.id]()
} 

const proximaCor =() =>{
    if(coresArray < 2){
        coresArray++
    }
    else{
        coresArray = 0
    }
}

const trocaDeCor = () =>{
    const colors = ['vermelho', 'amarelo', 'verde']
    const color = colors[coresArray]
    sinal[color]()
    proximaCor()
}

const pararAutomatico = () =>{
    clearInterval(intervaloID)
}

const sinal = {
    'vermelho': () => img.src = 'vermelho.jpg',
    'amarelo': () => img.src = 'amarelo.jpg',
    'verde': () => img.src = 'verde.jpg',
    'automatico': () => intervaloID = setInterval(trocaDeCor, 1000),
    'desligar': () => img.src = 'desligado.jpg'
}
botoes.addEventListener('click', botao)