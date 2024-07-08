import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App1() {
  return <div>App1</div>;
}

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

const App = () => {
  return (
    <>
      <h1>App1</h1>

      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>

      <ul>
        <li>
          <Link to="/app1/page-1">Page1</Link>
        </li>
        <li>
          <Link to="/app1/page-2">Page2</Link>
        </li>
        <li>
          <Link to="/app2/page-a">App2 PageA</Link>
        </li>
        <li>
          <Link to="/app2/page-b">App2 PageB</Link>
        </li>
      </ul>
    </>
  );
};

export default App;
