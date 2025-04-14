import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="container">
            <div className="grid  navbar-grid">
                <div className="logo">
                    <NavLink to="/">
                    <h1>WordAtlas</h1>
                    </NavLink>
                </div>
                <nav >
                    <ul >
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/country">Country</NavLink></li>
                    </ul>
                </nav>
            </div>
         
        
        </header>
    )
}

export default Header;