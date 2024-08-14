import React from 'react';
import GlobalStyle from './style/globalStyle';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/resume';
import Footer from './components/Footer';
import NodeJsPage from './components/nodejs';

import HtmlPage from './components/HtmlPage';
import CssPage from './components/css';
import JavaScriptPage from './components/javaScript';
import ReactPage from './components/react';

import ExpressJsPage from './components/Express';
import MongoDbPage from './components/mongodb';
import JavaPage from './components/java';
function App() {
  return (
    <Router>
    <GlobalStyle />
    
 <MainHeader/>
 <Routes>
   <Route path="/" element={<Home />} />

   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/Resume" element={<Resume />} />
   <Route path="/html" element={<HtmlPage />} />
        <Route path="/Css" element={<CssPage />} />
        <Route path="/javaScript" element={<JavaScriptPage />} />
        <Route path="/nodejs" element={<NodeJsPage/>} />
        <Route path="/express" element={<ExpressJsPage/>} />
        <Route path="/react" element={<ReactPage/>} />
        <Route path="/MongoDb" element={<MongoDbPage/>} />
        <Route path="/java" element={<JavaPage/>} />
 </Routes>
 <Footer />
</Router>
);
}

export default App;
