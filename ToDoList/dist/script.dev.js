"use strict";

function save(dataInput) {
  dataInput.preventDefault();

  if (editable) {
    if (currentFile) {
      postFile(currentFile).then(function (resp) {
        console.log(resp);
        fileId = resp[0].id;
        putData('https://testinapi.herokuapp.com/todos/', {
          id: editable.id,
          title: dataInput.target.enter.value,
          photo: fileId
        }).then(function (res) {
          editable = null;
          sub.value = 'Save';
          printInfo();
        });
        enter.value = '';
        document.querySelector('.file_img').style['background'] = "url('none')";
      });
    } else {
      putData('https://testinapi.herokuapp.com/todos/', {
        id: editable.id,
        title: dataInput.target.enter.value
      }).then(function (res) {
        editable = null;
        sub.value = 'Save';
        printInfo();
        enter.value = '';
      });
    }
  } else {
    var _fileId;

    if (currentFile) {
      postFile(currentFile).then(function (resp) {
        console.log(resp);
        _fileId = resp[0].id;
        postTodo('https://testinapi.herokuapp.com/todos', {
          title: dataInput.target.enter.value,
          photo: _fileId
        }).then(function (response) {
          printInfo();
        });
        enter.value = '';
        document.querySelector('.file_img').style['background'] = "url('none')";
      });
    } else {
      postTodo('https://testinapi.herokuapp.com/todos', {
        title: dataInput.target.enter.value
      }).then(function (response) {
        printInfo();
        enter.value = '';
      });
    }
  }
}

var loader = document.querySelector('.load');

function printInfo() {
  loader.style.display = 'block';
  ToDoList.innerHTML = '';
  getData('https://testinapi.herokuapp.com/todos').then(function (data) {
    loader.style.display = 'none';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        ToDoList.innerHTML += "<div style=\"background-color: ".concat(item.isDone ? 'gray' : '', " ;\" class=\"row\"><form id=").concat(item.id, "><img src=\"").concat(item.photo ? 'https://testinapi.herokuapp.com' + item.photo.url : 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg', "\" id=\"img\"><div name=\"left\"> <p class=\"title\" name=\"title\">").concat(item.title, "</p></div> <div><button onclick=\"editInput(event)\">&#9997</button> <button onclick=\"deleteInput(event)\" >&#10006</button> </div></form></div>");
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
  console.log();
  var id = dataInput.target.parentNode.parentNode.id;
  getData("https://testinapi.herokuapp.com/todos/".concat(id)).then(function (data) {
    console.log(data);
    var labelFile = document.querySelector('.file_img');
    labelFile.style['background-image'] = "url('".concat(data.photo ? 'https://testinapi.herokuapp.com' + data.photo.url : '', "')");
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

var apiUrlUpload = 'https://testinapi.herokuapp.com/upload';

function postFile(file) {
  var formData, resp;
  return regeneratorRuntime.async(function postFile$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          formData = new FormData();
          formData.append('files', file);
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(fetch(apiUrlUpload, {
            method: 'POST',
            body: formData
          }));

        case 5:
          resp = _context4.sent;
          _context4.next = 8;
          return regeneratorRuntime.awrap(resp.json());

        case 8:
          return _context4.abrupt("return", _context4.sent);

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          console.log(error);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 11]]);
}

var currentFile;
var srcFile;

function selectFile(event) {
  if (event.target.files[0]) {
    currentFile = event.target.files[0];
    srcFile = URL.createObjectURL(currentFile);
    console.log(currentFile);
    var labelFile = document.querySelector('.file_img');
    labelFile.style['background-image'] = "url('".concat(srcFile, "')");
  }
}