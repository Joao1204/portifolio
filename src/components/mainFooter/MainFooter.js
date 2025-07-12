import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
//import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineAttachEmail } from 'react-icons/md';

import './MainFooter.css';

export default function MainFooter() {

  return (
      <div className='footer-wrapper'>
        <div className='footer-center'>
          <div className='footer-description'>
              <p>Site desenvolvido pelo João kirche.</p>
              <p>Redes sociais ao lado, apenas clique no Icon <span>✓</span></p><br/>
              <h3>Copyright ©2025-present.</h3>
              <h3>by: João Kirche.</h3>
          </div>
        </div>

        <div className='footer-right'>
          <div className='footer-icon-email--container'>
            <i className='footer-icon--email'><MdOutlineAttachEmail /></i>
      
            <h3>E-mail: <a href="mailto:joao.kirchee02@gmail.com.br">joao.kirchee02@gmail.com.br</a></h3>
          </div>
        </div>
          
        <div className='footer-left'>
          <div className='footer-icons--click'>
            <a href="https://github.com/Joao1204" target="_blank"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-kirche-63b748267/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/___kirche___?igsh=N3dybnFhdXk5dW14" target="_blank"><AiFillInstagram /></a>
            {/* <a href="https://web.facebook.com/wellison.bertelli.7" target="_blank"><AiFillFacebook /></a> */}
            <a href="https://api.whatsapp.com/send/?phone=%2B5511957768671&text&type=phone_number&app_absent=0" target="_blank"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </div>
  )
};
