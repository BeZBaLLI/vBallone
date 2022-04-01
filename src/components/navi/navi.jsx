import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navi.css';
import userPhoto from '../../images/profile.jpg';

const NavItem = (props) => {
  return(
    <li>
      <NavLink className={(navData) => navData.isActive} to={"/"+props.path}>
        <span className="nav_icon"><ion-icon name={props.name_ic}></ion-icon></span>
        <span className="link_name">{props.name_item}</span>
      </NavLink>
    </li>
  )
}

const Navi = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
    return (
      <div className={`navigation ${!isActive ? "active" : ""}`}>
        <div className="menuToggle">
          <div className="logo-details">
            <span onClick={handleToggle} className="icon"><ion-icon name="balloon-outline"></ion-icon></span>
            <span className="logo_name">vBallon</span>
          </div>
          <ul className="nav-links">
            <NavItem path="profile" name_ic="person-outline" name_item="Profil" />
            <li>
              <NavItem path="friends" name_ic="people-outline" name_item="Friends" />
            </li>
            <li>
              <NavItem path="ballon" name_ic="albums-outline" name_item="Ballon" />
            </li>
            <li>
              <NavItem path="messages" name_ic="chatbox-outline" name_item="Messages" />
            </li>
            <li>
              <NavItem path="musik" name_ic="musical-notes-outline" name_item="Musik" />
            </li>
            <li>
              <NavItem path="photos" name_ic="camera-outline" name_item="Photos" />
            </li>
            <li>
              <NavItem path="settings" name_ic="settings-outline" name_item="Settings" />
            </li>
            <li>
              <div className="profile-details">
                <div className="profile-content">
                  <img src={userPhoto} alt="profile" />
                </div>
                  <div className="name-job">
                    <div className="profile_name">Ushkalov Dmytro</div>
                    <div className="job">Engineer </div>
                  </div>
                <div><ion-icon name="log-in-outline"></ion-icon></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navi;