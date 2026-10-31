import { Link, NavLink } from 'react-router-dom'
import { Menu, UtensilsCrossed } from "lucide-react";
import { headerLinks } from '../_constants';
import { useState } from 'react';
import Drawer from './Drawer/Drawer';

const Header = () => {
    const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
        color: isActive ? "#E67E22" : "#6b5b4f",
        fontWeight: isActive ? 500 : 400
    });
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        document.body.style.overflow = "hidden";
        setOpenDrawer(true)
    };
    const handleDrawerClose = () => {
        document.body.style.overflow = "auto";
        setOpenDrawer(false);
    };

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
                    {/* <BurgerButton /> */}
                    <button className="mobile_mnu" onClick={handleDrawerOpen}>
                        <Menu color="#E67E22" />
                    </button>
                </div>
            </div>
            <Drawer isOpen={openDrawer} onClose={handleDrawerClose}>
                <nav className="nav_links mobile_mnu_link">
                    {
                        headerLinks.map((ele) => { return ele.menuVisibility && <NavLink to={ele.link} style={navLinkStyles} className='header_link' onClick={handleDrawerClose}>{ele.label}</NavLink> })
                    }
                </nav>
            </Drawer>
        </header>
    )
}

export default Header;


// const Drawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
//     if (!isOpen) return null;
//     return createPortal((
//         <div className='drawer_wrapper'>
//             <div className="drawer_cont">
//                 test
//             </div>
//         </div>
//     ), document.body);
// };