window.onload = () => getData();

//querySelectors
const addTodoButton = document.querySelector('#add__todo');
const dataDiv = document.querySelector('#data');
const todoInput = document.querySelector('.todo__input');

//variables
const url = 'http://localhost:3000/';

//functions
async function getData(){
    dataDiv.className = 'd-flex';
    const response = await fetch(url);
    console.log(response);
    const body = await response.json();
    console.log(body);
    const data = body.map(t => `<span class="data__item">${t.todo}</span>`).toString();
    console.log(data);
    dataDiv.innerHTML = data.replaceAll(',', '\n');
    console.log(body);
}

async function addData(e){
    e.preventDefault();
    // span = document.createElement("span");
    // span.classList('.data__item');
    // span.innerText = input;
    // dataDiv.appendChild(span);
    const input = e.target.parentElement.querySelector('.todo__input').value;
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            todo: input,
        })
    };
    const response = await fetch(url, fetchOptions);
    const body = await response.json();
    const data = body.map(t => `<span class="data__item">${t.todo}</span>`).toString();
    dataDiv.innerHTML = data.replaceAll(',', '\n');
}

//eventlisteners
addTodoButton.addEventListener('click', addData);