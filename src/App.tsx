import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Example from "./visx_test/Example";
import Accounts from "./components/Accounts";

function Data() {
  return (
    <>
      <p>Data</p>
      <Example width={375} height={375} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/budget" element={<>Budget</>} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<>Settings</>} />
        </Routes>
      </main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/budget">Budget</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
