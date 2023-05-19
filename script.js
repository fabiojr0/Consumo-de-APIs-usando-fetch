const titulo = document.querySelector('span.título')
const ask = document.querySelector('span.ask')
const high = document.querySelector('span.high')
const low = document.querySelector('span.low')

function cotacao(moeda='USD'){

    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`).then(retorno=>{
    return retorno.json()
    }).then(dicionario=>{
       

    if(moeda == 'USD'){
        titulo.innerHTML = `Dólar`
        ask.innerHTML = `R$${dicionario.USDBRL.ask}`
        high.innerHTML = `R$${dicionario.USDBRL.high}`
        low.innerHTML = `R$${dicionario.USDBRL.low}`
    }
    else if(moeda == 'EUR'){
        titulo.innerHTML = `Euro`
        ask.innerHTML = `R$${dicionario.EURBRL.ask}`
        high.innerHTML = `R$${dicionario.EURBRL.high}`
        low.innerHTML = `R$${dicionario.EURBRL.low}`
    }
    else{
        titulo.innerHTML = `Bitcoin`
        ask.innerHTML = `R$${dicionario.BTCBRL.ask}`
        high.innerHTML = `R$${dicionario.BTCBRL.high}`
        low.innerHTML = `R$${dicionario.BTCBRL.low}`
    }
}) 
}
cotacao()

function consultarCep(){
    const cep = document.querySelector('input.cep').value;
    
    if(cep.length !== 8){
        alert('CEP Invalido')
        return
    }
    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data)
        })
    })
}
function mostrarEndereco(dados){
    const resultado = document.querySelector('span.dados');
    if(dados.erro){
        resultado.innerHTML = 'Não foi possível encontrar esse endereço!'
    }
    else{
        resultado.innerHTML = ` <p>${dados.logradouro}
                                <p>${dados.bairro}-${dados.localidade}-${dados.uf}</p>`
    }
}
