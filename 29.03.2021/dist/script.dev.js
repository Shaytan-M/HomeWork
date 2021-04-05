"use strict";

var xhr = new XMLHttpRequest();
var block = document.querySelector('.block');
var arr; // fetch('data.json')
// .then((response) => {
//    return response.json();
// })
// .then((data) => {
//     console.log(data);
// })

xhr.open('GET', 'https://vra-back-vzlhq.ondigitalocean.app/items');
xhr.send();

xhr.onload = function () {
  arr = JSON.parse(xhr.response);
  arr.forEach(function (item) {
    console.log(item);
    console.log(item.Link);
    block.innerHTML += "<div class=\"item_wrapper\" onclick=\"goToCard(event, '".concat(item.Link, "')\"><div class=\"img\"><img src=\"").concat(item.main_photo.url, "\"></div> <h3>").concat(item.client, "</h3></div>");
  });
};

function goToCard(e, id) {
  console.log(id);
  location = "/card.html?id=".concat(id);
}