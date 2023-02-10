import { useContext } from "react";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Box } from "@mui/material";
import t1 from '../assets/tourphoto1.jpeg'
import t2 from '../assets/headshot.png'
import t3 from '../assets/colorbacklogo.jpeg'

const slides = [t1, 'https://thumbs.dreamstime.com/z/happy-people-6077227.jpg', t3]

const face = t2

// const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext);

//     return (
//         <Box>
//             <FaArrowAltCircleLeft
//             onClick={() => scrollPrev()}
//             cursor='pointer' />
//         </Box>
//     )
// }

// const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext);

//     return (
//         <Box>
//             <FaArrowAltCircleRight
//             onClick={() => scrollNext()}
//             cursor='pointer' />
//         </Box>
//     )
// }
export const Slideshow = () => {
    return(
    <React.Fragment>
    <ScrollMenu>
           {slides.map((slide, index) => (<Box key={index} component='img' overflow='hidden' src={slide} className='images'/>))}
    </ScrollMenu>
    </React.Fragment>
    )
}

export const Headshot = () => {
    return (
    <React.Fragment>
    <ScrollMenu transitionBehavior='auto' transitionDuration={300}>
           <Box component='img' overflow='hidden' src={face} className='images'/>
    </ScrollMenu>
    </React.Fragment>
    )
}