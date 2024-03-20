const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

/*This function adds tasks to the list.
And also alerts the user if no value was 
entered after click*/
function addTask(){
    if (inputBox.value === ''){
        alert("You must enter a value!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

/*Listens for a click event on the LI or SPAN element
and and toggles it as checked or unchecked and deletes
the list item if the target element was a SPAN respectively */
taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//saves data to the browser's local storage
function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML);
}
//retrieves data from the browser's local stotrage
function showTask(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();