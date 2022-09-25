import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import ElectromechanicalAssemblies from './components/Products/ElectromechanicalAssemblies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route exact path="/electro-mechanical-assemblies" element={<ElectromechanicalAssemblies />} />
      </Routes>
    </Router>
  );
}

export default App;
