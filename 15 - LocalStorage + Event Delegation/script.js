const input_text = document.querySelector(".add-item");
const submit_button = document.querySelector(".submit-item");
const todo = document.querySelector(".todo")

console.log(submit_button)

function addItem(e) {
    console.log('firing')
    e.preventDefault();
    console.log(input_text.value);
    todo.reset();
}

submit_button.addEventListener('onsubmit', addItem);

