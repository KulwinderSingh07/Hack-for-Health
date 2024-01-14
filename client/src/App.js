import './App.css';
import {Routes,Route} from "react-router-dom"
import MainPage from './components/MainPage';
import ExercisesPage from './components/ExercisesPage';
import Sidebar from './components/Sidebar';
import CalendarMainPage from './components/CalendarMainPage';
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">

    <div className='mainAppDiv'>
  
        <Sidebar/>
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/exercises' element={<ExercisesPage/>}/>
      <Route exact path='/calendar' element={<CalendarMainPage/>}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
