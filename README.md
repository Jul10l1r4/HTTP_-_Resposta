<!-- # Respostas em forma de imagens 🤘🏿  -->

> [Conheça a API :trollface:](https://jul10l1r4.github.io/HTTP_-_Resposta/)

De uma forma prática e simples, é uma api onde identifica qual o número do erro e gerencia uma imagem de um meme relacionado ao código de erro.

A simplicidade do uso é o mais interessante, a forma de uso é apenas uma linha de exibição de código, dependendo de qual linguagem de programação esteja usando

<!-- ## Como funciona e porque são apenas imagens? -->

Funciona da seguinte forma, uma vez que é configurado uma página de tratamento de erro, ela apenas linka uma imagem com a api relacionada, para fazer isso basta acrescentar a variável, dessa forma que mostro em Node.js:

```ES6
  // Exemplo de resposta em caso de códigos de erro.
  response.write(`<img src="https://jul10l1r4.github.io/HTTP_-_Resposta/img/${códigoDeErro}"`) 
```
Viu? bem simples né, em apenas uma linha de código foi acrescentado até uma imagem relacionada a qualquer tema de erro possível de sua aplicação.

> [Veja em várias linguagens](https://notabug.org/Jul10l1r4/Exemplos-API-http-memes)

São usadas apenas imagens, por motivos de segurança, e as imagens são criptografadas, sendo assim os dados que forem levados, por exemplo em um formulário cujo o alvo esteja fora do ar por muitas pessoas usarem ao mesmo tempo, ele direcionararia para esta página, onde eu mesmo poderia pegar todos os seus dados, po isso utilizamos imagens, nenhuma forma de dados será passada, e isso faz com que você e seus usuários estejam seguros.

<!-- ## É rápido e leve 🍃 -->

O uso dessa api possibilita imagens cada vez trabalhadas para o mínimo de suporte a internet do "user", diminuímos o máximo de forma binária os dados, para que seja rapidamente carregado e tenha sua determinada qualidade.

Todas as imagens possuem `600px` de largura, exceto os gifs que por serem animados possuem um peso um pouco superior as outras e assim diminuímos seus tamanhos para normalizá-las, e assim todas as imagens são leves o suficiente para serem rapidamente carregadas.

O servidor que usamos é um profissional e com suporte superior, é o do próprio github, possui sua determinada estabilidade, e é certeza que não sairá do ar.

<!-- # Esse projeto é livre sob liceça GNU GPL-3 🐏 :fist: -->
 Use, copie, edite e publique conforme queira 💙, não esqueça de citar o projeto onde se baseou 🤹🏾‍. Leia sobre a licença [GPL-3](https://www.gnu.org/licenses/gpl-3.0-standalone.html)
