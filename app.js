// Define variables
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Define event listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

// Define functions
function addTask(e) {
	// Prevent default form submission
	e.preventDefault();
	// Get task value
	const task = taskInput.value;
	// Create new list item
	const li = document.createElement('li');
	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(task));
	// Create delete button
	const deleteBtn = document.createElement('button');
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	deleteBtn.appendChild(document.createTextNode('X'));
	li.appendChild(deleteBtn);
	// Add list item to list
	taskList.appendChild(li);
	// Clear input field
	taskInput.value = '';
}

function removeTask(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure?')) {
			const li = e.target.parentElement;
			taskList.removeChild(li);
		}
	}
}
