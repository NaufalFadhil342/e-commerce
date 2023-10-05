import React from 'react';
import '../../styles/footer.css';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { NavFooter } from './navFooter';
import { Socmed } from '../../components/socmed';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socmed">
        <Socmed />
      </div>
      <div className="footerContent">
        <div className="mainFooter">
          <h1>Hando</h1>
          <p>Jl. Siliwangi No.14, RT.02/RW.02, Bondongan, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16131</p>
          <div className="call-center">
            <span>
              <AiOutlineWhatsApp />
              0251 8324500
            </span>
            <span>
              <AiOutlineMail /> contact_center@murnimotor.com
            </span>
          </div>
        </div>
        <div className="navFooter">
          <NavFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
