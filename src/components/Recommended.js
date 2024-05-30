import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";

//Recommended Component
function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the Best fit</p>
      <div className="recommended__container">
        <div className="course-card">
          <img src={img1}></img>
          <h3>2023 Python Data Visualization Masterclass</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 74.99 <del>$ 120</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img2}></img>
          <h3>2023 Web Development</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 179.99 <del>$ 250</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img3}></img>
          <h3>2023 Master UI/UX designing with Figma</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 25.99 <del>$ 50</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img4}></img>
          <h3>Basic to advance programming with EMC</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 20 <del>$ 30</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Recommended;
