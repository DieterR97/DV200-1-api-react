// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar';
import Landing from './Pages/landing';
import Compare from './Pages/compare';
import Timeline from './Pages/timeline';
import VideoTesting from './Pages/videoTesting';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/compare' element={<Compare />} ></Route>
        <Route path='/timeline' element={<Timeline />} ></Route>
        <Route path='/videoTesting' element={<VideoTesting />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
