import { Link, NavLink  } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        
        <nav className="Navbar">

            <NavlLink to={"/"}>                <a >Home</a>            </NavlLink>
            <NavlLink to={"/about"}>                <a >About</a>            </NavlLink>
            <NavlLink to={"/menu"}>                <a >Menu</a>            </NavlLink>
            </nav>
        
    )
}
export default Navbar;