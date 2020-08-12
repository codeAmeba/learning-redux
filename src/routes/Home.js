import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import Todo from '../components/Todo';

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    addTodo(text);
  };

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder='write a todo'
          type='text'
        />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
