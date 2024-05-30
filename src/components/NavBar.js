//Navbar Component
function Navbar() {
  return (
    <div className="nav">
      <div className="nav__s1">
        <h1 className="nav__s1__title">Udemy</h1>
      </div>
      <div className="nav__s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className="search for anything here"></input>
      </div>
      <div className="nav__s3">
        <p>courses</p>
        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            <p>you did not purchase anything</p>
          </div>
        </div>

        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="nav__s4">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
export default Navbar;
