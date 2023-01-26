import React from "react";
import {Link } from 'react-router-dom'
//import Users from "./Users"
//import Dashboard from "./Dashboard"
//import Activities from "./Activities"

import { styled } from "@stitches/react";
import logo from "./logo.png";
import NotificationIcon from "./Icons/Notification.png";
import DashboardIcon from "./Icons/Dashboard.png";
import ActivitiesIcon from "./Icons/Activities.png";
import UsersIcon from "./Icons/Users.png";
/* import EventsIcon from "./Icons/Events.png";
import ReportsIcon from "./Icons/Raports.png";
//import Search from "./Icons/Search.png";
import SettingsIcon from "./Icons/Settings.png";
import TagsIcon from "./Icons/Tags.png";

import CommentIcon from "./Icons/Comment.png";

//import Bars from "./Icons/Bars.png";
 */
const NavbarWrapper = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "white",
  borderBottom: "1px solid #e6e6e6",
  boxShadow: "0px 0px 10px 0px black",

  // base styles
  ".top-navbar": {
    //display: "flex",
    alignItems: "right",

    width: "100%",

    ".logo": {
      background: `url(${logo}) no-repeat`,
      width: "50px",
      height: "50px",
      margin: "0",
    },

    ".search-box": {
      marginLeft: "30%",
      width: "30%",

      border: "none",

      ".input": {
        border: "none",
        padding: "10px",
        textAlign: "right",
        backgroundColor: "azure",
        borderRadius: "20px",
      },
    },
    ".bell": {
      marginBottom: "-10px",
    },
  },
  ".icon": {
    marginRight: "10px",
    
  },

  ".sidebar": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "250px",
    height: "100%",
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "0px 0px 20px 0px #e6e6e6",

    ".logo": {
      fontSize: "20px",
      fontWeight: "bold",
      width: "100px",
      margin: "0",
    },
  
    ".links": {
      padding: "10px",
     
     textDecoration:"none",
     lineHeight:"3",
      transition: "all 0.2s ease-in-out",
      color: "#929292",
      "&:hover": {
        color: "#4872CA",
        fontSize: "normal",
        fontWeight: "800",
      },
    },
  },
});
class Navbar extends React.Component {
  render() {
    return (
    
        <NavbarWrapper>
          <div className="sidebar">
            <img src={logo} alt="logo" className="logo" />
  {/*           I used break tags for now, maybe better put the links inside divs,  */}
            <br />
            <br />
            <div className="nav-links">
              <Link className="links"to="/dashboard"> <img src={DashboardIcon} alt="Dashboard" className="icon"></img><span className="links">Dashboard</span></Link>
               <br />
              <Link className="links"to="/users"> <img src={UsersIcon} alt="Users" className="icon"></img><span className="links">Users</span></Link>
              <br />
             <Link className="links"to="/Activities"> <img src={ActivitiesIcon} alt="Activities" className="icon"></img><span className="links">Activities</span></Link>
               <br />
               {/*  <Link className="links"to="/Tags"> <img src={TagsIcon} alt="Tags" className="icon"></img><span className="links">Tags</span></Link>
               <br />
        
                <Link className="links"to="/Events"> <img src={EventsIcon} alt="Events" className="icon"></img><span className="links">Events</span></Link>
               <br />
              <Link className="links"to="/Reports"> <img src={ReportsIcon} alt="Reports" className="icon"></img><span className="links">Reports</span></Link>
              <br />
             <Link className="links"to="/Comment"> <img src={CommentIcon} alt="Comment" className="icon"></img><span className="links">Messages</span></Link>
               <br />
                <Link className="links"to="/Settings"> <img src={SettingsIcon} alt="Settings" className="icon"></img><span className="links">Settings</span></Link>
               <br /> */}
            </div>
          </div>
          <div className="top-navbar">
            <div className="search-box">
              <form>
                <img src={NotificationIcon} alt="bell" className="bell" />
                <input
                  className="input"
                  type="text"
                  placeholder="Search..."
                  autoFocus={false}
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </NavbarWrapper>
   
    );
  }
}
export default Navbar;
