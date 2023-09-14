import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'

export default function HomePage() {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative text-center'>
            <div className='text-center'><Navigation/></div>
        </Grid>
        <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
            <p className='text-center'><HomeSection/></p>
        </Grid>
        <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
            <p className='text-center'>Right Part</p>
        </Grid>
    </Grid>
  )
}
