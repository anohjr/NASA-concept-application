/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import logo from "../assets/nasa-logo.png";

function LogoNasa(props) {
  return (
    <div
      id="nasa_logo_container"
      className={props.displayImgotd ? "display-off" : "display-on"}
      style={props.displayImgotd ? null : {"transitionDelay":"1s"}}
    >
      <img id="logo_img" src={logo} alt="logo of NASA" />
      <div id="logo_text_container">
        <h3 id="nasa_title">NASA</h3>
        <h3
          id="nasa_text"
          style={{ width: props.displayGallery ? "50%" : null }}
        >
          Concept Application
        </h3>
      </div>
    </div>
  );
}
export default LogoNasa;
