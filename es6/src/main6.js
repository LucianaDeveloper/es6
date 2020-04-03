/******************************Aula 06**********************************************/
/* Valores Padrão para os parametros das funções */
/* Função soma que recebe parametro a e b em forma de arrow function */
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());
