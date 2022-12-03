// import ModalPop from './components/ModalPop'
import AuthenticatedPage from './pages/AuthenticatedPage';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAlert from './pages/CreateAlert';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/started' element={<AuthenticatedPage/>}></Route>
      <Route path="/create-alert" element={<CreateAlert/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
