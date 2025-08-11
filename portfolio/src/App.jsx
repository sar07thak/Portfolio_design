import React from 'react';
import Home from "./Pages/Home.jsx";
import Work from './Pages/Work.jsx';
import ProjectDetail from './Pages/ProjectDetail.jsx'; // ✅ New page
import { Route, Routes } from 'react-router-dom'; // ✅ correct import
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
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
