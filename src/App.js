


import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Update } from "./pages/Update";
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="/profile/update" element={<Update/>}/>
        </Routes>
    </Router>
              
  );
}

export default App;
