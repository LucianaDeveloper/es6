import api from "./api"; /* Sem esse caminho "./" ele buscaria no node_modules então, eu tenho que informar o caminho relativo ao meu arquivo */

/* Estruturas e estilos */
class App { // classe
  constructor() { // método
    this.repositories = []; // Array - inicializar variavel dentro de uma propriedade da minha classe, que vai ser uma array que vai guardar toda minha lista de repositórios que eu buscar do github
    this.formEl = document.getElementById("repo-form"); // Referência ao meu elemento do form
    this.inputEl = document.querySelector("input[name=repository]"); // Após import minha api vou referenciar meu input para conseguir pegar o valor dele (name=repository peguei do meu index)
    this.listEl = document.getElementById("repo-list"); // Referência ao id da minha ul

    this.registerHandlers();
  }

  registerHandlers() { //podia ser qqr nome. Ela vai registrar os eventos
    // O 1º evento que quero pegar é quando o user der um submit. Com o registerHandlers vou ouvir esse evento
    this.formEl.onsubmit = event => this.addRepository(event);
  }/* this.addRepository porque estamos referenciando a mesma classe */

  // Para gerar mensagem de carregando quando minha página estiver loading
  setLoading( loading = true) { // funcionalidade de parametro padrão ou seja, mantenho true
    if (loading === true) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando..."));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl); // Adicionar esse elemento dentro do nosso form
    } else {
      document.getElementById("loading").remove();
    }
  }

  // serve para adicionar o repositorio e onde (event) vou receber esse evento
  async addRepository(event) { // adicionei o async apos importar a api aqui dentro
    event.preventDefault(); // com o preventDefault não vou deixar o form ter aquele funcionamento comum de HTML de recarregar a página, enviar o método get/post ou qqr coisa do tipo. Ele vai prevenir que isso aconteça...*

    const repoInput = this.inputEl.value; // Pegando valor do meu input e ver se tem algo escrito nele
    // Se o valor for igual a zero, se não tiver nada escrito dentro, se o tamanho do texto for 0 vou dar um return, porque com o return faz com que a função pare de executar por aqui (isso independente do que você retorne)
      if (repoInput.length === 0)
        return;

        this.setLoading(); /* Antes de fazer minha requisição  a api já posso chamar ele aqui. Não preciso definir como true porque já o fiz acima e desabilitar ele abaixo */
        
      try {
      // Caso ele não entrou nesse return, fazemos uma requisição a nossa api (usamos crase para usar o conceito de template literals):
      const response = await api.get(`/repos/${repoInput}`);
      //console.log(response); // para ver se está chegando algo
      // Definindo array que busca esses itens, tudo isso do response.data, usando desestruturação para não ter que gerar muito código para puxar essas informações lá dentro
      const { name, description, html_url, owner: { avatar_url } } = response.data;
         
    //*... Já o addRepository vai adicionar um novo repositorio dentro do meu array. Então farei isso de forma estática:
    this.repositories.push({
      // object short sintaxe
      name, //rocketseat.com.br
      description, //: "Tire a sua ideia do papel e dê vida a sua startup.",
      avatar_url, //: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url, //: "https://github.com/Rocketseat",
    });

    // Limpa a barra de busca após meu input
    this.inputEl.value = "";

    //console.log(this.repositories); // depois que chamei minha lista adicionei meu método render
    this.render();
    } catch (err) {
      alert("O repositório não existe! Talquei?");
    } // O try e catch gera uma mensagem de erro caso não exista algum repositório
    this.setLoading(false); // e desabilitar a info de loading
  }
  render() { // Ele vai apagar todo conteúdo da minha lista e renderizar do zero. Ele vai percorrer todo o array, mostrando os repositórios lá dentro. Então vou declarar que ele apague essas info:
    this.listEl.innerHTML = "";
    /* Bem similar ao map, só que o map retorna o resultado que temos dentro dele. Uso o map serve para quando quero alterar o array de alguma forma então, digamos que quero percorrer cada posição do array e retornar ela multiplicada por 2 por exemplo. Já o forEach ele só percorre, ele não faz alterações no array por conta própria */
    // Recebendo cada repositório e criar  e renderizar os elementos em tela
    this.repositories.forEach(repo => {
      // criando elemento de imagem para ficar reconhecida dentro deste escopo
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);
      // criando elemento do titulo
      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl); // Jogo essas informações na minha ul
    });

  }
}
// Instanciando minha classe para ela rodar no console.log
new App(); // const MeuApp = new App(); -> como não preciso armazenar essa classe em nenhuma variavel, posso declarar dessa forma que ele vai executar minha classe sem nenhum problema