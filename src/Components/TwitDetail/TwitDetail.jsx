import React from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from 'react-router-dom';


function TwitDetail() {
    const Navigate = useNavigate()
    const handleBack = () =>{
        Navigate(-1)
    }
  return (
    <React.Fragment>
         <section
        className={`z-50 flex items-center sticky top-0 ${
          'light' === "light" ? "bg-white" : "bg-[#0D0D0D]"
        } bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {"Twit"}
        </h1>
      </section>
    </React.Fragment>
  )
}

export default TwitDetail