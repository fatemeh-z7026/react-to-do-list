import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default class ToDo extends Component {
  render() {
    return (
      // 'completed' class for completed todos
      <div className="todo" style={{ display: "flex" }}>
        <li className="todo-item">{this.props.title}</li>
        <button className="check-btn">
          <FontAwesomeIcon icon={faCheck} />
        </button>

        <button className="trash-btn">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    );
  }
}
