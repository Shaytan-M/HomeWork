// let currenNumber = 0;


// window.onload = () => {

//     number.innerHTML = currenNumber
   
//     up.onclick = () => {
//         if(currenNumber > 99){
//             currenNumber = 99;
//         }
//         currenNumber++;
//         number.innerHTML = currenNumber
//     }

//     down.onclick = () => {
//         if(currenNumber < 1){
//             currenNumber = 1;
//         }
//         currenNumber--;
//         number.innerHTML = currenNumber

//     }


//     sub.onclick = () => {
//         if(currenNumber == 0){
//             document.querySelector('.block').style.background = 'red';
//         }
//     }


//     window.addEventListener('beforeunload', (event) => {
//         event.preventDefault();
//         event.returnValue = '';
//       });


// }


function s() 
{
    col = Math.round(Math.random() * (255.0 - 20) + 20 );
    r = col.toString(16);
    col = Math.round(Math.random() * (255.0 - 20) + 20);
    g=col.toString(16);
    col = Math.round(Math.random() * (255.0 - 20) + 20);
    d=col.toString(16);
    col=r+g+d;
    return col;
    }

    




// window.onload = () => {

//    butt.onclick = () => {
//     block.innerHTML += `<div  class='color_block' style="background-color: 
//     #${s()} ;"></div>`
//    }



   

// }






 


(function() {
  
     
let p = document.getElementById('butt');

let block = document.getElementById('block')

    
   p.addEventListener('click', function(){
    block.innerHTML += `<div onclick="cl(event)" class='color_block' style="background-color: 
    #${s()} ;"></div>`;
   });


   
})();


function cl(event){
    console.log(event);
    console.log(event.target);
    event.target.remove()
  
}












