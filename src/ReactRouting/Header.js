import React from 'react';
import {
    Link
} from 'react-router-dom';

export const Header = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>  {/* Wherever you render a <Link>, an anchor (<a>) will be rendered in your HTML document. */}
                <li><Link to="about">About</Link></li>
                <li><Link to="content">Content</Link></li>
            </ul>
        </nav>
    );
};

export default Header;