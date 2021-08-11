import './App.css';
import Clock from "./components/clock";
import ShowTime from './components/ShowTime.jsx';

function App() {


  return (
    <>
      <div className="App">
        <div>
        <ShowTime timeState={true}></ShowTime>          
        </div>
        <Clock></Clock>
        <Clock></Clock>
       
      </div>
    </>
  );
}



export default App;
