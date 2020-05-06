class Task {
    constructor(name, dueDate, isDone) {
        this.name = name;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    toString() {
        let htmlText = '<li class="task" ><div>'
        htmlText += this.name
        htmlText += ", " + this.dueDate.getDate() 
                 + "/" + this.dueDate.getMonth();
        htmlText += '<input type="checkbox" name="isDone" id="isDone">'
        htmlText += '</div></li>';
        return htmlText;
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