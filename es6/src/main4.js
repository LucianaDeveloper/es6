/******************************Aula 04*************************************************/
// Operações com Arrays
// Operações em vetores com JS com es6
const arr = [1, 3, 4, 5, 8, 9]; /* Meu vetor */
/* map -> Serve para percorrer o vetor e retornar alguma coisa de dentro. */
/* No map abro () porque é uma função, e o parametro que ela recebe é outra função que recebe cada item aqui dentro. A gente vai poder manipular cada item (sendo eles 1, 3, 4...)  */
const newArr = arr.map(function(item, index){ /* Além do item, podemos pegar o index que é a posição que esse elemento está dentro do vetor */
  return item + index;
  //return item * 2; /* o map percorre todos itens do meu vetor e executa a ação que precisa executar */
});
  console.log(newArr);

  /* Reduce é basicamente uma forma de consumir todo o vetor e transformar em uma unica informação,uma unica variavel, geralmente um numero */
  const sum = arr.reduce(function(total, next) { /* Realizar a soma de todos meus itens acima. Eu recebo o total com o próximo valor. Toda vez que ele executar ele vai pegar o valor do retorno e vai jogar para o total pra próxima função executada */
    return total + next; /* Quando ele executar a 1ª vez o total dele vai ser 0, e o next vai ser 1, então, ele vai jogar o valor dessa operação para o total da segunda iteração ou seja, o total da 2ª iteração vai ser 1 e o next vai ser 3 e assim por diante. Ficaria da seguinte forma: */
    //0
    //1

    //1
    //3

    //4
    //4

    //5
    //5
    
    //6
    //8

    //9
    //9
    // E no final ele faz a soma de cada item +1 em relação a cada item do anterior, e depois fazendo a soma de todos os itens.
  });
  console.log(sum);
  // Criando um filtro para pegar todos numeros que sao pares de dentro do meu array
  const filter = arr.filter(function(item) {/* array.filter com minha function recebendo cada item */
    /* Retorna true se esse item vaie estar no meu novo array, ou false se ele tem que ser filtrado/removido. Então vou retornar só os itens que são divisiveis por 2. Operação por modulo que retorna o diferencial da divisão. Se esse diferencial for igual a zero, isso indica que meu numero é par: */
    return item % 2 === 0;
  });
   console.log(filter);
  // find é utilizado para quando queremos verificar se existe alguma informação dentro do array, ou se conseguimos encontrar essa informação dentro do array
  const find = arr.find(function(item) {/* Buscando no array, recebendo cada item novamente na minha função. 
  Ou seja, quero encontrar se existe alguma opção no meu array e se ele é igual a 4: */
    return item === 4; /* E aqui ele retorna o resultado caso tenha a informação que estou requisitando, caso não, ele apresenta undefined */
  });
   console.log(find);
