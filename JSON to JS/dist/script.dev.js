"use strict";

// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//       "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
//   }
//   function setCookie(name, value, options = {}) {
//     options = {
//       path: '/',
//       // при необходимости добавьте другие значения по умолчанию
//       ...options
//     };
//     if (options.expires instanceof Date) {
//       options.expires = options.expires.toUTCString();
//     }
//     let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
//     for (let optionKey in options) {
//       updatedCookie += "; " + optionKey;
//       let optionValue = options[optionKey];
//       if (optionValue !== true) {
//         updatedCookie += "=" + optionValue;
//       }
//     }
//     document.cookie = updatedCookie;
//   }
//   function deleteCookie(name) {
//     setCookie(name, "", {
//       'max-age': -1
//     })
//   }
// let human = {
//     "age": 21,
//     name: 'John',
//     has: true
// }
// console.log(human);
// console.log(JSON.stringify(human, null, 5));
var json_str = "{\n    \"key\": 123,\n    \"name\": \"John\",\n    \"birthDate\": \"10.10.2021\",\n    \"isHuman\": true,\n    \"some_obj\": {\n        \"some_key\": \"some value\"\n    },\n    \"animals\": [\n        \"cat\", \"dog\", \"hors\"\n    ]\n}"; // console.log(isValidJson(json_str));
// function isValidJson(json_str){
//     try {
//         JSON.parse(json_str);
//     } catch (error) {
//         return false
//     }
//     return true
// }
// let obj = {
//     name: 'John',
//     age: 35,
//     toJSON() {
//         let json = `{`;
//         for (const key in this) {
//             if(typeof this[key] != 'function'){
//                 json += `"${key}" : "${this[key]}",`
//             }
//         }
//         return json.slice(0,json.length - 1)+ `}`
//     }
// };
// console.log(JSON.stringify(obj));
// console.log(obj.toJSON());
// function checkValue(key, value){
//     if(key === 'name'){
//         return value = 'Misha'.toUpperCase()
//     }
//     return value
// }
// console.log(JSON.parse(json_str, checkValue));

function submitForm(event) {
  event.preventDefault();
  var ent = event.target.enter.value;

  try {
    JSON.parse(ent);
  } catch (error) {
    alert('некоректний JSON');
    document.querySelector('#formatted').innerHTML = "";
  }

  var obj = JSON.parse(ent);
  document.querySelector('#formatted').innerHTML = "".concat(JSON.stringify(obj, null, 5));
}