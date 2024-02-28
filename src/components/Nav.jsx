import { Link } from "react-router-dom";

function Nav() {
    return (
        <div id="navbar">
            <Link to='/'>Home</Link>
            <Link to='/red'>Red</Link>
            <Link to='/blue'>Blue</Link>
        </div>
    );
}

export default Nav;