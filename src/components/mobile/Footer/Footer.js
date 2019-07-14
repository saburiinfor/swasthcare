import React from "react";
import "./Footer.module.css";

const Footer = props => {
  return (
    <div>
      <div className="Footer">
        <div className="FooterCnt">
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
          <div className="copyright">
            @2019 ConferKare
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;