import './App.css';
import { ControlledInput } from './components/Controlled';
import { UncontrolledInput } from './components/Uncontrolled';

function App() {
  return (
    <div className="App">
      <ControlledInput />
      <UncontrolledInput />
    </div>
  );
}

export default App;
