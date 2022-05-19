import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineCopyright,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="inset-x-0  mt-20">
      <div className="footer mx-auto p-4 bg-black flex flex-col  ">
        <div className="suscribe flex flex-row flex-nowrap mx-auto px-2 pt-10">
          <input
            type="text"
            name="subscribe"
            id="subscribe"
            placeholder="e-mail"
            className="font-spectral w-fit px-3 p-1 focus:outline-none border-none outline-none focus:border-black focus:ring-black lg:w-[20rem] "
          />
          <button className="font-spectral w-auto bg-white px-5 py-2  text-black text-sm hover:bg-red-600  lg:px-10 hover:text-white ">
            SUBSCRIBE
          </button>
        </div>
        <div className="social flex flex-row flex-nowrap mx-auto py-10 ">
          <div className="instagram mx-5">
            <AiOutlineInstagram className="h-12 w-12 fill-white" />
          </div>
          <div className="linkedin mx-5">
            <AiOutlineLinkedin className="h-12 w-12 fill-white " />
          </div>
          <div className="github mx-5">
            <AiOutlineGithub className="h-12 w-12 fill-white" />
          </div>
        </div>
        <div className="copyrights flex flex-row items-center mx-auto pb-5 text-white ">
          <AiOutlineCopyright className="m-3 fill-white" /> 2022 Arvindan
          Rangaramanan.
        </div>
      </div>
    </div>
  );
}
