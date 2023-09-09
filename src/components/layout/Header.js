import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/images/logo.png"

import { pagesInfo } from '../../utils/pagesInfo';

const Header = (props) => {

  const navigate = useNavigate()

  const onHandleNavigation = () => {
    if (props?.login) {
    navigate(pagesInfo?.LOG_IN?.pagePath)
    } else {
    navigate(pagesInfo?.SIGN_UP?.pagePath)
    }
  }


  return (
    <div className={"p-[0.4rem] flex items-center justify-between"}>
      <div className={"h-[5rem]"}>
      <img 
        src={logo}
        alt={"logo"}
        className={"w-full h-full"}
      />
      </div>
      <button
        className={"px-[0.5rem] py-[1rem] border-none rounded-lg cursor-pointer text-white bg-[#e50914]"}
        onClick={onHandleNavigation}
      >
        <span className={"font-bodyPri font-semibold text-base tracking-wide"}>
        {props?.login ? "log In": "Sign In"}
        </span>
      </button>
      </div>
  )
}

export default Header