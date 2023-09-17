import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function RightSide() {
    const [theme, setTheme] = useState('light')
    const handelChangeTheme = () => {
        console.log("Theme changed");
        setTheme('dark')
        console.log(theme)
    }

    return (
        <div className='py-5 sticky top-0 overflow-y-hidden'>
            <div className='hideScrollbar overflow-y-scroll'>
                <div className='relative flex items-center'>
                    <input type="text"
                        placeholder='Search Twitter'
                        className={`py-3 rounded-full outline-none text-gray-500 w-full pl-12 ${theme === "light" ? "bg-slate-300" : "bg-[#151515]"
                            }`}
                    />
                    <div className="absolute top-0 left-0 pl-3 pt-3">
                        <SearchIcon className="text-gray-500" />
                    </div>
                    <Brightness4Icon
                        className='ml-3 cursor-pointer'
                        onClick={handelChangeTheme}
                    />
                </div>
                <section
                    className={`my-5 ${theme.currentTheme === "dark" ? " bg-[#151515] p-5 rounded-md" : ""
                        }`}
                >
                    <h1 className='text-xl font-bold'>Get Verification</h1>
                    <h1 className='my-2 font-bold'>Subscribe to unlock new features</h1>
                    <Button
                        // onClick={handleOpenSubscriptionModal}
                        variant="contained"
                        sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", bgcolor: "#1d9bf0" }}
                    >
                        Get verified
                    </Button>
                </section>
                <section
                    className={`mt-7 space-y-5 ${theme.currentTheme === "dark" ? " bg-[#151515] p-5 rounded-md" : ""
                        }`}
                >
                    <h1 className='font-bold text-xl'>What’s happening</h1>
                    <div>
                        <p className="text-sm">FIFA Women's World Cup · LIVE </p>
                        <p className="font-bold">Philippines vs Switzerland</p>
                    </div>

                    <div className="flex justify-between w-full">
                        <div>
                            <p>Entertainment · Trending</p>
                            <p className="font-bold">#TheMarvels</p>
                            <p>34.3K Tweets</p>
                        </div>

                        <MoreHorizIcon />
                    </div>
                    <div className="flex justify-between w-full">
                        <div>
                            <p>Entertainment · Trending</p>
                            <p className="font-bold">#TheMarvels</p>
                            <p>34.3K Tweets</p>
                        </div>

                        <MoreHorizIcon />
                    </div>

                    <div className="flex justify-between w-full">
                        <div>
                            <p>Entertainment · Trending</p>
                            <p className="font-bold">#TheMarvels</p>
                            <p>34.3K Tweets</p>
                        </div>

                        <MoreHorizIcon />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default RightSide