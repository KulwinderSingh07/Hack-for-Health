import './App.css';
import {Routes,Route} from "react-router-dom"
import MainDashBoardComponent from './components/mainDashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<MainDashBoardComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
