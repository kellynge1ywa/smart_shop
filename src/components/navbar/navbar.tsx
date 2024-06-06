import { NavLink} from "react-router-dom";

import './navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    const handleClick = () => {
        setMobile(!mobile);
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-container">

                    <div className="logo">
                        <div className="title">
                            <span >
                                <NavLink to="/">Smart Shop</NavLink>
                            </span>
                        </div>
                        <div className="search ">
                            <input className="" type="text" placeholder="Search product.." />
                        </div>
                    </div>
                    <div className="nav">
                        <ul className={mobile ? "nav-menu-mobile" :"nav-menu"} >
                            <li className="nav-item" >
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'nav-links')}
                                onClick={handleClick}
                                
                                >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/clothing" className={({ isActive }) => (isActive ? 'active' : 'nav-links')}
                                onClick={handleClick}
                                >Clothing</NavLink></li>
                            <li className="nav-item">
                                <NavLink to="/electronics" className={({ isActive }) => (isActive ? 'active' : 'nav-links')}
                                onClick={handleClick}
                                >Electronics</NavLink></li>
                            <li className="nav-item">
                                <NavLink to="/furniture" className={({ isActive }) => (isActive ? 'active' : 'nav-links')}
                                onClick={handleClick}
                                >Furniture</NavLink></li>
                        </ul>


                    </div>
                    <div className= "nav-extra">

                        <span>Cart</span>
                        <span>
                            <NavLink to="/login">Account</NavLink>
                        </span>

                    </div>
                    <div className="nav-icons" onClick={handleClick}>
                        {mobile ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </>


    );
}
export default Navbar;