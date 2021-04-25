import React from "react";
import Home from "./Container/Home/Home"
import Resource from "./Container/Resource/Resource"
import Volunteer from "./Container/Volunteer/Volunteer"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export default function Routes(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/home"  component={Home}  />
                <Route exact path="/resource"  component={Resource}  />
                <Route exact path="/volunteer"  component={Volunteer}  />
            </Switch>
        </BrowserRouter>

    );
}
