function onSubmit(event){
    event.preventDefault();

   



    console.log(event.target.elements[0].value);

    let d = new Date();

    let name = document.querySelector('.name');
    let comment = document.querySelector('.comment_inp')
    let s = document.querySelector('.wrapper');

    s.innerHTML += `<div class="block">
    <h2 class="name_user">${event.target.elements[0].value}</h2>
    <p class="time">${d.toLocaleDateString()}</p>
    <p class="comment">${event.target.elements[1].value}</p>
   </div> <hr>`


   name.value = '';
   comment.value = '';
}








