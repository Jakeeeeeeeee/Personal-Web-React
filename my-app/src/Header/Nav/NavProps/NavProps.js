import "./NavProps.css";

const NavProps = ({active, children, clicked,}) => {
    let className = 'navItems';

    if (active) {
        className += ' navItems--active'
    }

    // const cliked = (event) => {
    //     event.preventDefault();

    //     changePage(pageName);
    // };


    return (
        <ul  className = {className}>
        <li onClick={(event) => {
            event.preventDefault();
            clicked();
        }} >{children}</li>
        </ul>
    );

}

export default NavProps;