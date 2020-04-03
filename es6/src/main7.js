/* Desestruturação de objetos no JS */

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};
/* Desestruturação para conseguir puxar as informações que quero no meu */
// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);
function mostraNome({ nome, idade }) { /* mostraNome(usuario) */
  console.log(nome, idade); /* Também podemos usar a desestruturação para parametros de funções */
}

mostraNome(usuario);