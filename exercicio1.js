// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let x = document.getElementsByClassName('botao-expandir-retrair');
for (let i = x.length - 1; i >= 0; i--) {
	x[i].addEventListener('click', function(e){
		let p = this.parentNode;
		if(p.classList.contains('expandido')){
			p.classList.remove('expandido');
		}else {
			p.classList.add('expandido');
		}
	});
}
