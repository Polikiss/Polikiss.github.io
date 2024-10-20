const list = document.getElementById("ul-task-list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        updateLocalStorage();
    }
    if (event.target.classList.contains("close")) {
        removeItem(event.target.parentElement.textContent);
        event.target.parentElement.remove();
    }
}, false);

function newElement() {
    const input = document.getElementById("input-task-title").value;
    const li = document.createElement("li");
    li.textContent = input;
    document.getElementById("ul-task-list").appendChild(li);
    document.getElementById("input-task-title").value = "";
    addCloseButton(li);
    saveList();
}

document.addEventListener("DOMContentLoaded", () => {
    loadList();
});

function saveList() {
    const listItems = document.querySelectorAll("#ul-task-list li");
    const items = Array.from(listItems).reduce((accumulator, item) => {
        accumulator.push({
            text: item.textContent.replace("\u00D7", ""),
            checked: item.classList.contains("checked")
        });
        return accumulator;
    }, []);
    localStorage.setItem("taskList", JSON.stringify(items));
}

function loadList() {
    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        document.getElementById("ul-task-list").appendChild(li);
        addCloseButton(li);
        if (task.checked) {
            li.classList.add("checked");
        }
    });
}

function removeItem(title) {
    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const update = tasks.filter(task => task.text !== title);
    localStorage.setItem("taskList", JSON.stringify(update));

}

function addCloseButton(li) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
    this.parentElement.remove();
        removeItem(this.parentElement.textContent);
        updateLocalStorage();
    }
}



function updateLocalStorage() {
    const listItems = document.querySelectorAll("ul li");
    const items = Array.from(listItems).reduce((accumulator, item) => {
        return [
            ...accumulator,
            {
                text: item.textContent.replace("\u00D7", ""),
                checked: item.classList.contains("checked")
            }
        ];
    }, []);
    localStorage.setItem("taskList", JSON.stringify(items));
}