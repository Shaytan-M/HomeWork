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










    if(checkbox.checked){
        alert(`Привіт, ${e.target.elements['user_login'].value}! Я тебе запамятав` )
    }else{
        alert(`Привіт, ${e.target.elements['user_login'].value}! Я тебе не запамятав` )
    }






    

    if(dataLoginForm['user_login'] == sessionStorage.getItem('login') && dataLoginForm['user_password'] ==  sessionStorage.getItem('password')){
        document.location.href = `../html/home.html?login=${dataLoginForm.user_login}`
    }else{
        alert('Зареєструйтесь')
        
    }



















 e.preventDefault();
 return false
}

