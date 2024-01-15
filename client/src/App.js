import './App.css';
import {Routes,Route} from "react-router-dom"
import MainPage from './components/MainPage';
import ExercisesPage from './components/ExercisesPage';
import Sidebar from './components/Sidebar';
import CalendarMainPage from './components/CalendarMainPage';
import UploadHistoryPage from './components/UploadHistoryPage';
import LoginPage from './components/LoginPage';
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">

    <div className='mainAppDiv'>
  
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/exercises' element={<ExercisesPage/>}/>
      <Route exact path='/calendar' element={<CalendarMainPage/>}/>
      <Route exact path='/uploadHistory' element={<UploadHistoryPage/>} />
      <Route exact path='/loginPage' element={<LoginPage/>} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
