"use strict";

function onSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements[0].value);
  var d = new Date();
  var name = document.querySelector('.name');
  var comment = document.querySelector('.comment_inp');
  var s = document.querySelector('.wrapper');
  s.innerHTML += "<div class=\"block\">\n    <h2 class=\"name_user\">".concat(event.target.elements[0].value, "</h2>\n    <p class=\"time\">").concat(d.toLocaleDateString(), "</p>\n    <p class=\"comment\">").concat(event.target.elements[1].value, "</p>\n   </div> <hr>");
  name.value = '';
  comment.value = '';
}