import React, {Component} from 'react';
import confer from "../assets/images/ConferKare.png";
const Footer = () => {
return (
  <>
  <section className="pricing ">

    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="footer__about">
                    <div className="footer__logo">
                        <a href="/login"><img src={confer} style={{height:"30px"}} alt=""></img></a>
                    </div>
                    <p>Get care at our SimpleeKare clinics or try our telehealth options. You have the convenience to get all your healthcare needs and maintain your personal doctor relationship.</p>
                    <a href="/login" className="link danger">Login/Sign Up  <i className="fa fa-user-o" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="footer__widget">
                    <h6>Sitemap</h6>
                    <ul>
                       <li className="active"><a href="#doctor_consult">Doctor Consultation</a></li>
							 <li><a href="#lab_test">Lab Tests</a></li>
                            
                            <li><a href="#pharma">Pharmacy</a></li>
							
                            <li><a href="#health_service">Health Services</a></li>
							<li><a href="#radiology_test">Radiology Tests</a></li>
                    </ul>
                </div>
            </div>
			<div className="col-lg-2 col-md-2 col-sm-2">
                <div className="footer__widget">
                    <h6>Services</h6>
                    <ul>
                       <li><a href="#">Clinic appointments</a></li>
					   <li><a href="#">Video appointments</a></li>
                            <li><a href="#">Order Lab Tests</a></li>
                            <li><a href="#">Order Medicines</a></li>
                            <li><a href="./shop.html">Order Home Physiotherapy</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="footer__widget">
                    <h6>Find Us</h6>
                    <p>
		 				N2 19 , IRC Village, Nayapalli ,<br/> Bhubaneswar-751015,Odisha
             (+91) 977 64 14444<br/>
             Info@SimpleeLabs.com
						</p>
						</div>
                    
					 <div className="footer__social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="row">
            <div className="col-lg-12">
              
                <div className="footer__copyright__text">
                    <p>Copyright  <a href="/login"> ConferKare </a> All Right Reserved</p>
                </div>
                
            </div>
        </div>
    
    

</section>




  </>
);

};


export  default Footer;