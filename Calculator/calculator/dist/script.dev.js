"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var but = document.querySelectorAll('.but');
var wind = document.querySelector('.window');

var Calculetor =
/*#__PURE__*/
function () {
  function Calculetor() {
    _classCallCheck(this, Calculetor);
  }

  _createClass(Calculetor, null, [{
    key: "sum",
    value: function sum(fN, sN, ev) {
      switch (ev) {
        case '+':
          return "".concat(fN, " + ").concat(sN, " = ").concat(fN + sN);
          break;

        case '-':
          return "".concat(fN, " - ").concat(sN, " = ").concat(fN - sN);
          break;

        case '*':
          return "".concat(fN, " * ").concat(sN, " = ").concat(fN * sN);
          break;

        case '/':
          return "".concat(fN, " / ").concat(sN, " = ").concat(fN / sN);
          break;

        default:
          break;
      }
    }
  }]);

  return Calculetor;
}();

but.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var num = e.target.value;
    console.log(item);
    wind.innerHTML += num;
  });
});
var equa = document.querySelector('.equa');
equa.addEventListener('click', function () {
  wind.innerHTML = "".concat(wind.innerText, " = ").concat(eval(wind.innerText));
});