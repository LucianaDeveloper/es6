/*********************************Aula 02*********************************************/
class TodoList {
  constructor() {
    this.todos = [];
  }
  static addTodo() { /* Quando definimos um método estático, ele não enxerga o restante da classe então, ele não vai enxergar o thi.todos... Toda vez que tivermos esse método estático ele é basicamente para passarmos alguma informação para ele, e ele retornar outra informação independente do restante da classe. Normalmente quando temos static, nem temos constructor, é só uma classe para ajudar a fazer algumas coisas. Como no exemplo abaixo ao asterisco*/
    this.todos.push("Novo todo");
    console.log(this.todos);

  }
}

TodoList.addTodo();