let cell = document.querySelectorAll('.cell')


cell.forEach(function(item){
    item.addEventListener('mouseover', function(e){
        e.target.style.background = 'red'
    })
    item.addEventListener('mouseout', function(e){
        e.target.style.background = 'gray'
    })
})


let txt = document.querySelector('.text');


txt.addEventListener("contextmenu", function(e){
    e.preventDefault()
}, false);


let but = document.querySelector('.but');
let num = document.querySelector('.num_block')

let nums = 0;



but.addEventListener('click', function(e){
    nums++
    num.innerText = nums;
})