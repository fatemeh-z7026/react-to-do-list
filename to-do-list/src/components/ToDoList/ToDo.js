import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default class ToDo extends Component {
  delete(id) {
    this.props.remove(id);
  }
  done(id) {
    this.props.complete(id);
  }
  render() {
    return (
      // 'completed' class for completed todos
      <div
        className={`todo ${this.props.completed ? "completed" : ""}`}
        style={{ display: "flex" }}
      >
        <li className="todo-item">{this.props.title}</li>
        <button className="check-btn" onClick={() => this.done(this.props.id)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>

        <button
          className="trash-btn"
          onClick={() => {
            this.delete(this.props.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    );
  }
}
