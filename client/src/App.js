import './App.css';
import {Routes,Route} from "react-router-dom"
import OperationsCardComponent from './components/pdfUploaderCard';
import MainPage from './components/MainPage';
import ExercisesPage from './components/ExercisesPage';
import Sidebar from './components/Sidebar';
// import Sidebar from "./components/Sidebar";
import PopUpCompoent from './components/popUpComponent';

function App() {
  return (
    <div className="App">

    <div className='mainAppDiv'>
  
        <Sidebar/>
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/popup' element={<PopUpCompoent/>}/>
      <Route exact path='/exercises' element={<ExercisesPage/>}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
