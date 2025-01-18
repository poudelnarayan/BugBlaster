import TicketForm from "./components/TicketForm";

const App = () => {
  const initialState = {
    tickets: [],
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm />
      </div>
    </div>
  );
};

export default App;
