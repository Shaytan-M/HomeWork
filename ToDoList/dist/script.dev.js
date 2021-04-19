"use strict";

function save(dataInput) {
  dataInput.preventDefault();

  if (editable) {
    putData('https://testinapi.herokuapp.com/todos/', {
      isDone: check.checked ? true : false,
      id: editable.id,
      title: dataInput.target.enter.value
    }).then(function (res) {
      editable = null;
      sub.value = 'Save';
      printInfo();
    });
  } else {
    postTodo('https://testinapi.herokuapp.com/todos', {
      isDone: check.checked ? true : false,
      title: dataInput.target.enter.value
    }).then(function (response) {
      printInfo();
    });
  }

  enter.value = '';
}

function printInfo() {
  getData('https://testinapi.herokuapp.com/todos').then(function (data) {
    ToDoList.innerHTML = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        ToDoList.innerHTML += "<div style=\"background-color: ".concat(item.isDone ? 'gray' : '', " ;\" class=\"row\"><form id=").concat(item.id, "><div name=\"left\"><p>").concat(item.isDone, "</p> <p class=\"title\" name=\"title\">").concat(item.title, "</p></div> <div><button onclick=\"editInput(event)\"> Edit</button>  <button onclick=\"deleteInput(event)\"> Delete</button> </div></form></div>");
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
  });
}

printInfo();

function getData(url) {
  var resp;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          resp = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(resp.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function postTodo(url) {
  var data,
      response,
      _args2 = arguments;
  return regeneratorRuntime.async(function postTodo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 3:
          response = _context2.sent;

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function deleteInput(dataInput) {
  dataInput.preventDefault();
  var id = dataInput.target.parentNode.parentNode.id;
  fetch("https://testinapi.herokuapp.com/todos/".concat(id), {
    method: 'DELETE'
  }).then(function (data) {
    printInfo();
  });
}

var editable;

function editInput(dataInput) {
  dataInput.preventDefault();
  var id = dataInput.target.parentNode.parentNode.id;
  getData("https://testinapi.herokuapp.com/todos/".concat(id)).then(function (data) {
    enter.value = data.title;
    sub.value = 'Edit';
    editable = data;
  });
}

function putData(url, data) {
  var response;
  return regeneratorRuntime.async(function putData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch(url + data.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          return _context3.abrupt("return", _context3.sent);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}