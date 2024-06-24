import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Main from './routes/Main';
import FileStatus from './routes/FileStatus';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/file-status/:id" element={<FileStatus />} />
      </Routes>
    </div>
  );
}

export default App;
