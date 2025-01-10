document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.querySelector('.box input');
    const addButton = document.querySelector('.box button');
    const taskList = document.getElementById('dispTask');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
});