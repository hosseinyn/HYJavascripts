// To Do App

// DOM Selectors :
const input = document.getElementById("task-input");
const tasks_box = document.querySelector(".tasks");

// Add Task Function : 
function addAndMannageTask(){
    if(input.value == ""){
        alert("Please Enter The Task !");
        return false;
    }
    let task_box = document.createElement("div");
    task_box.className = "task";

    let task_label = document.createElement("label");
    task_label.textContent = input.value;
    input.value = '';

    let task_checkbox = document.createElement("input");
    task_checkbox.class = "task-tik";
    task_checkbox.type = 'checkbox';
    
    task_box.appendChild(task_label);
    task_box.appendChild(task_checkbox)

    tasks_box.appendChild(task_box);

    // Checked Event : 
    task_checkbox.addEventListener("change" , () => {
        if(task_label.style.textDecoration == "line-through"){
            task_label.style.textDecoration = "none";
        } else{
            task_label.style.textDecoration = "line-through";
        }
    })
}

function clearAll(){
    tasks_box.innerHTML = '';
}

// Key Events : 
document.body.addEventListener("keypress" , (key) => {
    if(key.key == "Enter"){
        addAndMannageTask();
    }
})