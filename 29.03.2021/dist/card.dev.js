"use strict";

var obj = {};
var slid_width = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = location.search.slice(1).split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    var pair = item.split('=');
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var xhr = new XMLHttpRequest();
xhr.open('GET', "https://vra-back-vzlhq.ondigitalocean.app/items/".concat(obj.id));
xhr.send();

xhr.onload = function () {
  printSlider(JSON.parse(xhr.response));
  var slid = document.querySelector('#slider');
  slid_width = slid.offsetWidth;
};

function printSlider(item) {
  block.innerHTML += "<div class=\"main_img_wrapper\"><img src=\"".concat(item.main_photo.url, "\"></div>  <div class=\"info_wrapper\">\n\n    <div class=\"title\">\n    <h3>").concat(item.title.aim.title, "</h3>\n    <ul id=\"task\">\n    </ul>\n    </div>\n    <div class=\"main_info\">\n    <p>\u0410\u0432\u0442\u043E\u0440: <span>").concat(item.author, "</span></p>\n    <p>\u041A\u043B\u0456\u0454\u043D\u0442: <span>").concat(item.client, "</span></p>\n    <p>\u0414\u0430\u0442\u0430: <span>").concat(item.date, "</span></p>\n    </div>\n    \n    </div>");
  item.title.task.forEach(function (item) {
    task.innerHTML += "<li>".concat(item, "</li>");
  });
  item.photos.forEach(function (item) {
    slider.innerHTML += "<img class=\"slide_img\" src=\"".concat(item.url, "\">");
  });
}

var left = 0;

function next(event) {
  if (left <= -slid_width + 500) {
    left = 500;
  }

  left += -500;
  slider.style.left = left + 'px';
}

function res(event) {
  if (left >= 0) {
    left = -slid_width;
  }

  left += 500;
  slider.style.left = left + 'px';
}