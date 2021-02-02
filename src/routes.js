import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BusinessHub from "./pages/BusinessHub";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/BusinessHub" component={BusinessHub}/>
                        <Route path="/setting" component={Setting}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
