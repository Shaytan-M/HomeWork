function OnSubmitLogin(e) {

    let checkbox = document.getElementById('checkbox')

    let dataLoginForm = {
        user_login: '',
        user_password: '',
        user_remember: false
    }


    for (const key in dataLoginForm) {
        dataLoginForm[key] = e.target.elements[key].value;
        
    }











    localStorage.setItem('user', dataLoginForm['user_login'])





    

    document.location.href = `/html/home.html?login=${dataLoginForm.user_login}`











    if(checkbox.checked){
        alert(`Привіт, ${e.target.elements['user_login'].value}! Я тебе запамятав` )
    }else{
        alert(`Привіт, ${e.target.elements['user_login'].value}! Я тебе не запамятав` )
    }










 e.preventDefault();
 return false
}

