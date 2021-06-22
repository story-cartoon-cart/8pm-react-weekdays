import React from 'react';
import Home from './Homef';
import About from './Aboutf';
import Contacted from './Contactf';
import {Link, BrowserRouter as Router, Switch,Route, useRouteMatch} from "react-router-dom";



export default function NestedRou()
{
    return(
        <Router>
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>

                <li>
                <Link to="/about">About</Link>
                </li>

                <li>
                <Link to="/membership">MemberShip</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                </ul>

                <Switch>

                <Route exact path="/">

                <Home></Home>

                </Route>


                <Route path="/about">

                <About></About>

                </Route>

                <Route path="/contact">

                <Contacted></Contacted>

                </Route>

                <Route path="/membership">
                <Membership></Membership>
                </Route>

                <Route path="/*">

                <Errorr></Errorr>

                </Route>
                    
                </Switch>
        </div>
        </Router>
    )
}


function Errorr()
{
    return(
        <h1>404 Page Not Found</h1>
    )
}


function Membership()
{
    let {url} = useRouteMatch();
    return(
        <Router>
        <div>
            <ul>
                <li>
                <Link to={`${url}/platinum`}>Platinum</Link>
                </li>

                <li>
                <Link to={`${url}/gold`}>Gold</Link>
                </li>

                <li>
                <Link to={`${url}/silver`}>Silver</Link>
                </li>
                
            </ul>

        </div>

       
        </Router>

    )
}
