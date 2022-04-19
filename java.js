// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

// Funcion para setireal la feche
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', { weekday: "long"});
    dateMonth.textContent = date.toLocaleString('es', { month: 'short'});
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric'});
};

//  Para que cuando se agregue un evento no nos vayamos a otra pagina
const addNewTask = event =>{
event.preventDefault();
const { value } = event.target.taskText;
if (!value) return;
const task = document.createElement('div');
task.classList.add('task', 'roundBorder');
task.addEventListener('click', changeTaskState)
task.textContent = value;
tasksContainer.prepend(task); 
event.target.reset(); // Resetear campo de nueva tarea
};

// Cambiar estado de las Tareas
const changeTaskState = event =>{
    event.target.classList.toggle('done');
};

// Para Ordenar Tareas
const order = () =>{
    const done = [];
    const toDO = [];
    tasksContainer.childNodes.forEach(el => {  // Funcion para recorer las tareas
        el.classList.contains('done') ? done.push(el) : toDO.push(el)
    })
        return [...toDO, ...done]; // Ordenar las tareas por hacer por hacer, primero que las hechas
}
const renderOrderedTasks = () =>{
    order().forEach(el => tasksContainer.appendChild(el))
}


setDate();