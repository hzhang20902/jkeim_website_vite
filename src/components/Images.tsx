import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";
import assets from '../assets'

const slides = [assets.wlogo, assets.s1, assets.s2, assets.s3, assets.s4, assets.s5, assets.t1, assets.clogo]

const band = assets.b1

const face = assets.headshot

const about = assets.clogo

const error = assets.err

export const Slideshow = () => {
    return(
    <React.Fragment>
    <ScrollMenu transitionBehavior='auto' transitionDuration={300}>
           {slides.map((slide, index) => (<Box key={index} component='img' overflow='hidden' src={slide} className='images'/>))}
    </ScrollMenu>
    </React.Fragment>
    )
}

export const Headshot = () => {
    return (
    <React.Fragment>
    <ScrollMenu>
           <Box component='img' overflow='hidden' src={face} className='images'/>
    </ScrollMenu>
    </React.Fragment>
    )
}

export const About = () => {
    return (
    <React.Fragment>
    <ScrollMenu>
           <Box component='img' overflow='hidden' src={about} className='images'/>
    </ScrollMenu>
    </React.Fragment>
    )
}

export const Formheading = () => {
    return (
    <React.Fragment>
    <ScrollMenu>
           <Box component='img' overflow='hidden' src={band} className='images'/>
    </ScrollMenu>
    </React.Fragment>
    )
}

export const NotFound = () => {
    return (
    <React.Fragment>
    <ScrollMenu>
           <Box component='img' overflow='hidden' src={error} className='images'/>
    </ScrollMenu>
    </React.Fragment>
    )
}