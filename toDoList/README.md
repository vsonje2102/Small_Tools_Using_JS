# ToDo List Application

This is a simple ToDo List application built with JavaScript. It allows users to add, delete, and mark tasks as completed.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by status (all, active, completed)


## Usage

- **Add Task**: Enter a task in the input field and press the "Add" button.
- **Delete Task**: Click the "Delete" button next to the task you want to remove.
- **Mark Task as Completed**: Click the checkbox next to the task to mark it as completed.
- **Filter Tasks**: Use the filter buttons to view all tasks, only active tasks, or only completed tasks.

## Code Overview

### HTML

- **`index.html`**: The main HTML file that contains the structure of the ToDo List application.
    - `<nav>`: Navigation bar with a link to the home page.
    - `<div class="box">`: Container for the ToDo List application.
    - `<h1>`: Header for the ToDo List application.
    - `<input type="text" id="addtask">`: Input field for adding new tasks.
    - `<button>`: Button to add new tasks.
    - `<div id="dispTask">`: Container to display the list of tasks.

### CSS

- **`styles.css`**: The CSS file that contains the styles for the ToDo List application.
    - `body`: Global styles for the body element.
    - `nav`: Styles for the navigation bar.
    - `nav a`: Styles for the navigation links.
    - `nav a:hover`: Hover effect for the navigation links.
    - `.box`: Styles for the main container of the ToDo List application.
    - `.box h1`: Styles for the header inside the main container.
    - `.box input`: Styles for the input field inside the main container.
    - `.box button`: Styles for the button inside the main container.
    - `.box button:hover`: Hover effect for the button inside the main container.
    - `#dispTask`: Styles for the task display container.

### JavaScript

- **`scripts.js`**: The JavaScript file that contains the functionality for the ToDo List application.
    - `document.addEventListener('DOMContentLoaded', (event) => { ... })`: Event listener that runs the code inside when the DOM is fully loaded.
    - `const taskInput = document.querySelector('.box input');`: Selects the input field for adding new tasks.
    - `const addButton = document.querySelector('.box button');`: Selects the button for adding new tasks.
    - `const taskList = document.getElementById('dispTask');`: Selects the container for displaying the list of tasks.
    - `addButton.addEventListener('click', () => { ... })`: Event listener that runs the code inside when the add button is clicked.
        - `const taskText = taskInput.value.trim();`: Gets the trimmed value of the input field.
        - `if (taskText !== '') { ... }`: Checks if the input field is not empty.
            - `const taskItem = document.createElement('div');`: Creates a new div element for the task item.
            - `taskItem.className = 'task-item';`: Sets the class name for the task item.
            - `taskItem.textContent = taskText;`: Sets the text content for the task item.
            - `const deleteButton = document.createElement('button');`: Creates a new button element for deleting the task.
            - `deleteButton.textContent = 'Delete';`: Sets the text content for the delete button.
            - `deleteButton.className = 'delete-button';`: Sets the class name for the delete button.
            - `deleteButton.addEventListener('click', () => { ... })`: Event listener that runs the code inside when the delete button is clicked.
                - `taskList.removeChild(taskItem);`: Removes the task item from the task list.
            - `taskItem.appendChild(deleteButton);`: Appends the delete button to the task item.
            - `taskList.appendChild(taskItem);`: Appends the task item to the task list.
            - `taskInput.value = '';`: Clears the input field.

 