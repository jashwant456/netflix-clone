import React from 'react';
import { useNavigate } from 'react-router-dom';

import {BsArrowLeft} from "react-icons/bs";

import styled from 'styled-components';

const NetflixPlayer = ({video = "https://www.youtube.com/watch?v=HgaJW2I4Mbk"}) => {
    const navigate = useNavigate()

  return (
    <div className={"w-[100vw] h-[100vh]"}>
        <div 
            className={"absolute p-[2rem] z-1"} 
            onClick={() => navigate(-1)}
        >
            <BsArrowLeft className={"text-[3rem] cursor-pointer"} />
        </div>
        <video 
            className={"w-[100%] h-[100%] object-cover"}
            src={video}
            autoPlay
            controls
            loop
            muted
        />
    </div>
  )
}

export default NetflixPlayer