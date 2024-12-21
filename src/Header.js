import React from 'react';
import "./css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar'; // Corrected import
function Header() {
  return (
    <div className="Header">
      <div className="header_logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJli0TzFXfCnghPvwSIafVVNXGcHv_e0fLg&s" alt="Google logo" />
        <span>Google Drive</span>
      </div>
      <div className="header_search">
        <SearchIcon /> 
        <input type = "text" placeholder = "Search in drive"/>
        <FormatAlignCenterIcon/>
      </div>
      <div className="header_icon">
        <span>
            <HelpIcon/>
            <SettingsIcon/>
        </span>

        <span>
            <AppsIcon/>
            <Avatar/>
        </span>
      </div>
    </div>
  );
}

export default Header;
