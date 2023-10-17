let todos = [];
let ul = document.querySelector(".todos");
let form = document.querySelector(".add-todo-form");

function addTodo(e) {
    e.preventDefault();
    let input = document.querySelector("input[name='add-todo']");
    let val = input.value;
    let todoObject = {'value': val, 'done': false};
    todos.push(todoObject);
    form.reset();
    populateList(todos);
    todos = [];
}

function populateList(todos) {
    todos.forEach((el) => {
        let label = document.createElement("label");
        label.innerText = el.value;
        let input = document.createElement("input");
        input.type = "checkbox";
        let li = document.createElement("li");
        li.appendChild(label);
        li.appendChild(input);
        ul.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    addTodo(e);
});

