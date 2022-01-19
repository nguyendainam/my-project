import { Component } from "react";
import baiviet from "../../../src/assets/image/baiviet.jpg";
import user from "../../../src/assets/image/user.png";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="middle-panel">
        {/* //story */}
        {/* <div class="story-section">
              <div class="story">
                  <img src="image/logo.png" alt="">
                  <div class="dp-container"></div>
                  <p class="name"> Sờ to ri</p>
              </div>
          </div> */}
        {/* // end story */}
        <div className="post create ">
          <div className="post-top">
            <div className="dp">
              <img src={user} alt="" />
            </div>
            <input type="text" name id placeholder="Bạn đang nghĩ gì" />
          </div>
          <div className="post-bottom">
            <div className="action">
              <i className="fa fa-video" />
              <span>Live video</span>
            </div>
            <div className="action">
              <i className="fa fa-image" />
              <span>Photo/Video</span>
            </div>
            <div className="action">
              <i className="fa fa-smile" />
              <span>Feeling/Activity</span>
            </div>
          </div>
        </div>
        {/* HIỂN THỊ BÀI VIÊT */}
        <div className="post">
          <div className="post-top">
            <div className="dp">
              <img src={user} alt="" />
            </div>
            <div className="post-info">
              <p className="name">Tên người đăng bài </p>
              <span className="time">12 hrs ago</span>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
          <div className="post-content">
            <p>một cái nội dung gì đó chưa nghĩ ra</p>
            <br /> <img src={baiviet} />
          </div>
          <div className="post-bottom">
            <div className="action">
              <i className="far fa-thumbs-up" />
              <span>Like</span>
            </div>
            <div className="action">
              <i className="far fa-comment" />
              <span>Comment</span>
            </div>
            <div className="action">
              <i className="fa fa-share" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
