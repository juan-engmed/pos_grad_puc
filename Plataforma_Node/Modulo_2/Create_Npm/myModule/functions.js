const adicao = (x, y) => x + y
const subtracao = (x, y) => x - y
const multiplicacao = (x, y) => x * y

const divisao = (x, y) => {
   if (y === 0){
       return 'Não é possível realizar a divisão por 0'
   }
   return x / y
}

module.exports = {
    adicao,
    subtracao,
    multiplicacao,
    divisao,
}