import { createAction, createReducer } from '@reduxjs/toolkit';
// Дефолтное состояние для счетчика
const defaultState = {
  count: 1,
  todos: ['снять видео', 'смонтировать видео', 'рассказать про toolkit']
};
// Создаем action
export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
// Создаем Reducer
export default createReducer(defaultState, {
  [increment]: function (state) {
    state.count = state.count + 1;
  },
  [decrement]: function (state) {
    state.count = state.count - 1;
  }
});

console.log(defaultState);
