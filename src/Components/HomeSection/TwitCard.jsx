import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";// import { useDispatch, useSelector } from "react-redux";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";



const TwitCard = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openDeleteMenu = Boolean(anchorEl);
    const handleOpenDeleteMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDeleteMenu = () => {
        setAnchorEl(null);
    };
    const handleDeleteTwit = () => {
        // Add your delete logic here
        console.log('Delete twit');
    };

    const handleOpenReplyModel = () => {
        console.log('Open reply model');
    };

    const handleCreateRetweet = () => {
        console.log('Retweet created');
    };

    const handleLikeTweet = (num) => {
        // dispatch(likeTweet(2));
        setIsLiked(!isLiked);
        setLikes(likes + num);
    };

    return (
        <div>
            <div className='flex space-x-5' >
                <Avatar
                    onClick={() => navigate(`/profile/{2}`)}
                    src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                    alt='userImg'
                    className="flex cursor-pointer items-center space-x-2"
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div
                            onClick={() => navigate(`/profile/{2}`)}
                            className="flex cursor-pointer items-center space-x-2"
                        >
                            <span className="font-semibold">Nuggu Jayanth</span>
                            <span className=" text-gray-600">
                                @jayanth123 · 2m
                            </span>
                            {true && (
                                <img
                                    className="ml-2 w-5 h-5"
                                    src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                                    alt=""
                                />
                            )}
                        </div>
                        <div>
                            <Button onClick={handleOpenDeleteMenu}>
                                <MoreHorizIcon
                                    id="basic-button"
                                    aria-controls={openDeleteMenu ? "basic-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openDeleteMenu ? "true" : undefined}

                                />
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openDeleteMenu}
                                onClose={handleCloseDeleteMenu}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                {true && <MenuItem onClick={handleDeleteTwit}>Delete</MenuItem>}
                                <MenuItem onClick={() => navigate(`/twit/{2}`)}>Details</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div onClick={()=>navigate(`/twit/${2}`)} className='cursor-pointer'>
                            <p className="mb-2 p-0 ">this is tweet msg.....</p>
                            <img
                                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                                src="https://imgs.search.brave.com/GvRbDrH8E1Dtruwi9fCZr1UYrQ8zU7RyrOsDYHJj0iM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9sbHl3b29kcmVw/b3J0ZXIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA0/L0lNRy1BY2FkZW15/LVN0YWRpdW0uanBn/P3c9MTI5NiZoPTcz/MCZjcm9wPTE"
                                alt=""
                            />
                        </div>
                        <div className="py-5 flex flex-wrap justify-between items-center">
                            <div className="space-x-3 flex items-center text-gray-600">
                                <ChatBubbleOutlineIcon
                                    className="cursor-pointer"
                                  onClick={handleOpenReplyModel}
                                />
                                {1 > 0 && <p>{1}</p>}
                            </div>
                            <div
                                className={`${true ? "text-pink-600" : "text-gray-600"
                                    } space-x-3 flex items-center`}
                            >
                                <RepeatIcon
                                    className={` cursor-pointer`}
                                    onClick={handleCreateRetweet}
                                />
                                {true > 0 && <p>{2}</p>}
                            </div>
                            <div
                                className={`${true ? "text-pink-600" : "text-gray-600"
                                    } space-x-3 flex items-center `}
                            >
                                {isLiked ? (
                                    <FavoriteIcon onClick={() => handleLikeTweet(-1)} />
                                ) : (
                                    <FavoriteBorderIcon onClick={() => handleLikeTweet(1)} />
                                )}
                                {likes > 0 && <p>{likes}</p>}
                            </div>
                            <div className="space-x-3 flex items-center text-gray-600">
                                <BarChartIcon />
                                <p>24,599</p>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <FileUploadIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwitCard