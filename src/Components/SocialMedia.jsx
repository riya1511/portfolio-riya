import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/riyarai1511">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/riya1511">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/u_4_riya/?hl=en">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/riya-rai-318578218/">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
