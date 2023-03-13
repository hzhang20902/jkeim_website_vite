import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";
import assets from '../assets'

const slides = [assets.wlogo, assets.t1, assets.t2, assets.t3, assets.t4, assets.t5, assets.t6, assets.clogo]

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

export const Transcription = ({ transcription, link }: any) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const downloadButton = () => {
    fetch(transcription).then(res => {
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = transcription
        alink.click()
      })
    })
  }

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset:any) {
    setPageNumber((prevPageNumber)=> prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <React.Fragment>
      <Document
      className='pdf'
        file={transcription}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <button type='button' onClick={downloadButton}>
          Free Download
        </button>
      </div>
    </React.Fragment>
  );
    
}