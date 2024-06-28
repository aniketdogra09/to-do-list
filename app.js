document.addEventListener('DOMContentLoaded',()=>{
    let addButton=document.getElementById('btn-add');
    let listOfTasks=document.getElementById('list-of-tasks');

    addButton.addEventListener('click',()=>{
        const taskToAdd=document.getElementById('task');
        const taskText=taskToAdd.value.trim();
        if(taskText != ''){
            const newTask=document.createElement('li');
            newTask.classList.add('task-added');

            const deleteButton=document.createElement('button');
            deleteButton.textContent='x';
            deleteButton.classList.add('btn-delete');
            deleteButton.addEventListener('click',()=>{
                listOfTasks.removeChild(newTask);
            });

            const taskTextWrapper=document.createElement('p');
            taskTextWrapper.textContent=taskText;

            newTask.appendChild(taskTextWrapper);
            newTask.appendChild(deleteButton);
            listOfTasks.appendChild(newTask); 
            
            taskToAdd.value='';
        }
    });

});