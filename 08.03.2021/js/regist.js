function regist(event){
    event.preventDefault()
    console.log(event.target.elements['login'].value);

    let dataRegistForm = {
        email: '',
        login: '',
        password: '',
        repeat_password: '',
    }


    for (const key in dataRegistForm) {
        dataRegistForm[key] = event.target.elements[key].value;
    }


    if(dataRegistForm['password'] !== dataRegistForm['repeat_password']){
        alert('asd')
    }else {
        sessionStorage.setItem('login',  dataRegistForm['login']);
        sessionStorage.setItem('password',  dataRegistForm['password']);
    }





}