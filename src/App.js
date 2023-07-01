import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="container App">
      <Navbar/>
      <LoginForm/>
    </div>
  );
}

export default App;
