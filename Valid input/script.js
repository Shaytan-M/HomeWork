let inp = document.querySelector('.inp');
let val;

console.log(inp);


function notNumber(event){

    val = event.target.value;
    
    
  for (let i = 0; i < val.length; i++) {
    if(+val[i]){
   
      val = val.substring(0, val.length-1)
      event.target.value = val;

      (alert('Імя повинно бути без цифр'))
    }
    
  }






}





