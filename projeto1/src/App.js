import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar/Navbar';
import Principal from './components/main/Principal';
import Title from './components/main/Title';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title/>
      <Principal/>
    </div>
  );
}

export default App;
