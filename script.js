const inputResult = document.getElementById("input-btn");
const taskList = document.getElementById("task-list");

function addTask(event){
    event.preventDefault();
    if(inputResult.value === ''){
        alert("Please provide a task");
        saveData()
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputResult.value;
        taskList.appendChild(list);

        let span = document.createElement("span");
        span.innerHTML = '\u00D7';
        list.appendChild(span);        
    }

    inputResult.value = '';

    saveData();
}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    } else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
    }

    saveData();
}, false);

document.querySelector('form').addEventListener('submit', addTask);
showTask();

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

