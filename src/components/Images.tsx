import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Box } from "@mui/material";
import t1 from '../assets/tourphoto1.jpeg'
import t2 from '../assets/headshot.png'
import t3 from '../assets/colorbacklogo.jpeg'

const slides = [t1, t2, t3]

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Box>
            <FaArrowAltCircleLeft
            onClick={() => scrollPrev()}
            cursor='pointer' />
        </Box>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Box>
            <FaArrowAltCircleRight
            onClick={() => scrollNext()}
            cursor='pointer' />
        </Box>
    )
}

const Images = () => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {slides.map((slide, index) => (<Box key={index} component='img' overflow='hidden' src={slide} className='images'/>))}
    </ScrollMenu>
)

export default Images