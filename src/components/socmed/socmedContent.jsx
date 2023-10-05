import React from 'react';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebook, BiLogoYoutube } from 'react-icons/bi';

const socmedIcons = [
  {
    name: 'Instagram',
    logo: <BiLogoInstagram />,
  },
  {
    name: 'Twitter',
    logo: <BiLogoTwitter />,
  },
  {
    name: 'Facebook',
    logo: <BiLogoFacebook />,
  },
  {
    name: 'Youtube',
    logo: <BiLogoYoutube />,
  },
];

export const SocmedContent = () => {
  return (
    <div className="socmedContent">
      <h2>Follow Our Channel</h2>
      <div className="socmedIcons">
        {socmedIcons.map((icon, index) => {
          return (
            <div key={index}>
              <span>{icon.logo}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
