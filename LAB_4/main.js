const resultadoNoSite = document.querySelector('#resultado')

const btnStart = document.querySelector('#start-game')
btnStart.addEventListener('click', start)

const btnGuess = document.querySelector('#guess-number')
btnGuess.addEventListener('click', guess)

const numeroDoUser = document.querySelector('#numero')

const historico = document.querySelector('#historico')

let numeroAleatorio
let tentativas = 0

function start() {
  numeroAleatorio = Math.floor(Math.random() * 100)

  tentativas = 0

  historico.innerHTML = ''

  resultadoNoSite.textContent = 'Jogo iniciado! Tente adivinhar o número de 0 a 99.'

  document.querySelector('.game-template').style.setProperty('background-color', 'rgb(218, 162, 162)')
}

function guess() {
  const numeroDigitado = Number(numeroDoUser.value)

  if (numeroDoUser.value === '' || numeroDigitado < 0 || numeroDigitado > 99) {
    resultadoNoSite.textContent = 'Digite um número entre 0 e 99.'
    return
  }

  tentativas++

  historico.innerHTML += `${numeroDigitado} - `

  if (numeroDigitado === numeroAleatorio) {
    resultadoNoSite.textContent = `Parabéns! Você acertou com ${tentativas} tentativa(s)!`
    document.querySelector('.game-template').style.setProperty('background-color', 'rgb(218, 162, 162)')
  } else if (numeroDigitado > numeroAleatorio) {
    resultadoNoSite.textContent = 'Você errou! O número é menor. Tente novamente.'
    document.querySelector('.game-template').style.setProperty('background-color', 'red')
  } else if (numeroDigitado < numeroAleatorio) {
    resultadoNoSite.textContent = 'Você errou! O número é maior. Tente novamente.'
    document.querySelector('.game-template').style.setProperty('background-color', 'red')
  }

  numeroDoUser.value = ''
}