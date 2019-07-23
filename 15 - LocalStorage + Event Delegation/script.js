
const todo = document.querySelector(".todo");
const ul = document.querySelector(".item-list");
const items = JSON.parse(localStorage.getItem('items')) || [];
const clear = document.querySelector(".clear");
const toggleChecker = document.querySelector(".toggle-check");


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

//for toggling individual items to true or false to be used at toggleCheckerAll function
function toggleDoneAll(item, checkerFlag) {
    const index = item.dataset.index
    items[index].done = checkerFlag;
}


function clearAll(e) {
    localStorage.removeItem('items');
    ul.innerHTML="";
}

let checkerFlag = false;

//for toggling group of items to true or fall
function toggleCheckerAll(e) {
    checkerFlag = !checkerFlag
    li_checkbox = [...document.querySelectorAll('input[type="checkbox"]')]
    if (checkerFlag) {
        toggleChecker.innerHTML = "Uncheck All"
    } else {
        toggleChecker.innerHTML = "Check All"
    }
    li_checkbox.map(item => toggleDoneAll(item, checkerFlag))
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items,ul)

}

ul.addEventListener('click', toggleDone)
todo.addEventListener('submit', addItem);
clear.addEventListener('click', clearAll )
toggleChecker.addEventListener('click', toggleCheckerAll )

populateList(items, ul);

