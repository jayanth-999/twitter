import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogoutMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOpenLogoutMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logout')
    // dispatch(logout())
    handleClose()
  }
  return (
    <div className="h-screen sticky top-0 ">
      <div>
        <div className="py-5">
          {/* <img
            className="w-10"
            // src="https://cdn.pixabay.com/photo/2013/06/07/09/53/twitter-117595_1280.png"
            // src="https://ik.imagekit.io/amazonImg/Twitter/twitter-x.webp?updatedAt=1694971663536&tr=w-1200%2Ch-675%2Cfo-auto"
            src="https://ik.imagekit.io/amazonImg/Twitter/icons8-twitterx-30.png?updatedAt=1694972900636"
            alt=""
          /> */}
          <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </div>
        <div className="space-y-5">
          {navigationMenu.map((item) => (
            <div key={item.title} onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(`/${item.title.toLowerCase()}`)} className="cursor-pointer flex space-x-3 items-center">
              {item.icon}
              <span className="text-xl">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="py-8">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1d9bf0",
            }}
            variant="contained"
            size="large"
          >
            Tweet
          </Button>
        </div>
      </div>

      <div className="flex items-center  justify-between">
        <div className="flex items-center">
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          />

          <div>
            <p className="font-bold">Nuggu Jayanth</p>
            <p className="opacity-70">@jayant123</p>
          </div>
        </div>
        <Button
          id="basic-button"
          aria-controls={openLogoutMenu ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openLogoutMenu ? 'true' : undefined}
          onClick={handleOpenLogoutMenu}
        >
          <MoreHorizIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openLogoutMenu}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

      </div>
    </div>
  );
};

export default Navigation;
