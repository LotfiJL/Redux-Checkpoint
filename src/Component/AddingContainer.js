import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, deleteSingleTask } from "../TODO/Addtask";
import { useDispatch } from "react-redux";
import "./Adding.css";
const TodoApp = ({ todos, Addnew }) => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const HandleTask = () => {
    Addnew(newTodo);
    setNewTodo("");
  };

  const HandleDelete = (index) => {
    dispatch(deleteSingleTask(index));
  };

  return (
    <div className="container col-md-6 mx-auto mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo.task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => HandleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary  " onClick={HandleTask}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Addnew: (name) => dispatch(addTask(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
