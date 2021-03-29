let offset = 0;
const sliderLine  = document.querySelector('.slider-line');

let buttonNext = document.querySelector('.butNext');
let buttonPrev = document.querySelector('.butPrev');
let skipP = document.querySelector('.skipP');
let skipN = document.querySelector('.skipN');
let image = document.querySelector('.image');


console.log(sliderLine.offsetWidth);



sliderLine.style.right = offset;


skipP.addEventListener('click', function(){
    offset += -780;
    if(offset < 0){
        offset = 780;
    }
    sliderLine.style.right = offset + 'px';
})

skipN.addEventListener('click', function(){
    offset += 780;
    if(offset > 780){
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
})

buttonNext.addEventListener('click', function(){
   
  offset += 260
  if(offset > 780){
      offset = 0;
  }
 sliderLine.style.right = offset + 'px';
});

buttonPrev.addEventListener('click', function(){
    offset += -260
    if(offset < 0){
        offset = 780;
    }
   sliderLine.style.right = offset + 'px';
  });


