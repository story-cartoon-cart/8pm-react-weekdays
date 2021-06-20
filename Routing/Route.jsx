import React from 'react';
import {Link, BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './Homef';
import About from './Aboutf';
import Contacted from './Contactf';



export default function Routee()
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
                    
                </Switch>









        </div>
        </Router>
    )
}