function save(dataInput){
    dataInput.preventDefault()




   if(editable){
    putData('https://testinapi.herokuapp.com/todos/', {isDone: check.checked ? true : false, id: editable.id, title:dataInput.target.enter.value}).then(res => {


        editable = null;
        sub.value = 'Save';

        printInfo();
       



    })     

   }else{
    postTodo('https://testinapi.herokuapp.com/todos', {isDone: check.checked ? true : false, title: dataInput.target.enter.value}).then(response => {
        printInfo()
    });


   }

   enter.value = ''
}






function printInfo(){
    
getData('https://testinapi.herokuapp.com/todos').then(data => {

ToDoList.innerHTML = ''

    for(const item of data){
        

        ToDoList.innerHTML += `<div style="background-color: ${item.isDone ? 'gray' : ''} ;" class="row"><form id=${item.id}><div name="left"><p>${item.isDone}</p> <p class="title" name="title">${item.title}</p></div> <div><button onclick="editInput(event)"> Edit</button>  <button onclick="deleteInput(event)"> Delete</button> </div></form></div>`


    }

})
}

printInfo()



async function getData(url){
 const resp = await fetch(url);
 return await resp.json();
}

async function postTodo(url, data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });


    

}




function deleteInput(dataInput){
    dataInput.preventDefault()


    let id = dataInput.target.parentNode.parentNode.id;

    fetch(`https://testinapi.herokuapp.com/todos/${id}`, {method: 'DELETE'}).then(data => {
        


        printInfo()
    })

   
}

let editable;


function editInput(dataInput){
    dataInput.preventDefault()


    let id = dataInput.target.parentNode.parentNode.id;

    getData(`https://testinapi.herokuapp.com/todos/${id}`).then(data => {

    
        enter.value = data.title
        sub.value = 'Edit';
        editable = data;
       



    })



    
}




async function putData(url, data){
    const response = await fetch(url + data.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json()
}