import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightSide from '../RightSide/RightSide'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import TwitDetail from '../TwitDetail/TwitDetail'

export default function HomePage() {
  return (
    <Grid container className='px-5 lg:px-28 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative text-center'>
            <div className='text-center'><Navigation/></div>
        </Grid>
        <Grid item xs={12} lg={6} className='px-5 lg:px-8 border hidden lg:block w-full relative'>
            <Routes>
              <Route className='' path='/twitter/' element={<HomeSection/>}></Route>
              <Route className='' path='/twitter/home' element={<HomeSection/>}></Route>
              <Route path='/twitter/profile/:id' element={<Profile/>}></Route>
              <Route className='' path='/twitter/twit/:id' element={<TwitDetail/>}></Route>
            </Routes>
        </Grid>
        <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
            <div className=''><RightSide/></div>
        </Grid>
    </Grid>
  )
}
