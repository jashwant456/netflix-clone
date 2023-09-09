import React from 'react';

import Background from "../../assets/images/login.jpg";

const BackgroundImage = () => {
  return (
    <div className={"w-[100vw] h-[100vh] overflow-hidden"}>
        <img 
          src={Background}
          alt={"Background"}
          className={"w-full h-full"}
        />
    </div>
  )
}

export default BackgroundImage;