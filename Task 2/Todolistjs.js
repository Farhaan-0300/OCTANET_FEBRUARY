window.addEventListener('DOMContentLoaded', (event) => {
        const todoList = document.querySelector('.todo-list');
        const listItems = Array.from(todoList.querySelectorAll('li'));

        listItems.forEach((item) => {
            item.addEventListener('change', () => {
                const sortedItems = listItems.sort((a, b) => {
                    const priorityA = parseInt(a.querySelector('input[type="number"]').value);
                    const priorityB = parseInt(b.querySelector('input[type="number"]').value);
                    return priorityA - priorityB;
                });

                sortedItems.forEach((sortedItem) => {
                    todoList.appendChild(sortedItem);
                });
            });
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('.todo-list');
    const newTaskButton = document.getElementById('newTaskButton');
    const newTaskPlaceholder = document.querySelector('.new-task');

    newTaskButton.addEventListener('click', function() {
        newTaskPlaceholder.style.display = 'block';
    });

    todoList.addEventListener('change', function(event) {
        const target = event.target;
        if (target.type === 'checkbox' && target.checked) {
            const listItem = target.closest('li');
            const newItem = document.createElement('li');
            newItem.classList.add('todo-item'); 
            newItem.innerHTML = `
                <input type="checkbox">
                <span class="todo-label">
                    <input type="text" placeholder="Enter your to-do item here">
                    <input type="text" placeholder="Enter the deadline here">
                    <input type="number" min="1" placeholder="Priority">
                </span>
            `;
            
            todoList.appendChild(newItem);
            
            setTimeout(function() {
                todoList.removeChild(listItem);
            }, 1000); 
        }
    });

    const clearButton = document.getElementById('clearButton');

    
    clearButton.addEventListener('click', function() {
        
        window.location.reload();
    });
});
