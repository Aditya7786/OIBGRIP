const taskInput = document.getElementById("taskInput");
const input2 = document.getElementById("input2");
const addTaskButton = document.getElementById("addTaskButton");
var taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const task = taskInput.value;
    const task2 = input2.value;
    if (task && task2) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const deletebtn = document.createElement("button");
        deletebtn.setAttribute("id", "del");
        deletebtn.textContent = "Delete";
        deletebtn.addEventListener("click", function () {
            taskList.removeChild(tr)

        });

        td.innerHTML = task;
        td2.innerHTML = task2;
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td3.appendChild(deletebtn);
        taskList.appendChild(tr);
        taskInput.value = "";
        input2.value = "";
    }

}
);