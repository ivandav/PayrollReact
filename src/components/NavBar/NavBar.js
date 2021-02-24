import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom'
import Payroll from '../Payroll'
import {MenuItem} from './MenuItem'
import {Button} from '../Button'
import Home from '../Home'
import './NavBar.css'

class NavBar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Change Express<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItem.map((item, index) => {
                            return (
                                <li>
                                    <Link className={item.cName} to={item.url}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Button>Sing Up</Button>
            </nav>
            <Switch>
                <Route path="/Home">
                <Home />
                </Route>
                <Route path="/Payroll">
                <Payroll />
                </Route>
                {/* <Route path="/">
                <Home />
                </Route> */}
            </Switch>
            </Router>
        )
    }
}

export default NavBar;