import React, { useState } from "react";

const TicketForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({ type: "ADD_TICKET", payload: ticketData });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([key, value]) => (
          <label className="priority-label" key={key}>
            <input
              type="radio"
              value={key}
              checked={priority === key}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            />
            {value}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default TicketForm;
