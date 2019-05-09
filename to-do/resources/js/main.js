var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
    todo: [],
    completed: []
};

//console.log(data);


//console.log( JSON.parse(localStorage.getItem('todoList' )));
// remove and complete icons in svg format

var removeSVG = '<svg enable-background="new 0 0 22 22" version="1.1" viewBox="0 0 22 22" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path class="fill" d="m16.1 3.6h-1.9v-0.3c0-1.3-1-2.3-2.3-2.3h-1.7c-1.3 0-2.4 1-2.4 2.3v0.2h-1.9c-1.3 0-2.3 1-2.3 2.3v1.3c0 0.5 0.4 0.9 0.9 1v10.5c0 1.3 1 2.3 2.3 2.3h8.5c1.3 0 2.3-1 2.3-2.3v-10.4c0.5-0.1 0.9-0.5 0.9-1v-1.3c-0.1-1.3-1.1-2.3-2.4-2.3zm-7-0.3c0-0.6 0.5-1.1 1.1-1.1h1.7c0.6 0 1.1 0.5 1.1 1.1v0.2h-3.9v-0.2zm7.2 15.4c0 0.6-0.5 1.1-1.1 1.1h-8.5c-0.6 0-1.1-0.5-1.1-1.1v-10.5h10.6l0.1 10.5zm0.9-11.7h-12.4v-1.1c0-0.6 0.5-1.1 1.1-1.1h10.2c0.6 0 1.1 0.5 1.1 1.1v1.1z"/><path class="fill" d="m11 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v6.8c0 0.3-0.2 0.6-0.6 0.6z"/><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/><path class="fill" d="m14 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8c0 0.3-0.3 0.6-0.6 0.6z"/></svg>'
var completeSVG = '<svg enable-background="new 0 0 22 22" version="1.1" viewBox="0 0 22 22" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><rect class="noFill" width="22" height="22"/><path class="fill" d="m9.7 14.4c-0.2 0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8 0-1.1s0.8-0.3 1.1 0l2.1 2.1 4.8-4.8c0.3-0.3 0.8-0.3 1.1 0s0.3 0.8 0 1.1l-5.3 5.3c-0.2 0.2-0.4 0.3-0.6 0.3z"/></svg>'
renderTodoList(); //render todo lost after SVG variables have been declared

//user clicked on the add button
// if there is any text inside the item field, add that text to the todo list

document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        addItemToDOM(value);
    
}

});

document.getElementById('item').addEventListener('keydown', function (e) {
    var value = this.value;
    if (e.code === 'Enter' && value) {
        addItemToDOM(value);
    }
});

function addItem (value) {
    addItemToDOM(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
    dataObjectUpdated();
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) return;

    for (var i = 0; i < data.todo.length; i++) {
        var value = data.todo[i];
        addItemToDOM(value);

    }

    for (var j = 0; j < data.completed.length; j++) {
        var value = data.completed[j];
        addItemToDOM(value, true);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}
function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if ( id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
    }
    dataObjectUpdated();

    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if ( id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.completed.push(value);
    }
    dataObjectUpdated();


    // check if the item should be added to the completed list or to be re-added to the todo list
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo fade-in');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

}

// when the user clicks the + button the list item, div and button content is created
function addItemToDOM(text, completed) {
var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

 var item = document.createElement('li');
 item.innerText = text;

 var buttons = document.createElement('div');
 buttons.classList.add('buttons');

 var remove = document.createElement('button');
remove.classList.add('remove');
remove.innerHTML = removeSVG;

// add click event for removing item
remove.addEventListener('click', removeItem);

 var complete = document.createElement('button');
complete.classList.add('complete');
complete.innerHTML = completeSVG;

// add click event for completed items
complete.addEventListener('click', completeItem);

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);


list.insertBefore(item, list.childNodes[0]);
}
