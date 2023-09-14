import { Avatar, Button } from '@mui/material'
import React from 'react'
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SlideshowIcon from '@mui/icons-material/Slideshow';
// import TwitCard from "./TwitCard/TwitCard";
// import { useFormik } from "formik";
// import * as Yup from "yup";

const HomeSection = () => {
    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10 ${false?" bg-[#151515] p-10 rounded-md mb-10":""}`}>
                <div className='flex space-x-5'>
                    <Avatar
                        alt='Avatar'
                        src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                    />
                    <div className='w-full'>
                        <form action="">
                            <div>
                                <input type="text"
                                    name="content"
                                    placeholder="What is happening?"
                                    className={`border-none outline-none text-xl bg-transparent `} 
                                />
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex space-x-5 items-center">
                                    <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                                        <ImageIcon className="text-[#1d9bf0]" />
                                        <input
                                            type="file"
                                            name="imageFile"
                                            className="hidden"
                                            
                                        />
                                    </label>

                                    <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                                        <SlideshowIcon className="text-[#1d9bf0]" />
                                        <input
                                            type="file"
                                            name="videoFile"
                                            className="hidden"
                                            
                                        />
                                    </label>

                                    <FmdGoodIcon className="text-[#1d9bf0]" />
                                    <div className="relative">
                                        <TagFacesIcon className="text-[#1d9bf0] cursor-pointer" />
                                        
                                    </div>


                                </div>

                                <div>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#1d9bf0",
                                            borderRadius: "20px",
                                            paddingY: "8px",
                                            paddingX: "20px",
                                            color: "white",
                                        }}
                                    >
                                        Tweet
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSection