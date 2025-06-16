import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Editorpage } from './pages/Editorpage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
      <>
      <div>

    <ToastContainer/>
</div>


      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/editor/:roomId' element={<Editorpage />} />
      </Routes>
      </>
    
  );
  
}

export default App;