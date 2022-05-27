import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return code ? <Dashboard code={code} /> : <Login />;
};

export default App;
