import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlise from './toolkitSlise';
// import toolkitReducer from "./toolkitReducer";

//Создаем корневой Reducer с помощью combineReducers
const rootReducer = combineReducers({
  toolkit: toolkitSlise
});
// Создаем store. В toolkitSlise/toolkitReducer мы настраиваем нужное значение,
// И заносим в store.
export const store = configureStore({
  reducer: rootReducer
});
