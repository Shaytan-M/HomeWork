function save(dataInput) {
    dataInput.preventDefault()




    if (editable) {

        if (currentFile) {



            postFile(currentFile).then(resp => {
                console.log(resp);
                fileId = resp[0].id;
                putData('https://testinapi.herokuapp.com/todos/', {
                    id: editable.id,
                    title: dataInput.target.enter.value,
                    photo: fileId
                }).then(res => {
                    editable = null;
                    sub.value = 'Save';
                    printInfo();

                })
                enter.value = '';
                document.querySelector('.file_img').style['background'] = `url('none')`;
            });
        } else {
            putData('https://testinapi.herokuapp.com/todos/', {
                id: editable.id,
                title: dataInput.target.enter.value
            }).then(res => {
                editable = null;
                sub.value = 'Save';
                printInfo();
                enter.value = '';


            })
        }

    } else {

        let fileId;
        if (currentFile) {



            postFile(currentFile).then(resp => {
                console.log(resp);
                fileId = resp[0].id;
                postTodo('https://testinapi.herokuapp.com/todos', {
                        title: dataInput.target.enter.value,
                        photo: fileId
                    })
                    .then(response => {
                        printInfo()

                    });
                enter.value = '';
                document.querySelector('.file_img').style['background'] = `url('none')`;
            });
        } else {
            postTodo('https://testinapi.herokuapp.com/todos', {
                title: dataInput.target.enter.value
            }).then(response => {
                printInfo()
                enter.value = '';

            });
        }






    }


}



var loader = document.querySelector('.load');



function printInfo() {
    loader.style.display = 'block';
    ToDoList.innerHTML = '';
    getData('https://testinapi.herokuapp.com/todos').then(data => {
        loader.style.display = 'none';
        for (const item of data) {
            ToDoList.innerHTML += `<div style="background-color: ${item.isDone ? 'gray' : ''} ;" class="row"><form id=${item.id}><img src="${item.photo ? 'https://testinapi.herokuapp.com' + item.photo.url : 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'}" id="img"><div name="left"> <p class="title" name="title">${item.title}</p></div> <div><button onclick="editInput(event)">&#9997</button> <button onclick="deleteInput(event)" >&#10006</button> </div></form></div>`
        }
    })
}

printInfo()



async function getData(url) {
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




function deleteInput(dataInput) {
    dataInput.preventDefault()


    let id = dataInput.target.parentNode.parentNode.id;

    fetch(`https://testinapi.herokuapp.com/todos/${id}`, {
        method: 'DELETE'
    }).then(data => {



        printInfo()
    })


}

let editable;


function editInput(dataInput) {
    dataInput.preventDefault();

    console.log();


    let id = dataInput.target.parentNode.parentNode.id;

    getData(`https://testinapi.herokuapp.com/todos/${id}`).then(data => {

        console.log(data);
        let labelFile = document.querySelector('.file_img');
        labelFile.style['background-image'] = `url('${data.photo ? 'https://testinapi.herokuapp.com' + data.photo.url : ''}')`;
        enter.value = data.title
        sub.value = 'Edit';
        editable = data;




    })




}




async function putData(url, data) {
    const response = await fetch(url + data.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json()
}



const apiUrlUpload = 'https://testinapi.herokuapp.com/upload'


async function postFile(file) {
    const formData = new FormData();

    formData.append('files', file);

    try {
        const resp = await fetch(apiUrlUpload, {
            method: 'POST',
            body: formData
        });
        return await resp.json()
    } catch {
        console.log(error);
    }
}


let currentFile;
let srcFile;

function selectFile(event) {

    if (event.target.files[0]) {
        currentFile = event.target.files[0];

        srcFile = URL.createObjectURL(currentFile)


        console.log(currentFile);

        let labelFile = document.querySelector('.file_img');
        labelFile.style['background-image'] = `url('${srcFile}')`;






    }

}