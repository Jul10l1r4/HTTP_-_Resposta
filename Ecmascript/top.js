/* Licença GNU GPLv3
-> Criado por: @jul10l1r4
-> Página: jul10l1r4.github.io
*/
// Verificaremos o browser, como temos um css onde faz o scroll funcionar em todos os browsers, exceto ao google chrome
const up = () => {
if (navigator.userAgent.indexOf("Chrome") > -1){
	window.scroll({
	  top: 2500, 
	  left: 0, 
	  behavior: 'smooth' 
	});
	
}else{
	console.log(`Link desparado`)	
}// porque ele verifica se é o chrome? porque o Jquery é uma lib, que pesa bastante, e nao queremos que nossa aplicaçao
 // venha ser pesada, exceto se isso afetar em nosso designer ou plano, e para nao colocar o chrome foi feito
}
