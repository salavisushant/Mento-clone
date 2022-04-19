import {
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    REMOVE_TODO
} from './ActionTypes';


 export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};


export const addTodoSucces = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};


export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};


export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};


export const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  };
};
