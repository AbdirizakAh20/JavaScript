let h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const input = document.querySelector('#input')
const list = document.querySelector('#todos')

btn.addEventListener('click', (event) => { 
    event.preventDefault();
    const newTodo = document.createElement('li')
    const newText = input.value[0].toUpperCase[] + input.value.slice(1)
    const newTodoText = document.createTextNode(newText);
    newTodo.appendChild(newTodoText);
    list.appendChild(newTodo);
    input.value = ''
});