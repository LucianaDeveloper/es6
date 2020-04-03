/**************************Aula 01****************************************************/
/* 1.0 Feature de Classe */
/* Herança */
class List {
  constructor() { /* Armazena um array chamado data */
    this.data = [];
  }

add(data) {/* coloco a info que recebo meu add */
  this.data.push(data); /* data porque é a info que recebo no add */
  console.log(this.data);
  
  }
}
// Essa classe, vai começar a extender essa lista acima
class TodoList extends List { 
  //constructor() { /* Método que vai ser executado toda vez que instanciar uma nova classe, ou objeto a partir dessa classe. Podemos fazer ações que disparam toda vez que um objeto for criado, ou iniciar variáveis */
  //  this.todos = [];// array vazio
  //}
  // Criando novo método
  //addTodo() {/* Sintaxe bem menor que aquela de function. Aqui dentro tenho acesso ao this., todos, entao faço this.todos.push pra adicionar um novo item no final toda vez que insiro um Novo ToDo  */
  //  this.todos.push("Novo todo");
  //  console.log(this.todos);
  //}
  /* Caso eu queira que na minha herança, na classe que herda as propriedades da Lista, eu queira adicionar alguma informação adicional, por exemplo, o nome de algum usuário. Então, quando uso o método constructor numa classe que herda outra classe, chamar a classe pai, o método constructor da classe pai com a propriedade chamada super. */
  constructor() { // método constructor
    super(); // chamando classe pai

    this.usuario = "Diego"; // recebendo uma informação
  }
  // Adicionar novos métodos
  mostraUsuario() {
    console.log(this.usuario);
  }
}
/* Instanciar minha classe. Criando uma variavel que vai armazenar minha nova ToDoList*/
const MinhaLista = new TodoList();// Definindo var que recebe minha TodoList
 /* Pegando o elemento pelo id executando o evento de clique e recebe uma nova função que vai executar MinhaLista. addTodo */
document.getElementById('novotodo').onclick = function() {
  MinhaLista.add("Novo Todo");//Chamando a função add no lugar de addTodo já que desabilitei as opções acima
}

MinhaLista.mostraUsuario();