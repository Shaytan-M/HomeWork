let obj = {};
let slid_width = 0 ;

for (const item of location.search.slice(1).split('&')) {
    let pair = item.split('=')

    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])


}





let xhr = new XMLHttpRequest();


xhr.open('GET',`https://vra-back-vzlhq.ondigitalocean.app/items/${obj.id}`);

xhr.send();



xhr.onload = () => {
    
    printSlider(JSON.parse(xhr.response))



    

    let slid = document.querySelector('#slider')
    slid_width = slid.offsetWidth;

    

   
}




function printSlider(item){
   
    block.innerHTML += `<div class="main_img_wrapper"><img src="${item.main_photo.url}"></div>  <div class="info_wrapper">

    <div class="title">
    <h3>${item.title.aim.title}</h3>
    <ul id="task">
    </ul>
    </div>
    <div class="main_info">
    <p>Автор: <span>${item.author}</span></p>
    <p>Клієнт: <span>${item.client}</span></p>
    <p>Дата: <span>${item.date}</span></p>
    </div>
    
    </div>`

    item.title.task.forEach(item => {
        task.innerHTML += `<li>${item}</li>`
    });




    item.photos.forEach(item => {
        
        slider.innerHTML += `<img class="slide_img" src="${item.url}">`
    })
  

}

let left = 0;

function next(event){


    if(left <= -slid_width + 500){
        left = 500;
    }


    left += -500;
    slider.style.left = left + 'px';

    

    
}




function res(event){


    if(left >= 0){
        left = -slid_width 
    }


    left += 500;
    slider.style.left = left + 'px';

    
    
}









