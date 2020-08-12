import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [ ...state, { text: action.text, id: Date.now() } ];
		case DELETE_TODO:
			return state;
		default:
			return state;
	}
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintTodos = () => {
	const todos = store.getState();
	ul.innerHTML = '';
	todos.forEach(todo => {
		const li = document.createElement('li');
		li.id = todo.id;
		li.innerText = todo.text;
		ul.appendChild(li);
	});
};

store.subscribe(paintTodos);

const addTodo = text => {
	store.dispatch({ type: ADD_TODO, text });
};

const onSubmit = e => {
	e.preventDefault();
	const todo = input.value;
	input.value = '';
	addTodo(todo);
};

form.addEventListener('submit', onSubmit);
