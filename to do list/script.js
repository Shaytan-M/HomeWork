function addItemToList(){

    // Створюємо батьківський елемент
    const list = document.getElementById('container-list')

    // Створємо тег який буде добавлятись
    const li = document.createElement('li');
    const span = document.createElement('span')

    span.onclick = deleteChild;


    
    span.innerHTML = ' X';



    li.innerHTML = prompt('Напишіть текст');

    li.appendChild(span)



    list.appendChild(li);
}

function deleteChild(event) {
    event.target.parentNode.remove()
}


function insertItemToList() {
    const list =document.getElementById('container-list')
    const li = document.createElement('li');
    const span = document.createElement('span')

    span.onclick = deleteChild;


    
    span.innerHTML = ' X';

    

    li.innerHTML = prompt('Напишіть текст');

    li.appendChild(span)



    console.log(list.children);
    


    list.insertBefore(li, list.children[Math.floor(list.children.length / 2)])
    
}

























