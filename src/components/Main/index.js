import "./style.css";
import photo from "./photo1.jpg";
export default function Main() {
  return (
    <div className="container">
      <div className="cart">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neq
        </p>
        <div>
          <img className="photo" src={photo} alt="" />
        </div>
      </div>
      <div className="cart">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ne
        </p>
      </div>
      <div className="cart">
        <p>Lorem ipsum dolor si quasi, modi earum culpa fugiat velit minus</p>
      </div>
      <div className="cart">
        <p>
          Lorem ipsum dolor sit amet quasi, modi earum culpa fugiat velit minus
        </p>
      </div>
    </div>
  );
}
