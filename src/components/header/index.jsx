import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;