/******************************Aula 05**********************************************/
/* Arrow Function */
/* Quando temos callback que é esas passagem de função para dentro de uma outra função então, utilizamos a arrow function que vai dar uma verbosidade menor na escrita de código */
const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: "diego" });  /* Posso chamar direto retornando um objeto, string, se for um numero também. Eu não poderia passar um objeto dentro da chave "{ nome: "diego"}" porque se não, ela será utilizada para o corpo da função então não podemos usar a chave para o objeto, ao não ser que ele vá dentro do return {return { nome: "diego"}}; */
console.log(teste());