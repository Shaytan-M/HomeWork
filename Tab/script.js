let head = document.querySelector('header');


let butt = document.querySelector('#but')



window.addEventListener('scroll', function(){
    let scrollPos = window.scrollY;



    if(scrollPos > 400){
        head.classList.add('red')
    }else {
        head.classList.remove('red')
    }
});


butt.addEventListener('click', function(){
    console.log('clicked');
});