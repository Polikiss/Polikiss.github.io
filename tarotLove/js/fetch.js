document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const todoListContainer = document.getElementById('ul-task-list');
    const errorMessage = document.getElementById('error-message');
    const randomNum = Math.random();

    function addFetchToList(todos) {
        todos.forEach(todo=> {
            const todoItem = document.createElement('li');
            const todoText=`${todo.id}) ${todo.title}`
            if (todo.completed) {
                todoItem.classList.add("checked");
            }
            todoItem.textContent = todoText;
            todoListContainer.appendChild(todoItem);
            addCloseButton(todoItem);
        });
        saveList();
    }

    function filterCondition(todo) {
        if(randomNum < 0.2){
            return todo.completed === true;
        }
        if (randomNum < 0.5) {
            return todo.id <= 10;
        }

        return todo.id >= 10 && todo.id <= 20;

    }

    function fetchTodoList() {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => data.filter(filterCondition));
    }

    function loadTodoList() {
        if(preloader.classList.contains('hidden')){
            preloader.classList.remove('hidden')
        }
        errorMessage.classList.add('hidden');

        fetchTodoList()
            .then(listTodo => {
                addFetchToList(listTodo);
                if(!preloader.classList.contains('hidden')){
                    preloader.classList.add('hidden')
                }
            })
            .catch(error => {
                errorMessage.classList.remove('hidden');
                if(!preloader.classList.contains('hidden')){
                    preloader.classList.add('hidden')
                }
            });
    }

    loadTodoList();

});
localStorage.clear();