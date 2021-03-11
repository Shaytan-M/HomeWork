"use strict";

function regist(event) {
  event.preventDefault();
  console.log(event.target.elements['login'].value);
  var dataRegistForm = {
    email: '',
    login: '',
    password: '',
    repeat_password: ''
  };

  for (var key in dataRegistForm) {
    dataRegistForm[key] = event.target.elements[key].value;
  }

  if (dataRegistForm['password'] !== dataRegistForm['repeat_password']) {
    alert('Паролі різні');
  } else {
    sessionStorage.setItem('login', dataRegistForm['login']);
    sessionStorage.setItem('password', dataRegistForm['password']);
    alert('Ви зареєструвались)');
    document.location.href = "../html/index.html";
  }
}