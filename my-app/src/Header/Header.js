import Logo from './Logo/Logo';
import './Header.css'
import Nav from './Nav/Nav';


const Header = () => (
    
    <div className="header">
      <div className="header_left">
        <Logo></Logo>
      </div>

      <div className="header_right">
        <Nav active/>
      </div>
      </div>
  );

  export default Header;