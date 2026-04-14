var todos = [];
var todoParentElm = document.getElementById('todo-parent');
var todoToBeUpdate = null;
var indexToBeUpdate = null;
var updateBtn = document.getElementById('update_btn');
var addBtn = document.getElementById('add_btn');


function showLocalStorageData() {
    var todosData = window.localStorage.getItem('todosArray');
    todosData = JSON.parse(todosData);

    if (todosData!=null) {
        
        todos = todosData;
    }

    renderTodos();

}


function addTodo() {
    var input = document.getElementById('todo-input');

    //Regex... for number validation
    var onlyNumbers = /^\d+$/;

    if (input.value.length <=1 || onlyNumbers.test(input.value)) {
        alert('please input a valid todo');
        // input.value = '';
        return;
    }

    var todoObj =
    {
        id: (new Date().getTime()) + Math.floor(Math.random() * 999),
        text: input.value,
        createdAt: new Date(),
        isCompleted: false,
    }

    // console.log(todoObj);
    todos.push(todoObj);
    input.value = '';

    window.localStorage.setItem('todosArray', JSON.stringify(todos));

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

        if (todos[index].isCompleted) {

            todoParentElm.innerHTML += `
                    <div class='todo done'>
                        <div class='todo-check'></div>
                        <span>${todos[index].text}</span>
                        <div class='todo-actions'>                            
                            <button class='btn-delete' onclick='deleteTodo(${todos[index].id})'>Delete</button>
                        </div>
                    </div>`;


        }
        else {

            todoParentElm.innerHTML += `
                    <div class='todo'>
                        <div class='todo-check' onclick='doneTodo(${todos[index]})'></div>
                        <span>${todos[index].text}</span>
                        <div class='todo-actions'>
                            <button class='btn-edit' onclick='editTodo(${todos[index].id})'>Edit</button>
                            <button class='btn-delete' onclick='deleteTodo(${todos[index].id})'>Delete</button>
                            <button class='btn-done-action' onclick='doneTodo(${todos[index].id})'>Done</button>
                        </div>
                    </div>`;
        }

    }

}

function deleteTodo(id) {
    var i = searchTodo(id);
    todos.splice(i, 1);
    window.localStorage.setItem('todosArray', JSON.stringify(todos));
    renderTodos();

}

function deleteAll() {
    todos.splice(0);
    window.localStorage.setItem('todosArray', JSON.stringify(todos));
    renderTodos();
}

function editTodo(id) {
    var input = document.getElementById('todo-input');

    addBtn.style.display = 'none';
    updateBtn.style.display = 'inline';

    var i = searchTodo(id);

    input.value = todos[i].text;
    todoToBeUpdate = todos[i];
    indexToBeUpdate = i;

}

function updateTodo() {

    var input = document.getElementById('todo-input');

    todos[indexToBeUpdate].text = input.value;

    addBtn.style.display = 'inline';
    updateBtn.style.display = 'none';
    input.value = '';

    window.localStorage.setItem('todosArray', JSON.stringify(todos));
    renderTodos();
}
function searchTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            return i;
        }
    }
}

function doneTodo(id) {

    var i = searchTodo(id);
    todos[i].isCompleted = true;

    renderTodos();
}

renderTodos();
// addTodo();
showLocalStorageData();