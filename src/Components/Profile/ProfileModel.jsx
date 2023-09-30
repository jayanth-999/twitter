import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import './ProfileModel.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 4,
};

export default function ProfileModel({open,handleClose}) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false)
  

    const handleSubmit = (values) => {
        console.log('submmited details', values)
        handleClose()
    }



    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    });

    const handleImageChange = (event) => {
        setUploading(true)
        const { name } = event.target;
        const file = event.target.files[0];
        // const url=await uploadToCloudinary(file,"image");
        // console.log(name + '\n' + file)
        formik.setFieldValue(name, file);
        setUploading(false);
    }

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <IconButton onClick={handleClose} aria-label="delete">
                                    <CloseIcon />
                                </IconButton>
                                <p>Edit Profile</p>
                            </div>
                            <Button type="submit">Save</Button>
                        </div>
                        <div className='customeScrollbar overflow-y-scroll  overflow-x-hidden h-[80vh]'>
                            <div>
                                <div className="w-full">
                                    <div className="relative ">
                                        <img
                                            src={
                                                formik.values.backgroundImage ||
                                                "https://cdn.pixabay.com/photo/2018/10/16/15/01/background-image-3751623_1280.jpg"
                                            }
                                            alt="Img"
                                            className="w-full h-[12rem] object-cover object-center"
                                        />
                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleImageChange}
                                            name="backgroundImage"
                                        />
                                    </div>
                                </div>
                                <div className="w-full transform -translate-y-20 translate-x-4 h-[6rem]">
                                    <div className="relative borde ">
                                        <Avatar
                                            src={
                                                formik.values.image
                                            }
                                            alt="Img"
                                            sx={{
                                                width: "10rem",
                                                height: "10rem",
                                                border: "4px solid white",
                                            }}
                                        />
                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                                            onChange={handleImageChange}
                                            name="image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <TextField
                                    fullWidth
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.name && formik.errors.fullName}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="bio"
                                    name="bio"
                                    label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />
                                <TextField
                                    fullWidth
                                    id="website"
                                    name="website"
                                    label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.website && Boolean(formik.errors.website)
                                    }
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                                <TextField
                                    fullWidth
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.location && Boolean(formik.errors.location)
                                    }
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                            </div>
                            <div className="my-3">
                                <p className="text-lg">Birth date · Edit</p>
                                <p className="text-2xl"> September 9, 2001</p>

                            </div>
                            <p className="py-3 text-lg">
                                Edit Professional Profile
                            </p>
                        </div>
                        {/* <BackdropComponent open={uploading}/> */}
                    </form>
                </Box>
            </Modal>
        </div >
    );
}
// export default ProfileModel;