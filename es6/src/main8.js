// Operadores rest/spread
// // REST - como o nome diz ele pega o resto das propriedades

// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   empresa: "Rocketseat"
// };
// /* Usando desestruturação e definindo os itens que quero pegar */
// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// // Podemos aplicar o rest operator em vetores
// const arr = [1, 2, 3, 4]; /* Array */
// // Desestruturação
// const [ a, b, ...c ] = arr; /* Ao invés de utilizar um objeto utilizamos um array porque acima é um vetor. Armazeno em uma var a, b, e meu resto será guardado na variavel c e daí passo para um array */

// console.log(a);
// console.log(b);
// console.log(c);

// Rest operator em parametros de funções

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(1, 3));

/* OU ao invés de escrever assim */
/*Utilizamos a partir do reduce para fazer a soma. Ficaria assim: 

function soma(...params) { 
  return params.reduce((total, next) => total + next);
}
*/
function soma(a, b,...params) { /* pego o a, b e só o resto coloco no  */
  return params;/* Aqui ele vai converter os parametros em formato de array. */
}
console.log(soma(1, 3, 4, 6, 5, 8, 9, 7));

// SPREAD Operator
// Diferente do rest que pega o resto de alguma desestruturação ou de alguma passagem de parametros, o spread ele faz o papel de propagar, de repassar as informações de algum objeto ou de um array para outra estrutura de dados.

/* Suponhamos que temos 2 arrays: */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

/* Unindo esses dois arrays */
const arr3 = [...arr1, ...arr2]; /* Ele copia cada um dos itens do meu array */

console.log(arr3);

/* Outro exemplo, é quando quero criar um novo objeto de usuario  com todas as propriedades desse abaixo porém, trocando apenas uma dessas propriedades */
  const usuario1 = {
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
};

  const usuario2 = {...usuario1, nome: "Gabriel"};

  console.log(usuario2);
  
