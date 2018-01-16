# Respostas em forma de imagens 🤘🏿 

De uma forma prática e simples, é uma api onde identifica qual o número do erro e gerencia uma imagem de um meme relacionado ao código de erro.

A simplicidade do uso é o mais interessante, a forma de uso é apenas uma linha de exibição de código, dependendo de qual linguagem de programação esteja usando

## Como funciona e porque são apenas imagens?

Funciona da seguinte forma, uma vez que é configurado uma página de tratamento de erro, ela apenas linka uma imagem com a api relacionada, para fazer isso basta acrescentar a variável, dessa forma que mostro em Node.js:

```ES6
  // Exemplo de resposta em caso de códigos de erro
  response.write(`<img src="https://jul10l1r4.github.io/HTTP_-_Resposta/img/${códigoDeErro}"`) 
```
Viu? bem simples né, em apenas uma linha de código foi acrescentado até uma imagem relacionada a qualquer tema de erro possível de sua aplicação.
