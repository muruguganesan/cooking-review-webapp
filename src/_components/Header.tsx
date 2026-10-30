import { Link, NavLink } from 'react-router-dom'
import { UtensilsCrossed } from "lucide-react";
import { headerLinks } from '../_constants';

const Header = () => {
    const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
        color: isActive ? "#E67E22" : "#6b5b4f",
        fontWeight: isActive ? 500 : 400
    });
    return (
        <header className='main_header'>
            <div className="c">
                <div className="main_header_in">
                    <Link to="/" className="default_color logo_wrap">
                        <UtensilsCrossed
                            size={32}
                            color="currentColor"
                            strokeWidth={2}
                        />
                        <span className='default_color'>IndieBite</span>
                    </Link>

                    <nav className="nav_links">
                        {
                            headerLinks.map((ele) => { return ele.menuVisibility && <NavLink to={ele.link} style={navLinkStyles} className='header_link'>{ele.label}</NavLink> })
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header