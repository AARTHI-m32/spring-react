import Header from './components/Header';
import Adduser from './components/Adduser'
import Login from './components/Login'
import Details from './components/Details';
import Form from './components/Form';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
