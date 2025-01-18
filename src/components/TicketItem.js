import React from "react";

const TicketItem = ({ ticket, dispatch }) => {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-Medium",
    3: "priority-High",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TicketItem;
