import './App.css';
// import Route and Routes
import { Route, Routes } from 'react-router-dom';
// import bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
// import navbar component
import NavbarMain from './components/navbar';
// import all pages
import Landing from './Pages/landing';
import Compare from './Pages/compare';
import Timeline from './Pages/timeline';
import Convert from './Pages/convert';

function App() {
  return (
    <div className="App">
      {/* Navbar component to show on all pages */}
      <NavbarMain />
      {/* Routes, Route for each different page */}
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/compare' element={<Compare />} ></Route>
        <Route path='/timeline' element={<Timeline />} ></Route>
        <Route path='/convert' element={<Convert />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
