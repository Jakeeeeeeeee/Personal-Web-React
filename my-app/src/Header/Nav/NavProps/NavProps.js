import "./NavProps.css";

const NavProps = ({active, children,}) => {
    let className = 'navItems';

    if (active) {
        className = 'navItems--active'
    }

    return (
        <ul className = {className}>
        <li >{children}</li>
        </ul>
    );

}

export default NavProps;