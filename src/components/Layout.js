import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";
import NavUp from "./Nav";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                
                <Sidebar history={props.history}>
                </Sidebar>

                <div style={{borderLeft: "1.5px solid black", minHeight: "100vh"}}></div>

                <div style={{width: "100%"}}>
                    <NavUp/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
