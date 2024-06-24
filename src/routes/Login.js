import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'; 
import LogoImage from "../assets/logo_big.png";

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/v1/post/user/login', { id, password });
      navigate('/main');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleMain = () => {
    navigate('/Main');
  };

  return (
    <div className="container">
      <div className="form-login">
        <form onSubmit={handleLogin}>
          <img alt="LogoImage" src={LogoImage} />
          <footer className="welcome-text">Welcom back!<br/>Please login to your account.</footer>

          <div className="form-floating">
          <label>Email ID</label>
            <input
              type="id"
              className="form-control"
              id="floatingInput"
              placeholder="email@example.com"
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

          <div className="form-check">
            <label className="remember-me">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </label>
            <a href="/forgot-password" className="forgot-password">Forget Password?</a>
          </div>
          <button className="btn-primary" onClick={handleMain}>Log In</button>
        </form>
        <button className="btn-secondary" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}


export default Login;
