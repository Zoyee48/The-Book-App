import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper" style={{ backgroundColor: 'indigo' }}>
                    <Link to="/" class="brand-logo center">The Book Finder</Link>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;