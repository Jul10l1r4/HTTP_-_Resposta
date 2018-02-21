/* Licença GNU GPLv3
-> Criado por: @jul10l1r4
-> Página: jul10l1r4.github.io
*/
// Verificaremos o browser, como temos um css onde faz o scroll funcionar em todos os browsers, exceto ao google chrome
const up = () => {
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth' 
	});
 // venha ser pesada, exceto se isso afetar em nosso designer ou plano, e para nao colocar o chrome foi feito
}// Chamará pós clicar no tutop que é o botao ao topo
document.querySelector( `.totop` ).addEventListener( `click`, up );
