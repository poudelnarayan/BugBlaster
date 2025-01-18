import React from "react";

const TicketItem = ({ ticket, dispatch }) => {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  const onDeleteHandler = () => {
    dispatch({ type: "DELETE_TICKET", payload: { id } });
  };
  const onEditHandler = () => {};

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button" onClick={onDeleteHandler}>
        Delete
      </button>
      <button className="button" onClick={onEditHandler}>
        Edit
      </button>
    </div>
  );
};

export default TicketItem;
