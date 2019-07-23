
const todo = document.querySelector(".todo");
const ul = document.querySelector(".item-list");
const items = JSON.parse(localStorage.getItem('items')) || [];
const clear = document.querySelector(".clear");
const check = document.querySelector(".check");
const uncheck = document.querySelector(".uncheck");

function addItem(e) {
    e.preventDefault();
    text = this.querySelector(".add-item").value
    const item = {
        text,
        done: false
    }

    items.push(item);
    populateList(items, ul);
    localStorage.setItem('items', JSON.stringify(items));
    todo.reset();
}


function populateList (todos = [], list) {
    list.innerHTML = todos.map((todo, index) => {
        return `<li>
            <input type="checkbox" data-index=${index} id="item${index}" ${todo.done ? 'checked' : ''} />
            <label for="item${index}">${todo.text}</label>
            </li>`;}).join('');
    }


function toggleDone(e) {
    if (!e.target.matches('input')) return; //skip if it is not an input
    const el = e.target
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, ul);
}

function clearAll(e) {
    localStorage.removeItem('items');
    ul.innerHTML="";
}

ul.addEventListener('click', toggleDone)
todo.addEventListener('submit', addItem);
clear.addEventListener('click', clearAll )
populateList(items, ul);

