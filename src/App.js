import Header from "./components/Header";
import Contact from "./components/Contact";
import AddContact from "./components/AddContact";
import { Routes, Route } from "react-router-dom";
import Success from "./components/Success"


function App() {
  
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/*" element={<AddContact />}/>
        <Route path="/confirm" element={<Contact/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>  
    </div>
  );
}

export default App;
