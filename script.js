let burgerContainer = document.getElementById('burger-container');
let burger = document.getElementById('nav-button');
let nav = document.querySelector('.nav-lien');

burgerContainer.addEventListener('click', function (event) {

    if(burger.classList.contains('burger-active')){
        burger.classList.remove('burger-active');
        nav.classList.remove('query-nav');
    }else{
        burger.classList.add('burger-active');
        nav.classList.add('query-nav');
    }
});