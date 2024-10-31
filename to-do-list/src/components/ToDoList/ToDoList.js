import React, { Component } from "react";
import ToDo from "./ToDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      toDoTitle: "",
      status: "all",
    };
    this.removeToDo = this.removeToDo.bind(this);
    this.completeToDo = this.completeToDo.bind(this);
    this.statusHandler = this.statusHandler.bind(this);
  }

  toDoTitleHandler(event) {
    this.setState({
      toDoTitle: event.target.value,
    });
  }
  addToList(event) {
    event.preventDefault();
    let newTask = {
      id: this.state.toDoList.length + 1,
      title: this.state.toDoTitle,
      completed: false,
    };
    this.setState((prevState) => ({
      toDoList: [...prevState.toDoList, newTask], // Append the new task to the todo array
      toDoTitle: "",
    }));
  }
  removeToDo(todoId) {
    console.log("", todoId);
    let remainingToDo = this.state.toDoList.filter(
      (todo) => todo.id !== todoId
    );
    this.setState({
      toDoList: remainingToDo,
    });
  }

  completeToDo(todoId) {
    console.log(todoId);

    let newTodoList = [...this.state.toDoList];
    newTodoList.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({
      toDoList: newTodoList,
    });
  }
  statusHandler(event) {
    this.setState({
      status: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.addToList(event);
          }}
        >
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            value={this.state.toDoTitle}
            onChange={(event) => {
              this.toDoTitleHandler(event);
            }}
          />
          <button className="todo-button" type="submit">
            <FontAwesomeIcon icon={faAdd} />
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={this.statusHandler}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
          {this.state.status === "uncompleted" &&
              this.state.toDoList
                .filter((todo) => !todo.completed)
                .map((todo) => (
                  <ToDo
                    key={todo.id}
                    {...todo}
                    remove={this.removeToDo}
                    complete={this.completeToDo}
                  />
                ))}
            {this.state.status === "completed" &&
              this.state.toDoList
                .filter((todo) => todo.completed)
                .map((todo) => (
                  <ToDo
                    key={todo.id}
                    {...todo}
                    remove={this.removeToDo}
                    complete={this.completeToDo}
                  />
                ))}
            {this.state.status === "all" &&
              this.state.toDoList.map((todo) => (
                <ToDo
                  key={todo.id}
                  {...todo}
                  remove={this.removeToDo}
                  complete={this.completeToDo}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
