import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser/CreateUser";
import LogIn from "./LogInPage/LogIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/Create" element={<CreateUser />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
