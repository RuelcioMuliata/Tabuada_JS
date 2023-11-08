let botao = document.getElementById('botao')
botao.addEventListener('click', clicar)

let limpar = document.getElementById('limpar')
limpar.addEventListener('click', reciclar)

var res = document.getElementById('tabuada')

function clicar() {
  let numero = Number(document.getElementById('button').value)
  

  if (numero == '') {
    alert('Coloque um Número abaixo!')
  } else if(numero == 0) {
    
  } else { 
     let constante = 0
     /*outra maneira é limpar antes a tabuada antes de executar o código, que ficaria:
     */
     res.innerHTML = ''
      while (constante <= 9) {
        constante++

        res.innerHTML += `${numero} x ${constante} = ${numero*constante}<br>`
      }
}
}

function reciclar() {
  res.innerHTML = ``
}