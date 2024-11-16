
class Todo {
  constructor(text) {
    this.text = text; 
    this.checked = false; 
    this.id = Date.now(); 
  }
}


let todoItems = [];


function renderTodoList() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  for (let todo of todoItems) {
    const li = document.createElement('li');

   
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.checked;
    checkbox.addEventListener('change', function () {
      toggleTask(todo.id); 
    });

   
    const span = document.createElement('span');
    span.textContent = todo.text;

  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTask(todo.id);
    });

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

   
    todoList.appendChild(li);
  }
}


function addTodo() {
  const inputTask = document.getElementById('inputTask');
  const taskText = inputTask.value.trim(); 

  if (taskText === '') {
    alert('Please enter a task'); 
    return;
  }

 
  const newTodo = new Todo(taskText);
  todoItems.push(newTodo);

  renderTodoList(); 
  inputTask.value = '';
  inputTask.focus(); 
}


function deleteTask(id) {
  todoItems = todoItems.filter(function (todo) {
    return todo.id !== id; 
  });

  renderTodoList();
}


function toggleTask(id) {
  for (let todo of todoItems) {
    if (todo.id === id) {
      todo.checked = !todo.checked; 
      break;
    }
  }

  renderTodoList(); 
}


function removeLastTask() {
  if (todoItems.length === 0) {
    alert('No tasks to remove'); 
    return;
  }

  if (confirm('Are you sure you want to remove the last task?')) {
    todoItems.pop(); 
    renderTodoList(); 
  }
}


function clearCompletedTasks() {
  todoItems = todoItems.filter(function (todo) {
    return !todo.checked; 
  });

  renderTodoList(); 
}


document.getElementById('addTask').addEventListener('click', addTodo);
document.getElementById('removeLastTask').addEventListener('click', removeLastTask);
document.getElementById('clearCompletedTasks').addEventListener('click', clearCompletedTasks);
