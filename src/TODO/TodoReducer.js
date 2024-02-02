import { ADD_TASK, DELETE_SINGLE_TASK } from "./ActionTypes";
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload.name, completed: false },
        ],
      };

    case DELETE_SINGLE_TASK:
      const updatedTodos = state.todos.filter(
        (todo, index) => index !== action.payload.index
      );
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
