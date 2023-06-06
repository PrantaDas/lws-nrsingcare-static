import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import NavBar from './Components/Shared/NavBar/NavBar';
import Routing from './Features/Routing/Routing';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routing />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
