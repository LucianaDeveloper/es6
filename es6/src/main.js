import axios from "axios";

class Api {// Quero transformar esse método estático também em uma função assincrona
  static async getUserInfo(username){/* Usando assync await unindo com uma classe estática, isso poderia também ser uma função comum mas, unimos isso para ver como funciona dentro da classe para fazermos essa requisição a nossa api */
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      // O axios.get todas as funções do axios, retornam promises e por isso que consigo trabalhar com a sintaxe do async await
      console.log(response);  
    } catch (err) { // se ele não existir ele cai no catch e apresenta essa mensagem de erro caso o user estiver errado
        console.warn("Erro na API");  
    }
    /* Antes: testei ele sem o try e catch */
    //console.log(response);    
  }
}
Api.getUserInfo("diego3g");
Api.getUserInfo("diego3gasdsa");