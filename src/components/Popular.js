import img9 from "../assets/images/9.jpg";
import img6 from "../assets/images/6.jpg";
import img12 from "../assets/images/12.jpg";
import img11 from "../assets/images/11.jpg";
import img7 from "../assets/images/7.jpg";
import img4 from "../assets/images/4.jpg";
import img13 from "../assets/images/13.jpg";
import img3 from "../assets/images/3.jpg";

//popular component

function Popular() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>
      <div className="popular__container">
        <div className="course-card">
          <img src={img9}></img>
          <h3>2023 Python Data Visualization MasterclassName</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 200 <del>$ 250</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img6}></img>
          <h3>2023 Web Development</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 99.99 <del>$ 150</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img12}></img>
          <h3>Learn Ethical Hacking From Scratch</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 174.99 <del>$ 200</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img11}></img>
          <h3>Cyber Security: From Beginner to Expert (2024)</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 74.99<del>$ 150</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img7}></img>
          <h3>Complete JS Bootcamp</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 54.99<del>$ 120</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img4}></img>
          <h3>FullStack Web Development Bootcamp</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $79.99 <del>$ 120</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img13}></img>
          <h3>Ajax Development</h3>
          <p>Mark Lassoff</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 59.99 <del>$ 120</del>
          </p>
        </div>

        <div className="course-card">
          <img src={img3}></img>
          <h3>ReactJS : The Ulitmate Guide to Task Tracker App</h3>
          <p>Col Steale</p>
          <p>4.9 ★★★★★</p>
          <p>
            $ 54 <del>$ 75</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Popular;
