import './App.css';
import {Routes,Route} from 'react-router-dom';

import Footer  from './components/Footer';
import Header from './components/Header';

import Citizen from  './components/Citizen';

import Myvec from './components/Myvec';
import Myper from './components/Myper';
import Applyrc from './components/Applyrc';
import Applylic from './components/Applylic';
import Applyper from './components/Applyper';


function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Citizen/>}></Route>
        <Route path='Myvec' element={<Myvec/>}></Route>
        <Route path='Myper' element={<Myper/>}></Route>
        <Route path='Applyrc' element={<Applyrc/>}></Route>
        <Route path='Applylic' element={<Applylic/>}></Route>
        <Route path='Applyper' element={<Applyper/>}></Route>
      </Routes>
      
      <Footer />
      
 </>
  );
}

export default App;
