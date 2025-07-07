import React from "react";

import { BiSolidPhoneCall } from "react-icons/bi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <React.Fragment>
      <section className="ft_wrapper">
        <main className="ft_container">
          <div className="ft_digital_channels-container">
            <div className="social_media-container">
              <ul className="ft_social_icons-list">
                <li className="ft_social_icon">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="ft_social_icon">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li className="ft_social_icon">
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="ft_social_icon">
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className="ft_website_link-container">
              <a href="#">www.nossaseguros.ao</a>
            </div>
          </div>
          <div className="ft_contact_container">
            <div className="ft_contacts_container">
              <div className="ft_contact_badge-container">
                <div className="ft_icons_contact_apps">
                  <ul className="ft_badge_icons_list">
                    <li className="ft_list_element">
                      <a href="#" className="ft_icon">
                        <BiSolidPhoneCall />
                      </a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="#" className="ft_icon">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li className="ft_number_client">
                      <a href="#" className="ft_contact_number">
                        923 190 860
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ft_website_link-container ft_message">
                  <a href="#">contact center nossa seguros</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Footer };
