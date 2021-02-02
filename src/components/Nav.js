import React from 'react';
import styled from 'styled-components'
import { Avatar } from "react-native-elements";
import { Nav, Icon } from 'rsuite';

import 'rsuite/lib/styles/index.less';

function NavUp(props) {
    return (
        <div id="upperblock" style={{height: "17%", background: "whitesmoke"}}>
            <TopRight>
               <div id="topRightIcon">   
                   <img id="search" src={require("../images/search.png")} />
                   <img id="notification" src={require("../images/notification.png")}/>
                   <div id="user">
                       <Avatar
                           size="small"
                           rounded
                           title="AS"
                           overlayContainerStyle={{backgroundColor: 'lavender'}}
                           onPress={() => console.log("Works!")}
                           activeOpacity={0.7}
                           titleStyle={{color: "mediumslateblue"}}
                       />
                   </div>
                   <img id="arr" src={require('../images/downarrow-solid.png')} />
                   <Icon icon='question2' style={{marginRight: "50px", top: "110px", right: "10px", position: "absolute"}} />
               </div>
               <h2>Settings</h2>
           </TopRight>
           <div style={{marginTop: "57px"}}> 
                <Nav appearance="subtle">
                    <Nav.Item active style={{marginLeft: "30px"}}>General</Nav.Item>
                    <Nav.Item style={{marginLeft: "30px", Color: "#000000"}}>Access</Nav.Item>
                </Nav>
           </div>
           
        </div>
        
    );
}

export default NavUp;

const TopRight = styled.div`

    #topRightIcon {
        display:flex;
        align-items: center;
    }

    #search {
        position: absolute;
        margin-right: 200px;
        top:23px;
        right:20px;
        width: 25px; 
        height: 25px; 
        display: inline;

    }
    
    #notification {
        position: absolute;
        margin-right: 130px;
        top:20px;
        right:20px;
        width: 30px; 
        height: 30px; 
        display: inline;

    }
    
    #user {
        position: absolute;
        margin-right: 70px;
        top:19px;
        right:20px;
        width: 25px; 
        height: 25px; 
        display: inline;

    }

    #arr {
        position: absolute;
        margin-right: 50px;
        top: 25px;
        right: 0px;
        width: 20px; 
        height: 20px; 
        display: inline;
      }

      h2 {
        margin-left: 30px;
      }
`;
