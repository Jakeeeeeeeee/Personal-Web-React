import "./Nav.css";


const Nav = () => (
    <ul id="nav">
        <li class="btn active" onclick="home()">Home</li>
        <li class="btn" onclick="resume()">Resume</li>
        <li class="btn" onclick="services()">Services</li>
        <li class="btn" onclick="project()">Project</li>
        <li class="btn" onclick="contact()">Contact</li>
        {/* <li href="javascript:void(0);" class="nav_icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </li> */}
      </ul>
);

export default Nav;