import "./style.css";
import logo from "./logoimage.png";
import image from "./user.png";
export default function Header() {
  return (
    <div className="Header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="nav-bar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
      </div>
      <div>
        <img className="icon" src={image} alt="" />
      </div>
    </div>
  );
}
