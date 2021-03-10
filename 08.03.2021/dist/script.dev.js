"use strict";

function OnSubmitLogin(e) {
  var checkbox = document.getElementById('checkbox');
  var dataLoginForm = {
    user_login: '',
    user_password: '',
    user_remember: false
  };

  for (var key in dataLoginForm) {
    dataLoginForm[key] = e.target.elements[key].value;
  }

  localStorage.setItem('user', dataLoginForm['user_login']);
  document.location.href = "/home.html?login=".concat(dataLoginForm.user_login);

  if (checkbox.checked) {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(e.target.elements['user_login'].value, "! \u042F \u0442\u0435\u0431\u0435 \u0437\u0430\u043F\u0430\u043C\u044F\u0442\u0430\u0432"));
  } else {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(e.target.elements['user_login'].value, "! \u042F \u0442\u0435\u0431\u0435 \u043D\u0435 \u0437\u0430\u043F\u0430\u043C\u044F\u0442\u0430\u0432"));
  }

  e.preventDefault();
  return false;
}