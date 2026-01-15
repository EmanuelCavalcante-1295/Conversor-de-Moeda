const de = document.getElementById('money1')
const valueDe = de.value;

const moedaAConverter = document.querySelector('.a-converter')
const currency1 = document.querySelector('.currency1')
const currencyValue1 = document.querySelector('.currency-value1')
const valor = document.querySelector('.valor')

const para = document.getElementById('money2')
const valuePara = para.value;

const Convertida = document.querySelector('.convertida')
const currency2 = document.querySelector('.currency2')
const currencyValue2 = document.querySelector('.currency-value2')

async function getRates(base, symbols) {
const url = `https://api.frankfurter.app/latest?base=${base}&symbols=${symbols}`
const response = await fetch(url)
const data = await response.json()
return data.rates[symbols]
}

const rates1 = await getRates("USD", "BRL")
console.log(rates1)
const rates2 = await getRates("BRL", "USD")
console.log(rates2)
const rates3 = await getRates("EUR", "BRL")
console.log(rates3)
const rates4 = await getRates("BRL", "EUR")
console.log(rates4)
const rates5 = await getRates("USD", "EUR")
console.log(rates5)
const rates6 = await getRates("EUR", "USD")
console.log(rates6)

function converter() {

    const valueDe = de.value

    if (valueDe === 'R$') {
        moedaAConverter.src = 'assets/brasil 2-1.png';
        currency1.innerHTML = 'Real'
        currencyValue1.innerHTML = 'R$ ' + valor.value
    }
    else if (valueDe === 'US$') {
        moedaAConverter.src = 'assets/estados-unidos (1) 1.png';
        currency1.innerHTML = 'Dólar'
        currencyValue1.innerHTML = 'US$ ' + valor.value
    }
    else if (valueDe === 'E$') {
        moedaAConverter.src = 'assets/Design sem nome 3.png';
        currency1.innerHTML = 'Euro'
        currencyValue1.innerHTML = 'E$ ' + valor.value
    }

    const valuePara = para.value

    if (valuePara === 'R$') {
        Convertida.src = 'assets/brasil 2-1.png';
        currency2.innerHTML = 'Real'
        currencyValue2.innerHTML = 'R$ ' + valor.value
    }
    else if (valuePara === 'US$') {
        Convertida.src = 'assets/estados-unidos (1) 1.png';
        currency2.innerHTML = 'Dólar'
        currencyValue2.innerHTML = 'US$ ' + valor.value
    }
    else if (valuePara === 'E$') {
        Convertida.src = 'assets/Design sem nome 3.png';
        currency2.innerHTML = 'Euro'
        currencyValue2.innerHTML = 'E$ ' + valor.value
    }
}