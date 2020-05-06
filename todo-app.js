class Task {
    constructor(name, dueDate, isDone) {
        this.name = name;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    toString() {
        return "<li><div>" + this.name + "</div></li>";
    }
}

function createTask() {
    const taskName = document.getElementById("taskName").value;
    addTask(new Task(taskName, new Date(), false));
}

function addTask(t) {
    const list = document.getElementById("todolist")
    list.innerHTML += t.toString()
}

function init() {
    console.log("init called");
    task = new Task("welcome task", new Date("May 30, 2020"), false);
    addTask(task);
    console.log(task);
}

init();