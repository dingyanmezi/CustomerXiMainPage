import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";

function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
      <SidebarParent>
          <div style={{position: 'fixed'}}>
              <div id="topLeft">
                  <img id="logo" src={require("../images/companyLogo.jpeg")} />
                  <div id="workspace">
                    <p id="alex">Alex's</p>
                    <p>Workspace</p>
                  </div>
                  
              </div>
              <hr/>
              {
                  SidebarItems.map((item, index)=> {
                      return (
                          <Link to={item.route}>
                              <SidebarItem key={item.name}
                                            active={index === activeIndex}
                              > 
                                <img src={item.icon} alt="description" />
                                <p>{item.name}</p>
                                <img class="arr" src={item.arrow} alt="something" />
                              </SidebarItem>
                          </Link>
                      );
                  })
              }
          </div>
          <div className="behind-the-scenes"/>
      </SidebarParent>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #ffffff;
  

  #topLeft {
    display:flex;
    flex-direction:row;
    align-items:center;
  }

  #logo { 
    margin-left: 30px;
    margin-right:15px;
    width: 15%; 
    height: 15%; 
  } 

  #workspace {
    display: table-cell;
    vertical-align: center;
    font-weight: 500;
  }

  #alex {
    margin-top: 15px;
  }

  hr {
    border-color: #000000
    width: 100%;
    border-top: 1.5px solid #000000;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
    
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#d3d3d3" : ""};
  margin: 4px 12px;
  border-radius: 4px;
  display: flex;


  img { 
    margin-right:30px;
    width: 10%; 
    height: 10%; 
    object-fit: contain; 
    alignItems: 'center';
  } 

  p {
    color: black;
    font-weight: 500;
    text-decoration: none;
    font-family: Verdana;
  }
  
  .arr {
    width: 20px; 
    height: 20px; 
    position: fixed;
    left: 200px;
  }

  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
