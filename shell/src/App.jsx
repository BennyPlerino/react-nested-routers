import React from "react";
import {Navigate, Link, Routes, Route, BrowserRouter} from "react-router-dom";

import App1 from 'app1/App';
import App2 from 'app2/App';

function Home() {
  return <div>Home</div>;
}

const App = () => {
  return <>
    <h1>Shell</h1>
    
    <BrowserRouter basename="/user/dashboard">          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app1/*" element={<App1 />}/>
        <Route path="/app2/*" element={<App2 />} />   
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>     

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/app1/page-1">Page 1</Link></li>
        <li><Link to="/app1/page-2">Page 2</Link></li>
        <li><Link to="/app2/page-a">PageA</Link></li>
        <li><Link to="/app2/page-b">PageB</Link></li>
      </ul>      
    </BrowserRouter>    
  </>
}

export default App;