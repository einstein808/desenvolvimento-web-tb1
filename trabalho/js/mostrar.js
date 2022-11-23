function menuShow(){
    let menuMobile = document.querySelector('.text-mensagem-fix');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');

        document.querySelector('.logo-ham').src ="/img/balao-de-bate-papo.png"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.logo-ham').src ='/img/botao-x.png';


    }
    
}