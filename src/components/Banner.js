//Banner Component
import banner_img from "../assets/images/banner.jpg";
function Banner() {
  return (
    <div className="sale-image">
      <img src={banner_img} alt="banner"></img>
      <div className="sale-image__offer">
        <h2>udemy flash sale</h2>
        <p>Get the top courses for just 499 only</p>
      </div>
    </div>
  );
}
export default Banner;
