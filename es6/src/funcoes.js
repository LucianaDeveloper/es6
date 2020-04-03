// export default -> Cada arquivo só pode ter 1. É o export que é por padrão quando a gente importa aquele arquivo. Muito utilizado com react, view ou  bibliotecas front-end, que temos uma classe ou função por arquivo, e assim por diante (exemplo soma.js).

// export default function soma(a, b) { //  Eu posso no mesmo arquivo ter 1 export default e ter outros exports - de export function soma para default -.
//   return a + b;
// }
export function soma(a, b) { // criei minha função e exportei para meu main.js onde chamo ela
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mult(a, b) {
  return a * b;
}