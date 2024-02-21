import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Recommended from './components/Recommended';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Recommended />
    </div>
  );
}

export default App;
