// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () => {// Arrow function `ES6`
	if ( window.pageYOffset > 180 ) {// Se a página estiver descida 180pxeis ela faz o código abaixo
		let top = document.querySelector( `.tutop` )
		top.setAttribute( `style`, `animation-name:totop;animation-duration:0.5s` )
		setTimeout(function(){					
			top.setAttribute( `class`, `totop` )
		}  , 500)
	}else {
		let top = document.querySelector( `.totop` )
		top.setAttribute( `style`, `animation-name:tutop;animation-duration:0.5s` )
		setTimeout(function(){		
			top.setAttribute( `class`, `tutop` )
		}  , 500)
	}
}
// Ativa a nossa função
window.addEventListener( `scroll`, Scroll );
