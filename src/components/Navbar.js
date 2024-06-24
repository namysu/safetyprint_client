import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import LogoImage from "../assets/logo_small.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLogOut = () => {
    // 로그아웃 로직 추가 (예: 로그아웃 후 /login 페이지로 이동)
    // 여기서는 React Router의 history 객체를 사용하여 이동합니다.
    this.props.history.push('/login');  // assuming `history` is passed as a prop
  };

  render() {
    return (
      
      <nav className="NavbarItems">
        <Link to="/main">
          <img className="navbar-logo" alt="LogoImage" src={LogoImage} />
        </Link>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <button className="nav-links" onClick={this.props.onLinkCreationModalOpen}>Create Link</button>
          </li>
          <li>
            <button className="nav-links" onClick={this.props.onLinkAdditionModalOpen}>Add Link</button>
          </li>
          <Link to="/login">
            <button >Log Out</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;