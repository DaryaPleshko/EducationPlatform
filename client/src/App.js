import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import RegPage from './Pages/RegPage/RegPage';
import AuthPage from './Pages/AuthPage/AuthPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/reg' element={<RegPage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
