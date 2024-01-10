import './App.css';
import {Routes,Route} from "react-router-dom"
import MainDashBoardComponent from './components/mainDashBoard';
import OperationsCardComponent from './components/pdfUploaderCard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<MainDashBoardComponent/>}/>
      <Route exact path='/card' element={<OperationsCardComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
