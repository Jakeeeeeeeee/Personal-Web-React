import "./NavProps.css";

const NavProps = ({active, children, pageName, changePage}) => {
    let className = 'navItems';

    if (active) {
        className += ' navItems--active'
    }

    const cliked = (event) => {
        event.preventDefault();

        console.log('CLICKED', pageName);
        changePage(pageName);
    };


    return (
        <ul  className = {className}>
        <li onClick={cliked} >{children}</li>
        </ul>
    );

}

export default NavProps;