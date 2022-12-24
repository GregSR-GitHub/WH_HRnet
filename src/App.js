import './App.css';
import Header from './layouts/Header';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
            <Route exact path="/"  element={<Home />} /> 
            <Route exact path="/employee-list"  element={<EmployeeList />} /> 
            <Route path="*"  element={<Home />} /> 
          </Routes>
      </Router>
    </div>
  );
}

export default App;
