import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Data from "./features/Data/pages/Data";
import Budget from "./features/Budget/pages/Budget";
import Settings from "./features/Settings/pages/Settings";
import Accounts from "./features/Accounts/pages/Accounts"

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<Settings />} />
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
