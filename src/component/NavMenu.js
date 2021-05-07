import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { Link, useHistory } from "react-router-dom";


const ITEM_HEIGHT = 48;


export const NavMenu= (props)=> {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const handleLogout =() =>{
    window.localStorage.clear()
    props.setLoginStatus({isLoggin:false})
    history.replace('/')
    window.alert("GoodBye~")
}

  return (
    <div className="menu" >
      <IconButton
       style={{color: "#e3f2fd"}}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {!props.loginStatus.isLoggin && <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>Home</Link>
          </MenuItem>}
          {props.loginStatus.isLoggin && <MenuItem onClick={handleClose}>
            <Link to="/events" style={{ textDecoration: 'none', color: "inherit" }}>MemoryCollection</Link>
          </MenuItem>}
         {!props.loginStatus.isLoggin && <MenuItem onClick={handleClose}>
            <Link to="/users/register" style={{ textDecoration: 'none', color: "inherit" }}>Register</Link>
          </MenuItem>}
          {!props.loginStatus.isLoggin && <MenuItem onClick={handleClose}>
            <Link to="/users/login" style={{ textDecoration: 'none', color: "inherit" }}>Login</Link>
          </MenuItem>}
          {props.loginStatus.isLoggin && <MenuItem onClick={handleClose}>
            <Link to="/users/logout" style={{ textDecoration: 'none', color: "inherit" }} onClick={handleLogout}>Logout</Link>
          </MenuItem>}
        
       
      </Menu>
    
    </div>
  );
}