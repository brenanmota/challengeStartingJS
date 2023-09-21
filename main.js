// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert('Hello Word!!!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

const numberOne = 246
const numberTwo = 769

const sum = numberOne + numberTwo
alert(sum)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 'ABC'

if(typeof isNumber == 'number'){
  alert('É um número')
} else {
  alert('Não é um número')
}


//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 'ABC'

if(typeof isString == 'string'){
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = false

if (typeof isBoolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const numberThree = 56
const numberFour = 77

const sub = numberThree - numberFour
alert(sub)


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const mult = numberThree * numberFour
alert(mult)


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = numberOne / numberFour
alert(div)


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const isEvenNumber = 40

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const isOddNumber = 30

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}