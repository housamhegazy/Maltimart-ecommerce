import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const customStyle = {
  width: "100%",
  height: "50vh",
  zIndex: "1000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
export default function Loader() {
  
  return (
    <div className="loader" style={customStyle}>
       <ClipLoader
      color={'red'}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
  )
}
