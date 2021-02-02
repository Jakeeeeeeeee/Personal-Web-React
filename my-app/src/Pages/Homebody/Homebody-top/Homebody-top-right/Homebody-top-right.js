import "./Homebody-top-right.css";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";


const Homebodytopright = () => (
  <div  class="home_body_top_right">
            <h1 class="author_name">Jake Yang</h1>

            <h6>Web Developer</h6>

            <img
              class="icon"
              src={facebook}
              alt="facebook"
              width="40px"
            />
            <img
              class="icon"
              src={linkedin}
              alt="Linkedin"
              width="40px"
            />
            <img
              class="icon"
              src={instagram}
              alt="Linkedin"
              width="40px"
            />
          </div>
        
);

export default Homebodytopright;