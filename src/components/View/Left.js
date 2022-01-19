import { Component } from "react";
import user from "../../../src/assets/image/user.png";

class Left extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="left-panel">
          <ul>
            <li>
              <span className="profile">
                <img src={user} alt="" />
              </span>
              <div className="name">TêN</div>
            </li>
            <li>
              <i className="fa fas fa-user-friends" />
              <div className="friend">Bạn Bè</div>
            </li>
            <li>
              <i className="fa fa-comment" />
              <div className="message">Tin Nhắn</div>
            </li>
            <li>
              <i className="fas fa-video" />
              <div className="Video">Video</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Left;
