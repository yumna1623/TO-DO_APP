const userInput = document.getElementById("user-value");
const todoDiv = document.getElementById("todo-div").querySelector(".todo-v");

function Add() {
    const task = userInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskCount = todoDiv.children.length + 1;
    taskItem.innerHTML = `
        <span>${taskCount}. ${task}</span>
        <button class="delete-task" onclick="removeTask(this)">Delete</button>
    `;

    todoDiv.appendChild(taskItem);

    userInput.value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    todoDiv.removeChild(taskItem);
    updateTaskNumbers();
}

function Delete() {
    todoDiv.innerHTML = "";
}

