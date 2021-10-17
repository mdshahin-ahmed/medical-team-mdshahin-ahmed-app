// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Doctors from './Components/Doctors/Doctors';


function App() {
  return (
    <div className="App">
      {/* call header components  */}
      <Header></Header>  
      {/* call doctor components  */}
      <Doctors></Doctors>    
    </div>
  );
}

export default App;
