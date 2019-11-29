import React, { Component } from 'react';

export class Header extends Component {
    constructor() {
        super();
        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),

            weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            current_day = weekdays[today.getDay()];

            this.state = {
                date: date,
                current_day: current_day
            }
    }

    render() {
        return (
<nav className="navbar navbar-expand-md navbar-dark bg-danger">
    <h3 className="navbar-brand abs">Traffic Signal</h3>
    
    <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <h4 className="nav-link">{this.state.date}</h4>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <h4 className="nav-link">{this.state.current_day}</h4>
            </li>
        </ul>
    </div>
</nav>
        );
    }
}

export default Header;