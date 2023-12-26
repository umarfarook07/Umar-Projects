todoArray=[];

function takeTodo() {
    const todoText = document.querySelector('.todo-input').value;
    const todoDate = document.querySelector('.todo-date').value;

    if (todoText === '') {
        alert('Invalid Todo');
        return;
    }

    if (todoDate === '') {
        alert('Enter Date');
        return;
    }

    const todoInput = {
        name: todoText,
        dueDate: todoDate
    };

    todoArray.push(todoInput);

    document.querySelector('.todo-input').value = '';
    document.querySelector('.todo-date').value = '';

    renderTodo();
}

function renderTodo() {
    let html = ``;
    for (let i = 0; i < todoArray.length; i++) {
        html += `<div><p>${todoArray[i].name}</p></div>
                 <div><p>${todoArray[i].dueDate}</p></div>
            <button class="delete-button" onclick="todoArray.splice(${i}, 1);renderTodo();">Delete</button>`;
    }
    document.querySelector('.todo-list').innerHTML = html;
}