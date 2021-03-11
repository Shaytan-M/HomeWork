"use strict";

var cell = document.querySelectorAll('.cell');
cell.forEach(function (item) {
  item.addEventListener('mouseover', function (e) {
    e.target.style.background = 'red';
  });
  item.addEventListener('mouseout', function (e) {
    e.target.style.background = 'gray';
  });
});
var txt = document.querySelector('.text');
txt.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);
var but = document.querySelector('.but');
var num = document.querySelector('.num_block');
var nums = 0;
but.addEventListener('click', function (e) {
  nums++;
  num.innerText = nums;
});