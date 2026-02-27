const apiUrl = "http://localhost:5000/tasks";

function fetchTasks() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";
            data.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task.name;
                list.appendChild(li);
            });
        });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value;

    fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: taskName })
    })
    .then(() => {
        taskInput.value = "";
        fetchTasks();
    });
}

fetchTasks();
