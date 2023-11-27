// const ul=document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent= 'What is Happening?';
// ul.children[1].innerText = 'Praise';
// ul.lastElementChild.innerHTML = '<h3>Umoh</h3>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'green';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e);
// });








const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if(nameInput.value=== '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else{
     const li= document.createElement('li');
     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
     userList.appendChild(li);

    //  Clear fields
    nameInput.value='';
    emailInput.value='';
    };
};