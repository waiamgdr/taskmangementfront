
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbaruser from './compement/Navbar';
import Profile from './compement/Profile';
import Home from './compement/Home';
import Login from './compement/Login';
import Register from './compement/Register';

function App() {
  return (
    <div>
      <Navbaruser />
     <Routes>
      <Route path='/' element={<><Home/></>}/>
      <Route path='/login' element={<><Login/></>}/>
      <Route path='/register' element={<><Register/></>}/>
      <Route path='/profile' element={<><Profile/></>}/>
     </Routes>
      
    </div>
  );
}

export default App;
