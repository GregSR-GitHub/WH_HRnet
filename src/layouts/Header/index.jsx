/**
 * Display the upper navbar
 * @return { HTMLElement }
 */
import { NavLink } from 'react-router-dom'
// import logo from '../../assets/argentBankLogo.png';
import './header.css';
 
function Header() {

    return (
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo"  end>
                    <h1 className="sr-only">HRnet</h1>
                </NavLink>
            <div>

            </div>
        </nav>
    );
 }
 
 export default Header;