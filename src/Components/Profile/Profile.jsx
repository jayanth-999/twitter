import React, { useState } from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BusinessCenterSharp } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TwitCard from '../HomeSection/TwitCard';
import ProfileModel from './ProfileModel';


function Profile() {
  const [tabValue, setTabValue] = React.useState("1");
  const [openProfileModel, setOpenProfileModel] = useState(false);
  const handleCloseProfileModel = () => setOpenProfileModel(false);
  const handleOpenProfileModel = () => setOpenProfileModel(true);


  const Navigate = useNavigate();
  const handleBack = () => Navigate(-1);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 4) {
      console.log('likes')
    } else if (newValue === 1) {
      console.log('user tweets')
    }
  };

  // const handleOpenProfileModel = () => {
  //   console.log("Open profile model");
  // };

  const handleFollowUser = () => {
    console.log("Follow user button clicked");
  };

  

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 ${'light' === "light" ? "bg-white" : "bg-[#0D0D0D]"
        } bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Nuggu Jayanth
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src={
            // auth.findUser?.backgroundImage ||
            "https://cdn.pixabay.com/photo/2018/10/16/15/01/background-image-3751623_1280.jpg"
          }
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className=" flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            alt="Avatar"
            src={
              // auth.findUser?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"}
            className="transform -translate-y-24 "
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              sx={{ borderRadius: "20px" }}
              variant="contained"
              className="rounded-full"
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              sx={{ borderRadius: "20px" }}
              variant="contained"
              className="rounded-full"
            >
              {true ? "Unfollow" : "Follow"}
            </Button>
          )}
        </div>
        <div className='mt-2 space-y-3'>
          <p>I love codeing</p>
          <div className="py-1 flex space-x-5">
              <div className="flex items-center text-gray-500">
                <BusinessCenterSharp />
                <p className="ml-2">Education</p>
              </div>
              <div className="flex items-center text-gray-500">
                <LocationOnIcon />
                <p className="ml-2">Bangalore</p>
              </div>
              <div className="flex items-center text-gray-500">
                <CalendarMonthIcon />
                <p className="ml-2">Joined June 2022</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1 font-semibold">
                <span>500</span>
                <span className="text-gray-500">Following</span>
              </div>
              <div className="flex items-center space-x-1 font-semibold">
                <span>1100</span>
                <span className="text-gray-500">Followers</span>
              </div>
            </div>
        </div>
      </section>
      <section>
        <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1,1,1,1].map((item) => (
                <TwitCard/>
              ))}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">
              {[1,1,1,1].map((item) => (
                <TwitCard />
              ))}
            </TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModel
          handleClose={handleCloseProfileModel}
          open={openProfileModel}
        />
      </section>
    </div>
  )
}

export default Profile