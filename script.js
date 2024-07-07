let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');
let prioritySelect = document.getElementById('priority-select');

function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter the Text');
    } else {
        const task = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        task.appendChild(checkbox);

        const text = document.createElement('span');
        text.textContent = inputBox.value;
        text.className = 'task-text';
        task.appendChild(text);

        const priority = document.createElement('span');
        priority.textContent = prioritySelect.value;
        priority.className = 'task-priority ' + prioritySelect.value;
        task.appendChild(priority);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        task.appendChild(editButton);

        const deleteButton = document.createElement('span');
        deleteButton.textContent = "\u00d7";
        deleteButton.className = 'delete-button';
        task.appendChild(deleteButton);

        listContainer.appendChild(task);
        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains('task-checkbox')){
        e.target.nextSibling.classList.toggle('checked');
        saveData();
    } else if(e.target.classList.contains('delete-button')){
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.classList.contains('edit-button')){
        editTask(e.target.parentElement);
    }
});

function editTask(task){
    const text = task.querySelector('.task-text');
    const priority = task.querySelector('.task-priority');
    const editButton = task.querySelector('.edit-button');
    
    if(editButton.textContent === 'Edit'){
        text.contentEditable = 'true';
        text.focus();
        priority.contentEditable = 'true';
        editButton.textContent = 'Save';
    } else {
        text.contentEditable = 'false';
        priority.contentEditable = 'false';
        editButton.textContent = 'Edit';
        saveData();
    }
}

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("tasks");
}

function filterTasks(status){
    const tasks = listContainer.querySelectorAll('li');
    tasks.forEach(task => {
        switch(status){
            case 'all':
                task.style.display = '';
                break;
            case 'pending':
                if(task.querySelector('.task-checkbox').checked){
                    task.style.display = 'none';
                } else {
                    task.style.display = '';
                }
                break;
            case 'completed':
                if(task.querySelector('.task-checkbox').checked){
                    task.style.display = '';
                } else {
                    task.style.display = 'none';
                }
                break;
        }
    });
}

showTasks();
