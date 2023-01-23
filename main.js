function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
   
    if(elemento != null && elemento.localName === 'audio'){
    elemento.play();
    }
    else{
        alert("Elemento não encontrado oi seletor inválido! ")
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


/* Exemplo utilizando o while
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;
}*/

//Exemplo de laço com o uso do for()

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if( evento.code === 'Space' || evento.code === 'Enter' ){
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }



}