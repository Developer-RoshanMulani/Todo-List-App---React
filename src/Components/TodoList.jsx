import React from "react";

const TodoList = (props) => {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons"></span>
      <i
        className="fa-solid fa-trash-can icon-delete"
        onClick={() => {
          props.deleteItem(props.index);
        }}
      ></i>
    </li>
  );
};

export default TodoList;
