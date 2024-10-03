const taskInput = document.getElementById('do');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

loadTask();

function addTask() {
    let task = taskInput.value.trim();
    if (task) {
        createTaskElement(task);
        saveTask();
        taskInput.value = ''; 
    }
}

function createTaskElement(task) {
    let listItem = document.createElement('li');
    listItem.textContent = task;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.className = 'deleteTask';

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem);
        saveTask();
    })
}


addButton.addEventListener('click', addTask);

function saveTask() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function (item) {
        tasks.push(item.textContent.trim()); 
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(task => createTaskElement(task)); 
}
