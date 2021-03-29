let figur;
let page = document.querySelector('.page')
let color;

function chooesElement(event){
    figur = event.target.value;
  
}

function chooesColor(event){
    color = event.target.value;
    
}

let elem = [];


page.addEventListener('click', function(e){
    
    let left = e.layerX;
    let top = e.layerY;



    if(figur === 'triangle_block'){
        page.innerHTML += `<div class="${figur}"  style=" border-top: 50px solid ${color}; left: ${left}px; top: ${top}px; "> </div>`
    }else{
        page.innerHTML += `<div class="${figur}"  style="background-color: ${color}; left: ${left}px; top: ${top}px; "> </div>`
    }



    
elem = document.querySelectorAll('.page>div');


if(elem.length > 0){
   elem.forEach(item => {
    item.addEventListener('click', function(e){
        e.stopImmediatePropagation()
     })
   })
}


    
})




// let resp = fetch('data.json');

// console.log(resp);


let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json');
xhr.send();
xhr.onload = () => {
    console.log(xhr);
}
xhr.onprogress= (event) => {
console.log(event);
}







