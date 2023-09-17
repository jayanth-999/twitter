import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightSide from '../RightSide/RightSide'

export default function HomePage() {
  return (
    <Grid container className='px-5 lg:px-28 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative text-center'>
            <div className='text-center'><Navigation/></div>
        </Grid>
        <Grid item xs={12} lg={6} className='px-5 lg:px-8 border hidden lg:block w-full relative'>
            <div className=''><HomeSection/></div>
        </Grid>
        <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
            <div className=''><RightSide/></div>
        </Grid>
    </Grid>
  )
}
