let h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const input = document.querySelector('#input')
const list = document.querySelector('#todos')

btn.addEventListener('click', (event) => { 
    event.preventDefault();
    const newTodo = createNewTodo();
    list.appendChild(newTodo);
    input.value = '';
});

const createNewTodo = () => {
    const newTodo = document.createElement('li');
    const newTodoText = document.createTextNode(
        capitaliseFirstLetter(input.value)
    );
    newTodo.appendChild(newTodoText);
    return newTodo;
};

const capitaliseFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};