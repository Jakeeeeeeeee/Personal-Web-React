import "./Nav.css";
import "./NavProps/NavProps";
import NavProps from "./NavProps/NavProps";
import PAGE from "../../constants/constants";

const ITEMS = [
  {
    key: PAGE.HOME,
    text: "Home",
  },
  {
    key: PAGE.RESUME,
    text: "Resume",
  },
  {
    key: PAGE.SERVICES,
    text: "Services",
  },
  {
    key: PAGE.PROJECT,
    text: "Project",
  },
  {
    key: PAGE.CONTACT,
    text: "Contact",
  },
];

const Nav = ({ currentPage, changePage }) => (
  <div>
    {ITEMS.map((item) => (
      <NavProps
        key={item.key}
        active={(currentPage === item.key)}
        clicked={() => changePage(item.key)}
      >
        {item.text}
      </NavProps>
    ))}

    {/* <NavProps
      active={currentPage === PAGE.HOME}
      clicked={() => changePage(PAGE.HOME)}
    >
      Home
    </NavProps>

    <NavProps
      active={currentPage === PAGE.RESUME}
      clicked={() => changePage(PAGE.RESUME)}
    >
      Resume
    </NavProps>

    <NavProps
      active={currentPage === PAGE.SERVICES}
      clicked={() => changePage(PAGE.SERVICES)}
    >
      Services
    </NavProps>

    <NavProps
      active={currentPage === PAGE.PROJECT}
      clicked={() => changePage(PAGE.PROJECT)}
    >
      Project
    </NavProps>

    <NavProps
      active={currentPage === PAGE.CONTACT}
      clicked={() => changePage(PAGE.CONTACT)}
    >
      Contact
    </NavProps> */}

    {/* <li href="javascript:void(0);" class="nav_icon" clicked="myFunction()">
        <i class="fa fa-bars"></i>
        </li> */}
  </div>
);

export default Nav;
