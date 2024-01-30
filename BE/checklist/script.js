document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    var taskInput = document.getElementById("newTaskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)"><i class="fas fa-edit"></i></button>
            <button onclick="deleteTask(this)"><i class="fas fa-trash-alt"></i></button>
            <button onclick="completeTask(this)"><i class="fas fa-check"></i></button>
        `;

        document.getElementById("taskList").appendChild(listItem);

        taskInput.value = "";

        saveTasks();
    }
}

function editTask(button) {
    var newTaskText = prompt("Editar tarefa:", button.parentNode.firstChild.textContent);

    if (newTaskText !== null) {
        button.parentNode.firstChild.textContent = newTaskText;
        saveTasks();
    }
}

function deleteTask(button) {
    if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
        button.parentNode.remove();
        saveTasks();
    }
}

function completeTask(button) {
    var taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
    saveTasks();
}

function loadTasks() {
    var storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        document.getElementById("taskList").innerHTML = storedTasks;
    }
}

function saveTasks() {
    var taskListHtml = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskListHtml);
}
