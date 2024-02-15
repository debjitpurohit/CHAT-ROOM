

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"
import { Toaster } from 'react-hot-toast';




function App() {




  return (


    <Router>
    <Routes>
      <Route exact path="/" element={<Join/>} />
      <Route path="/chat" element={<Chat/>} />
      </Routes>
      <Toaster/>
    </Router>

  );
}

export default App;