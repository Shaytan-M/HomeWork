"use strict";

fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
  console.log(response);
  return response.json();
}).then(function (value) {
  console.log(value);
});

function getData(url) {
  var response;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.json());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

getData('https://jsonplaceholder.typicode.com/users').then(function (value) {
  printUsers(value);
});

function printUsers(user) {
  user.forEach(function (item) {
    block.innerHTML += "<button value=\"".concat(item.id, "\" onclick=\"printInf(event)\">").concat(item.name, "</button>");
  });
}

function printInf(event) {
  console.log(event.target.value);
  table.innerHTML = '';
  document.querySelector('.info').style.display = 'block';
  getData("https://jsonplaceholder.typicode.com/users/".concat(event.target.value)).then(function (value) {
    console.log(value);

    for (var key in value) {
      table.innerHTML += "<tr><th>".concat(key, "</th><td>").concat(value[key], "</td></tr>");
    }
  });
}