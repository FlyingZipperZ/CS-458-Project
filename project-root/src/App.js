import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import ElectromechanicalAssemblies from './components/Products/ElectromechanicalAssemblies';
import FiberopticCables from './components/Products/FiberopticCables';
import Magnetics from './components/Products/Magnetics';
import CoaxialCables from './components/Products/CoaxialCables';
import NycoilAssemblies from './components/Products/NycoilAssemblies'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route exact path="/electro-mechanical-assemblies" element={<ElectromechanicalAssemblies />} />
        <Route exact path="/fiber-optic-cables" element={<FiberopticCables />} />
        <Route exact path="/magnetics" element={<Magnetics />} />
        <Route exact path="/coaxial-cables" element={<CoaxialCables />} />
        <Route exact path="/nycoil-cable-assemblies" element={<NycoilAssemblies />} />
      </Routes>
    </Router>
  );
}

export default App;
