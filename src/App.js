import './App.css';
import NavBar from './Components/Shared/NavBar/NavBar';
import Routing from './Features/Routing/Routing';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;
