// 2.0 Webpack Server
// Um serviço que vai nos disponibilizar uma forma de trabalhar com vários arquivos JS na nossa aplicação (ter varias pastas, arquivos, não só JS, poderei carregar arquivos de imagens, JSON, arquivos CSS tudo através do JS utilizando webpack; todo codigo JS que eu produzir ainda vai ser transpilado/convertido em um unico arquivo bundle.js com todas as informações).
/* de soma para soma as somaFunction pra renomear */
// import { soma as somaFunction, sub } from "./funcoes"; // importando a soma (mantém o mesmo nome de onde criei e exportei minha função) e especificando qual é o arquivo
//import somaFunction from "./soma"; // com o export default eu posso dar qualquer nome para minha função sem precisar usar o mesmo nome que usei no meu arquivo
//import soma, { sub } from "./funcoes"; // depois de export default
/* Ao inves de importar cada uma dessas funções da seguinte forma: import { soma, sub, mult } from "./funcoes"; eu posso declarar como no exemplo abaixo:*/

//console.log(somaFunction(1, 2)); // antes de deixar default
//console.log(soma(1, 2)); export
/* E graças ao webpack (terminal) eu consigo fazer essse tipo de importação acima. */
//console.log(sub(4, 2)); export
import * as funcoes from "./funcoes";

//console.log(funcoes); // ele mostra cada uma das funções que tenho; no console função vira objeto e dentro tenho cada uma das funções que criei lá dentro
console.log(funcoes.soma(1, 2)); 
console.log(funcoes.sub(4, 2)); 
console.log(funcoes.mult(10, 2)); 

