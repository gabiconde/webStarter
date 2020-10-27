var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var pos = todos.indexOf(todo)

        var linkElement = document.createElement('a');
        linkElement.textContent = 'Excluir';
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'excluirTodo('+ pos +')')

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveLocalStorage();
}

buttonElement.onclick = addTodo;

function excluirTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveLocalStorage();
}

function saveLocalStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}