import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './component/navbar.component.js';
import Dashboard from './component/Dashboard.js';
import Profile from './component/Profile.js';
import FriendList from './component/FriendList.js';
import Split from './component/Split.js';
import Calculate from './component/SplitComponent/Calculate.js';
import './css/App.css'




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/friends" exact element={<FriendList />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/split" exact element={<Split />} />
          <Route path="/calculate" exact element={<Calculate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
