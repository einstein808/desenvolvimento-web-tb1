var tabela = document.querySelector('table');
tabela.addEventListener("click", function(event){
  var elementoClicado= event.target
  if(elementoClicado.classList.contains("btn_excluir")){
    var elementoPai = elementoClicado.parentNode
    var elementoPai2 = elementoPai.parentNode
    elementoPai2.remove();
  }
  
})