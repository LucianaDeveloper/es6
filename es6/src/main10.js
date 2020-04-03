// Object Short Syntax
const nome = "Luciana";
const idade = 23;

const usuario = {// Anteriormente eu teria que declarar: "nome: nome," e assim por diante nos outros itens mas, agora eu posso fazer do modo abaixo que ele vai ler normalmente
  nome, //Sintaxe curta de objeto no ES6
  idade, //Sintaxe curta de objeto no ES6
  empresa: "Houpa",
};

console.log(usuario);
