import "./Nav.css";
import "./NavProps/NavProps";
import NavProps from "./NavProps/NavProps";
import PAGE from '../../constants/constants';


const Nav = ({currentPage, changePage}) => (
    <div >
        <NavProps  active={currentPage === PAGE.HOME} pageName={PAGE.HOME} changePage={changePage}>Home</NavProps>
        <NavProps  active={currentPage === PAGE.RESUME} pageName={PAGE.RESUME} changePage={changePage}>Resume</NavProps>
        <NavProps  active={currentPage === PAGE.SERVICES} pageName={PAGE.SERVICES} changePage={changePage}>Services</NavProps>
        <NavProps  active={currentPage === PAGE.PROJECT} pageName={PAGE.PROJECT} changePage={changePage}>Project</NavProps>
        <NavProps  active={currentPage === PAGE.CONTACT} pageName={PAGE.CONTACT} changePage={changePage}>Contact</NavProps>
    
        {/* <li href="javascript:void(0);" class="nav_icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </li> */}
      </div>
);

export default Nav;