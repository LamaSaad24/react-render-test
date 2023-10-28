import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
