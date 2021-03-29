"use strict";

var offset = 0;
var sliderLine = document.querySelector('.slider-line');
var buttonNext = document.querySelector('.butNext');
var buttonPrev = document.querySelector('.butPrev');
var skipP = document.querySelector('.skipP');
var skipN = document.querySelector('.skipN');
var image = document.querySelector('.image');
console.log(sliderLine.offsetWidth);
sliderLine.style.right = offset;
skipP.addEventListener('click', function () {
  offset += -780;

  if (offset < 0) {
    offset = 780;
  }

  sliderLine.style.right = offset + 'px';
});
skipN.addEventListener('click', function () {
  offset += 780;

  if (offset > 780) {
    offset = 0;
  }

  sliderLine.style.right = offset + 'px';
});
buttonNext.addEventListener('click', function () {
  offset += 260;

  if (offset > 780) {
    offset = 0;
  }

  sliderLine.style.right = offset + 'px';
});
buttonPrev.addEventListener('click', function () {
  offset += -260;

  if (offset < 0) {
    offset = 780;
  }

  sliderLine.style.right = offset + 'px';
});