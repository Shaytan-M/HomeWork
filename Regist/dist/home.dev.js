"use strict";

// console.log(document.location.search.split('=')[1]);
// let home = document.getElementById('home')
// let loginName = document.location.search.split('=')[1];
// home.innerText += ` ${loginName}`
var s = localStorage.getItem('user');
console.log(s);
home.innerText += " ".concat(s);