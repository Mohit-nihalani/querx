import "./App.css";
import Home from "./components/Home";
import TreatmentPage from './TreatmentPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor from "./Doctor";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <TreatmentPage/> */}
      <Doctor/>
    </div>
  );
}

export default App;
