const calcular = document.getElementById('calcular')
calcular.addEventListener('click', imc)
function imc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    const calculoIMC = peso / (altura * altura)
    const resposta = document.getElementById('resultado')
    if(nome == '' || altura == '' || peso == ''){
        window.alert('[ERRO] Você não prencheu os campos!')
    }
    else{
        if(calculoIMC < 18.5){
            resposta.innerHTML = `${nome} seu IMC é de ${calculoIMC.toFixed(2)} e você está abaixo do peso`
        }
        else if(calculoIMC < 24.9){
            resposta.innerHTML = `${nome} seu IMC é de ${calculoIMC.toFixed(2)} e você está no peso ideal, parabéns`
        }
        else if(calculoIMC < 29.9){
            resposta.innerHTML = `${nome} seu IMC é de ${calculoIMC.toFixed(2)} e você está levemente acima do peso`
        }
        else if(calculoIMC < 34.9){
            resposta.innerHTML = `${nome} seu IMC é de ${calculoIMC.toFixed(2)} e você está com obesidade grau I`
        }
        else if(calculoIMC < 39.9){
            resposta.innerHTML = `${nome} seu IMC é de ${calculoIMC.toFixed(2)} e você esta com obesidade grau II(severa)` 
        }
        else{
            resposta.innerHTML = `${nome} seu IMC é de ${calculoIMC.toFixed(2)} e você está com obesidade grau III(mórbida)`
        }
    }
}