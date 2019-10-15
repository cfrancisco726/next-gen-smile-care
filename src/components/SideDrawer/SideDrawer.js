import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>    
            <li><a href="/">about</a></li>
            <li><a href="/">services</a></li>
            <li><a href="/">Patient</a></li>
            <li><a href="/">Reviews</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Appointments</a></li>
        </ul>
    </nav>
);

export default sideDrawer;