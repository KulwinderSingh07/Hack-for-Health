import './App.css';
import {Routes,Route} from "react-router-dom"
import OperationsCardComponent from './components/pdfUploaderCard';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/card' element={<OperationsCardComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
