import './App.css';
import {Routes,Route} from "react-router-dom"
import OperationsCardComponent from './components/pdfUploaderCard';
import MainPage from './components/MainPage';
import ExercisesPage from './components/ExercisesPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

    <div className='mainAppDiv'>
  
        <Sidebar/>
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/card' element={<OperationsCardComponent/>}/>
      <Route exact path='/exercises' element={<ExercisesPage/>}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
