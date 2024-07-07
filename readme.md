
# To-Do List Application

This is a modern and interactive To-Do List web application built using HTML, CSS, and JavaScript. The application allows users to add, edit, delete, and manage tasks with priority levels. Tasks are stored in the browser's local storage to persist data across sessions. The application also provides filtering and sorting options to help users organize their tasks efficiently.

## Features

- **Add Task**: Add new tasks to the list.
- **Edit Task**: Edit existing tasks.
- **Delete Task**: Remove tasks from the list.
- **Mark as Complete/Incomplete**: Toggle tasks as complete or incomplete.
- **Priority Levels**: Assign priority levels (high, medium, low) to tasks.
- **Filter Tasks**: Filter tasks based on their completion status (all, completed, pending).
- **Local Storage**: Persist tasks in the browser's local storage.
- **Responsive Design**: Ensure the application is usable on various screen sizes.
- **Modern UI**: Attractive and modern user interface with interactive elements.

## Tools and Technologies

- **HTML**: The structure of the application.
- **CSS**: Styling and layout, including modern design elements and responsiveness.
- **JavaScript**: Dynamic functionality, task management, local storage, and interactivity.
- **Local Storage**: Store and retrieve tasks to maintain state across browser sessions.

## File Structure

```
project/
│
├── index.html         # HTML structure of the application
├── style.css          # CSS styles for the application
├── script.js          # JavaScript functionality
├── images/            # Images used in the application (icons, etc.)
│   └── icon.png
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge)

### Usage

1. **Add a Task:**
    - Enter the task description in the input field.
    - Select the priority level from the dropdown menu.
    - Click the "Add Task" button.

2. **Edit a Task:**
    - Click the "Edit" button next to the task you want to edit.
    - Update the task description and priority level.
    - Click the "Save" button.

3. **Delete a Task:**
    - Click the "Delete" button next to the task you want to remove.

4. **Mark as Complete/Incomplete:**
    - Click on the task to toggle its completion status.

5. **Filter Tasks:**
    - Use the filter buttons to show all tasks, only completed tasks, or only pending tasks.

## Code Overview

### HTML

The HTML file (`index.html`) contains the structure of the to-do list application, including the input fields, buttons, and the list container.

### CSS

The CSS file (`style.css`) provides the styling for the application, ensuring a modern and responsive design. Key elements include:

- Gradient background for the body
- Hover and focus effects for interactive elements
- Responsive adjustments for different screen sizes

### JavaScript

The JavaScript file (`script.js`) handles the dynamic functionality of the application, including:

- Adding, editing, and deleting tasks
- Marking tasks as complete or incomplete
- Saving and loading tasks from local storage
- Filtering tasks based on their status
