import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";

const App = () => {
  const initialState = {
    tickets: [],
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;
