let pending = 1;
let completed = 0;

const btn = document.querySelector(".button-29");
const d = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = d.getFullYear();
const month = d.getMonth();
const date = d.getDate();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = weekday[d.getDay()];

const checkbox = document.querySelector(".ui-checkbox");
const task = document.querySelector(".tasks");
const addTaskBtn = document.getElementById("Add");
const cancelTaskBtn = document.getElementById("Cancel");

const taskCompleted = () => {
    task.style.display = "none";
    pending--;
    completed++;
    document.querySelector("#task-pending").innerText = `Task Pending: ${pending}`;
    document.querySelector("#task-completed").innerText = `Task Completed: ${completed}`;
};

checkbox.addEventListener('click', (evt) => {
    evt.preventDefault();
    taskCompleted();
});

const cancelTask = () => {
    const taskInputDiv = document.getElementById('task-input');
    const overlay = document.getElementById('overlay');
    taskInputDiv.style.display = 'none';
    overlay.style.display = 'none';
};

cancelTaskBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    cancelTask();
});

const addTask = () => {
    let taskname = document.querySelector("#task-name").value;
    let taskdate = document.querySelector("#task-date").value;
    let taskdesc = document.querySelector("#task-desc").value;
    const taskHtml = `
                <div class="tasks">
                    <label class="checkbox-container">
                        <input type="checkbox" class="ui-checkbox">
                    </label>
                    <div class="info">
                        <h3>${taskname}</h3>
                        <p>${taskdate}</p>
                        <p id="description">${taskdesc}</p>
                    </div>
                </div>
            `;
    const taskContainer = document.querySelector(".tasks-container");
    taskContainer.innerHTML += taskHtml;
    const taskInputDiv = document.getElementById('task-input');
    const overlay = document.getElementById('overlay');
    taskInputDiv.style.display = 'none';
    overlay.style.display = 'none';
};
addTaskBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    addTask();
});
btn.addEventListener('click', function (event) {
    const taskInputDiv = document.getElementById('task-input');
    const overlay = document.getElementById('overlay');

    const rect = event.target.getBoundingClientRect();
    taskInputDiv.style.top = rect.bottom + 'px';
    taskInputDiv.style.left = rect.left + 'px';

    taskInputDiv.style.display = 'block';
    overlay.style.display = 'block';
});


const setDate = () => {
    document.querySelector("#day-date").textContent = `${day}, ${date} ${monthNames[month]} ${year}`;
};
setDate();

// const userName = () => {
//     const user = prompt("Enter your user-name");
//     if (user) {
//         document.querySelector("#offcanvasDarkNavbarLabel").innerText=user;
//     }
// };
// userName();