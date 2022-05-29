import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  removeLastTodo
} from './toolkitRedux/toolkitSlise';
// import { increment, decrement } from './toolkitRedux/toolkitReducer'

const addAsyncTodo = (el) => {
  return async (dispathch) => {
    setTimeout(() => {
      dispathch(addTodo(el));
    }, 2000);
  };
};

function App() {
  const [todo, setTodo] = useState('');
  console.log(todo);
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispathch = useDispatch();

  const goTodo = (el) => {
    setTodo(el.target.value);
  };
  return (
    <div className="App">
      <h1 className="text-center">Счетчик {count}</h1>
      <div className="d-flex flex-wrap justify-content-center m-auto">
        <button
          className="btn bg-primary text-white m-2"
          onClick={() => dispathch(increment())}
        >
          increment
        </button>
        <button
          className="btn bg-primary text-white m-2"
          onClick={() => dispathch(decrement())}
        >
          decrement
        </button>
        <button
          className="btn bg-primary text-white m-2"
          onClick={() => dispathch(addTodo(todo ? todo : 'null'))}
        >
          Добавить todo
        </button>
        <button
          className="btn bg-primary text-white m-2"
          onClick={() => dispathch(addAsyncTodo(todo ? todo : 'null'))}
        >
          Добавить Async todo
        </button>
        <button
          className="btn bg-primary text-white m-2"
          onClick={() => dispathch(removeLastTodo())}
        >
          Удалить todo
        </button>
      </div>
      <div className=" mx-5 text-center">
        <input
          className="form-control"
          type="search"
          placeholder="Create todo"
          aria-label="default input example"
          onChange={goTodo}
        ></input>
      </div>
      <ul className="m-5">
        {todos.length === 0 ? (
          <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle-fill me-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div>Wonderful! You have completed all tasks for today!</div>
          </div>
        ) : (
          todos.map((todo) => (
            <li
              className="list-group-item d-flex align-items-center border-0 mb-2 rounded mx-5"
              style={{ backgroundColor: '#f4f6f7' }}
              key={todo}
            >
              <input
                className="form-check-input me-2"
                type="checkbox"
                onClick={() => console.log('1')}
              />
              <p className="m-auto">{todo}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default App;
