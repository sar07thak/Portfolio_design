import React from 'react';
import Home from "./pages/Home.jsx";
import Work from './pages/Work.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx'; // ✅ New page
import { Route, Routes } from 'react-router-dom'; // ✅ correct import
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work/:projectName' element={<ProjectDetail />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
