import React from 'react';

function Setting(props) {
    return (
        <div style={{marginLeft: "30px"}}>
            <h2 style={{marginTop: "70px"}}> General Settings</h2>
            <div style={{display: "inline-block"}}>
                <p style={{float: "left"}}>There will be info here about GDPR Consent Guidelines soon. </p>
                <a href="https://www.customerxi.com/" style={{textDecoration: "none", float: "right", color: "dodgerblue"}}> Learn about more</a>
            </div>
            
            <h3 style={{marginTop: "70px"}}>Workspace Name</h3>
            <input type="text" style={{height: "30px", width: "220px", borderRadius: "5px", border: "1px solid gray"}}/>
            <h3 style={{marginTop: "40px"}}>ID</h3>
            <input typ="text" style={{height: "30px", width: "220px", borderRadius: "5px", border: "1px solid gray"}} />
        </div>
    );
}

export default Setting;
