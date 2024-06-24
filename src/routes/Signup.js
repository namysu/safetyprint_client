import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';
import LogoImage from "../assets/logo_simple.png";

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [division, setDivision] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/v1/post/user/register', { id, password });
      navigate('/login');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const handleLogin = () => {
    alert('회원가입이 완료되었습니다. 로그인해주세요.');
    navigate('/login');
  };

  return (
    <div className="container">
      <main className="form-signup">
        <form onSubmit={handleSignup}>
          <img alt="LogoImage" src={LogoImage} />
          <h1 className="title">Sign Up</h1>

          <div className="form-floating">
            <label>Email ID</label>
            <input
              type="id"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="form-floating">
          <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-floating">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-floating">
            <label>Division/소속</label>
            <input
              type="division"
              className="form-control"
              id="floatingInput"
              placeholder=""
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              required
            />
          </div>

          <button className="btn-primary" onClick={handleLogin}>Sign Up</button>
        </form>
        <button className="btn-secondary" onClick={handleLogin}>Log In</button>
      </main>
    </div>
  );
}

export default Signup;
