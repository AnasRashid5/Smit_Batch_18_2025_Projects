var todos = [];
var todoParentElm = document.getElementById('todo-parent');
var todoToBeUpdate = null;
var indexToBeUpdate = null;
var updateBtn = document.getElementById('update_btn');
var addBtn = document.getElementById('add_btn');





function addTodo() {
    var input = document.getElementById('todo-input');

    if (input.value.length < 1) {
        alert('please input todo a valid todo');
        return;
    }

    var todoObj =
    {
        id: (new Date().getTime()) + Math.floor(Math.random() * 999),
        text: input.value,
        createdAt: new Date(),
        isCompleted: false,
    }

    todos.push(todoObj);

    input.value = '';
    renderTodos();
}

function renderTodos() {

    todoParentElm.innerHTML = '';

    if (todos.length == 0) {
        todoParentElm.innerHTML = `<div class="empty-state">
        <p>Nothing here yet -- add your first task!</p>
        </div>`;
        return;
    }

    for (let index = 0; index < todos.length; index++) {
        todoParentElm.innerHTML += `
                <div class='todo'>
                    <div class='todo-check'></div>
                    <span>${todos[index].text}</span>
                    <div class='todo-actions'>
                        <button class='btn-edit' onclick='editTodo(${todos[index].id})'>Edit</button>
                        <button class='btn-delete' onclick='deleteTodo(${todos[index].id})'>Delete</button>
                        <button class='btn-done-action' onclick='doneTodo(${todos[index].id})'>Done</button>
                    </div>
                </div>`;

    }

}