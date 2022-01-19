import { Component } from "react";
import logo from "../../assets/image/logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-left">
            <img src={logo} />
            <input type="text" placeholder="Search" />
            <a href="#">
              {" "}
              <i className=" fa fa-search" />
            </a>
          </div>
          <div className="nav-middle">
            <a href="#" className="active">
              <i className="fa fa-home" />
            </a>
            <a href="#">
              <i className="fa fa-user" />
            </a>
            <a href="#">
              <i className="fa fas fa-user-friends" />
            </a>
            <a href="#">
              <i className="fa fa-play-circle" />
            </a>
          </div>
          <div className="nav-right">
            <span className="profile" />
            <a href="#">
              <i className="fa fa-bell" />
            </a>
            <a href="#">
              <i className="fa fa-comment" />
            </a>
            <a href="#">
              <i className="fas fa-ellipsis-h" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
