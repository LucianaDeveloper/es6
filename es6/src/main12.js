// 3.0 Async/await
// Uma função que retorna minha promise. E nessa promise usando arrown fucntion eu pego o resolve e reject e retorno alguma coisa
const minhaPromise = () => new Promise((resolve, reject) => {
  // Chamando meu resolve passando ok depois de 2seg
  setTimeout(() => { resolve("OK") }, 2000); // Criação de uma promise comum
});
// /* Esse é o efeito da promise, conseguimos trabalhar com esse delay, com esse assincronismo dentro do JS*/
// // minhaPromise()
// //   .then(response => { // response pra pegar o resultado
// //   console.log(response);  
// // });/*
// // .catch(err => {}); a partir do es8 eu trabalho com isso de forma mais enxuta: */
// async function executaPromise() { /* Quando criamos uma async function automaticamente essa função vira uma promise */
//   //const response = await minhaPromise();
//   /* Dessa forma ao inves de usar callback, usar cascata posso usar awaits um em baixo do outro. Sendo cada uma executada linha por linha respectivamente. */
//   console.log(await minhaPromise());  
//   console.log(await minhaPromise());  
//   console.log(await minhaPromise());  
// }
// //await executaPromise(); nunca podemos utilizar um await na frente de uma promise se não estiver dentro de uma função com async. Nesse exemplo mesmo daria erro pois estaria sendo executado fora.
// //executaPromise();
// /* Executando o mesmo acima com => */
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();