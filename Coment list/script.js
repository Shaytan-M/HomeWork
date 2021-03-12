function onSubmit(event){
    event.preventDefault();

   


    // console.log(document.forms[0].childNodes);
    // console.log(document.forms[0].children);
    // console.log(document.forms[0].elements);
    // console.log(document.forms[0].elements[0].value);
    // console.log(document.forms[0].elements[1].value);


    console.log(event.target.elements[0].value);

    let d = new Date();


    let s = document.querySelector('.wrapper')

    s.innerHTML += `<div class="block">
    <h2 class="name_user">${event.target.elements[0].value}</h2>
    <p class="time">${d.toLocaleDateString()}</p>
    <p class="comment">${event.target.elements[1].value}</p>
   </div> <hr>`
}















// let arrCountry = [
//     'Ukraine',
//     'Usa',
//     'Russia',
//     'Poland',
//     'Portugal',
//     'Peru',
// ]

// let arrSearch = [

// ]



// let serchStr = '';



// function textinp(event){

//     serchStr = event.target.value;

//     visibleSuList();
    
   
// }

// function visibleSuList(){
//     const list = document.querySelector('#some');
//     if(serchStr){
//         list.innerHTML = ''
//         printItem(arrCountry.filter(item => item.includes(serchStr)), list)
//     }else {
//         list.innerHTML = '';
//     }
// }


// function printItem(arr, element){
//     for (const item of arr) {
//         element.innerHTML += `<div class="item">${item}</div>`
//     }
// }

