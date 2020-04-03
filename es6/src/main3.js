/******************************Aula 03***********************************************/
// Const e Let
// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }

// console.log(Matematica.soma(1, 2));
/* Constantes e variáveis de escopo */
// Mutação de uma constante
const usuario = {nome: "Diego"};

usuario.nome = "Cleiton";

console.log(usuario);
/* Mutação é quando trabalhamos com o mesmo formato do objeto, com as mesmas informações mas, alteramos valores dentro do objeto. Mutação é possível dentro de uma constante */
// Variaveis de escopo
function teste(x) {
  let y = 2;

  if (x > 5){
    let y = 4;

    console.log(x, y);
  }
}
(teste(10));
/* Resultado 10 2
Ele enxergou o x e o y, porque dentro de cada chave a gente dá o nome de escopo dentro do JS. Então se tentassemos dar console.log(y); abaixo da função daria que o y nao esta definido, porque o escopo do console.log não é o mesmo da variavel y então, ele nao vai enxergar. Porem com o nosso let se quisermos reatribuir o valor desse y dentro do segundo escopo, isso seria possível. Então podemos redefinir o nome da mesma variavel dentro do if e ele apresentaria isso normalmente. */