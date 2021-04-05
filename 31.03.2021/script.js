fetch('https://jsonplaceholder.typicode.com/users').then((response) => {

    console.log(response);
 return response.json();
}).then(value => {
    console.log(value);
    
})



async function getData(url){
    const response = await fetch(url);

    return response.json()
}


getData('https://jsonplaceholder.typicode.com/users').then(value => {



    printUsers(value);
})

function printUsers(user){
    
    user.forEach(item => {
        block.innerHTML += `<button value="${item.id}" onclick="printInf(event)">${item.name}</button>`
    });




}


function printInf(event){
    console.log(event.target.value);
    table.innerHTML = ''
    document.querySelector('.info').style.display = 'block'


    getData(`https://jsonplaceholder.typicode.com/users/${event.target.value}`).then(value => {

    console.log(value);
        for (const key in value) {
            table.innerHTML += `<tr><th>${key}</th><td>${value[key]}</td></tr>`
        }

    })

}


