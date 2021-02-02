import "./Nav.css";
import "./NavProps/NavProps";
import NavProps from "./NavProps/NavProps";


const Nav = ({active,}) => (
    <div >
        <NavProps  active={active}>Home</NavProps>
        <NavProps  active={active}>Resume</NavProps>
        <NavProps  active={active}>Services</NavProps>
        <NavProps  active={active}>Project</NavProps>
        <NavProps  active={active}>Contact</NavProps>
    
        {/* <li href="javascript:void(0);" class="nav_icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </li> */}
      </div>
);

export default Nav;