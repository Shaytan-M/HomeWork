// console.log(document.location.search.split('=')[1]);

// let home = document.getElementById('home')
// let loginName = document.location.search.split('=')[1];

// home.innerText += ` ${loginName}`



let s = sessionStorage.getItem('login');

console.log(s);


home.innerText += ` ${s}`