import React, { Component } from "react";
import ToDo from "./ToDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default class ToDoList extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" className="todo-input" maxLength="40" />
          <button className="todo-button" type="submit">
            <FontAwesomeIcon icon={faAdd} />
          </button>
          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            <ToDo />
          </ul>
        </div>
      </div>
    );
  }
}
