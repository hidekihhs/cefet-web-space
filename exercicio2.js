
// Este arquivo ainda não está incluído no arquivo HTML


const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let slider = function(Index){

	let slide = document.getElementById('slide')
	let srcImage  = servidorDasImagens + todasAsImagens[Index] ;
	slide.src = srcImage;
};


let index = 0;
slider(index);

let prox = document.getElementById('proximo');
	prox.addEventListener('click', function(e){
		index = index + 1;
		if( index == 5){
			index =0;
		}
		slider(index);
	});


let ant = document.getElementById('anterior');
	ant.addEventListener('click', function(e){
		index = index - 1;
		if( index == -1){
			index =4;
		}
		slider(index);
	});






