"use strict";

// console.log(document.location.search.split('=')[1]);
// let home = document.getElementById('home')
// let loginName = document.location.search.split('=')[1];
// home.innerText += ` ${loginName}`
var s = sessionStorage.getItem('login');
console.log(s);
home.innerText += " ".concat(s);