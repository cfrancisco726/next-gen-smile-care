import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>    
            <li><a href="/">about</a></li>
            <li><a href="/">services</a></li>
            <li><a href="/">Patient</a></li>
            <li><a href="/">Reviews</a></li>
            <li><a href="/">Appointments</a></li>
            <li><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;