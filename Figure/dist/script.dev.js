"use strict";

var figur;
var page = document.querySelector('.page');
var color;

function chooesElement(event) {
  figur = event.target.value;
}

function chooesColor(event) {
  color = event.target.value;
}

var elem = [];
page.addEventListener('click', function (e) {
  var left = e.layerX;
  var top = e.layerY;

  if (figur === 'triangle_block') {
    page.innerHTML += "<div class=\"".concat(figur, "\"  style=\" border-top: 50px solid ").concat(color, "; left: ").concat(left, "px; top: ").concat(top, "px; \"> </div>");
  } else {
    page.innerHTML += "<div class=\"".concat(figur, "\"  style=\"background-color: ").concat(color, "; left: ").concat(left, "px; top: ").concat(top, "px; \"> </div>");
  }

  elem = document.querySelectorAll('.page>div');

  if (elem.length > 0) {
    elem.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.stopImmediatePropagation();
      });
    });
  }
}); // let resp = fetch('data.json');
// console.log(resp);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.send();

xhr.onload = function () {
  console.log(xhr);
};

xhr.onprogress = function (event) {
  console.log(event);
};