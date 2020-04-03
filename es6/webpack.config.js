module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"], // meu arquivo principal
  output: { // para qual lugar e arquivo eu devo mandar o código convertido para antes do es6 igual o babel fazia utilizando o bundle.js
    // variavel global -> que se refere ao diretorio do arquivo webpack:
    path: __dirname + "/public", // __dirname = pasta raiz + informar para onde ele deve jogar meu arquivo bundle
    filename: "bundle.js", // o nome do meu arquivo
  },
  devServer: {
    // O caminho para onde ele vai abrir o servidor da nossa aplicação. Geralmente vamos passar o caminho para onde vai ficar nosso arquivo index.html
    contentBase: __dirname + "/public",
  },
  module: {
    rules: [ // propriedade obrigatória que vai dizer como que o webpack deve se comportar quando o usuário estiver tentando importar novos arquivos js. Aqui dentro vamos falar baseado na extensão do arquivo qual loader ele vai ter que utilizar por exemplo, no nosso caso o babel é um loader, ele é uma forma da gente manipular o conteúdo do arquivo e fazer algum tipo de alteração. Então, toda vez que a aplicação importar um novo arquivo JS para dentro do main.js ou para dentro de qualquer outro arquivo, ele vai executar o babel sozinho naquele arquivo então, não vamos precisar do babel executando em background (no nosso terminal).
      {
        test: /\.js$/, // expressão regular
        exclude: /node_modules/, // pedindo para ele excluir o node_modules, porque não quero que o babel execute em nenhum arquivo js que está dentro do meu node_modules
        use: {
          loader: "babel-loader", /* e instalar ele no meu terminal */
        }
      }
    ],
  },
};