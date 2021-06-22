import React from "react";
import { BrowserRouter as Router , Link, useParams,Switch,Route } from "react-router-dom";

export default function Urlbrou()
{
    return(
        <Router>
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li><Link to="/netflix">Netflix</Link></li>
                    <li><Link to="/hotstar">Hotstar</Link></li>
                    <li><Link to="/amazon-prime">Amazon-Prime</Link></li>
                </ul>


                <Switch>

                <Route path="/:id">
                    <QWE></QWE>
                </Route>

                </Switch>


            </div>
        </Router>

    )
}


function QWE()
{
    let {id} = useParams();

    return(
        <div>
            <h3>ID : {id}</h3>
        </div>

    )
}