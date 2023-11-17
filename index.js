var elementosDuvida = document.querySelectorAll('.duvida') //pegando todos os elementos

elementosDuvida.forEach(function (duvida){ 
duvida.addEventListener('click', function(){
    duvida.classList.toggle('ativa')
    

})
})

//function nome (argumento){
    //conteudo da função
//}


