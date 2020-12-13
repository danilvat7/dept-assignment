import React from 'react';
import ABNLogo from './../../assets/images/clients-logos/ABN_logo_zwart.png';
import AdidasLogo from './../../assets/images/clients-logos/Adidas_logo_zwart.png';
import KLMLogo from './../../assets/images/clients-logos/KLM_logo_zwart.png';
import MicrosoftLogo from './../../assets/images/clients-logos/Microsoft_logo_zwart-320x161.png';
import MonaLogo from './../../assets/images/clients-logos/Mona_logo_zwart.png';
import NiveaLogo from './../../assets/images/clients-logos/Nivea_logo_zwart.png';
import NNLogo from './../../assets/images/clients-logos/NN_logo_zwart.png';
import OxxioLogo from './../../assets/images/clients-logos/Oxxio_logo_zwart.png';
import PatheLogo from './../../assets/images/clients-logos/Pathe_logo_zwart.png';
import TomtomLogo from './../../assets/images/clients-logos/Tomtom_logo_zwart.png';
import TransaviaLogo from './../../assets/images/clients-logos/Transavia_logo_zwart.png';
import TriumphLogo from './../../assets/images/clients-logos/Triumph_logo_zwart.png';
import UnileverLogo from './../../assets/images/clients-logos/Unilever_logo_zwart.png';
import WalibiLogo from './../../assets/images/clients-logos/Walibi_logo_zwart.png';
import ZalandoLogo from './../../assets/images/clients-logos/Zalando_logo_zwart.png';
import ZiggoLogo from './../../assets/images/clients-logos/Ziggo_logo_zwart.png';

import './Clients.scss';

const clientsLogos = [
  NiveaLogo,
  MonaLogo,
  TransaviaLogo,
  ZalandoLogo,
  TomtomLogo,
  UnileverLogo,
  AdidasLogo,
  PatheLogo,
  ABNLogo,
  TriumphLogo,
  MicrosoftLogo,
  OxxioLogo,
  NNLogo,
  ZiggoLogo,
  WalibiLogo,
  KLMLogo,
];

/**
 * Clients component
 */
const Clients = () => {
  return (
    <div className="clients">
      <h3>CLIENTS</h3>
      <p>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <div className="clients--logos">
        {clientsLogos.map((logoSrc, i) => {
          return (
            <div key={i} className="clients--image-holder">
              <img src={logoSrc} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
