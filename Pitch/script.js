let ball = document.querySelector('.ball')
let pitch = document.querySelector('.pitch')
let width = pitch.offsetWidth;
let height = pitch.offsetHeight;
let ball_width = ball.offsetWidth;
let ball_height = ball.offsetHeight;

console.log(width);


function some(event){
  

    let x = event.clientX;
    let y = event.clientY;

    if(x > width - (ball_width / 3)){
        x = width - ball_width / 3;
    }else if(x < ball_width / 3){
        x = ball_width / 3;
    }else if(y > height - ball_height / 3){
        y = height - ball_height / 3;
    }else if(y < ball_height / 3){
        y = ball_height / 3;
    }

    ball.style.left = x - 75 + 'px'
    ball.style.top = y - 75 + 'px'



    


}