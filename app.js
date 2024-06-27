document.addEventListener('DOMContentLoaded',()=>{
    let addButton=document.getElementById('btn-add');
    let listOfTasks=document.getElementById('list-of-tasks');

    addButton.addEventListener('click',()=>{
        const taskToAdd=document.getElementById('task');
        const taskText=taskToAdd.value.trim();
        console.log(taskText);
        
        if(taskText != ''){
            const newTask=document.createElement('li');
            newTask.textContent=taskText;
            listOfTasks.appendChild(newTask); 
            taskToAdd='';
        }
    });

});