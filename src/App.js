import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Registration from './components/Registration.js';
import Login from './components/Login.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
