import './App.css';
import {Routes,Route} from "react-router-dom"
import OperationsCardComponent from './components/pdfUploaderCard';
import MainPage from './components/MainPage';
import PopUpCompoent from './components/popUpComponent';
import MainDashBoardComponent from './components/mainDashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/dash' element={<MainDashBoardComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
