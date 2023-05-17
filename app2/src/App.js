import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App2() {
  return <div>App2</div>;
}

function PageA() {
  return <div>PageA</div>;
}

function PageB() {
  return <div>PageB</div>;
}

const App = () => {
  return (
    <>
      <h1>App2</h1>

      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
      </Routes>

      <ul>
        <li>
          <Link to="/app2/page-a">PageA</Link>
        </li>
        <li>
          <Link to="/app2/page-b">PageB</Link>
        </li>
      </ul>
    </>
  );
};

export default App;
