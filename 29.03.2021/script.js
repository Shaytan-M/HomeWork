let xhr = new XMLHttpRequest();
let block = document.querySelector('.block')
let arr;





// fetch('data.json')
// .then((response) => {
//    return response.json();
// })
// .then((data) => {
//     console.log(data);
// })


xhr.open('GET', 'https://vra-back-vzlhq.ondigitalocean.app/items');




xhr.send();



xhr.onload = () => {
    arr = JSON.parse(xhr.response);

    



    arr.forEach(item => {
        console.log(item);
        console.log(item.Link);

      
        block.innerHTML += `<div class="item_wrapper" onclick="goToCard(event, '${item.Link}')"><div class="img"><img src="${item.main_photo.url}"></div> <h3>${item.client}</h3></div>`
        
        
    });





    


   
}




function goToCard(e, id){
    
    console.log(id);

    location = `/card.html?id=${id}`

}


