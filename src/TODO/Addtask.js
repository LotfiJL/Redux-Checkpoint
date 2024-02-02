import { ADD_TASK, DELETE_SINGLE_TASK } from "./ActionTypes";

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: { name },
});

export const deleteSingleTask = (index) => ({
  type: DELETE_SINGLE_TASK,
  payload: { index },
});
