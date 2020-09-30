import React, {Component} from 'react';
import  Header from   './Header';
import Footer from   './Footer';
import '../components/style.css';
import {Link}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'font-awesome/css/font-awesome.min.css'; 
import img1 from "../assets/images/doc_con.jpg";
import img2 from "../assets/images/lab_tst.jpg";
import img3 from "../assets/images/hlth_service.jpg";
import img4 from "../assets/images/pharma.jpg";
import img5 from "../assets/images/unnamed.jpg";
import img6 from "../assets/images/pharmacy.jpg";
import img7 from "../assets/images/health_service.jpg";
import img8 from "../assets/images/radiology.jpeg";

class Home extends Component {
  banner= {
    responsive:{
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
}
consultation= {
  responsive:{
      0: {
          items: 1,
      },
      450: {
          items: 1,
      },
      600: {
          items: 1,
      },
      1000: {
          items: 4,
      },
  },
}

    render(){
   
return (
  
  <>
  
  <Header/>
  <Link to="/login">
  <OwlCarousel  margin={8} loop={true} autoplay ={true} responsive={this.banner.responsive} style={{marginTop: "57px"}} > 
		<img src={img1} className="img-fluid" />
    
    <img src={img2}  className="img-fluid" />
  
    <img src={img3}  className="img-fluid" />
    
    <img src={img4}  className="img-fluid" ></img>
    
	</OwlCarousel>
	</Link>
  <section className="pricing  " id="doctor_consult">
            <div className="container">
			
                <div className="row">
      
       <div className="section-title" >
                    <h4>Doctor Consultation</h4>
       </div>
       
     <OwlCarousel  margin={8} loop={true} autoplay ={true} responsive={this.consultation.responsive}>
      
        <div className="card mb-3 mb-lg-3"  >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">General Physicians</h6>
            <hr/>
			
			<p>Access your family doctors via video, phone or chat .</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Everyday Care</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Reduce trips to Hospital</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>E-Prescriptions </li>
              <li></li>
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
		
          </div>
          </div>
		  </div>
		  
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer"  style={{padding:"7px"}}>
          <div className="card-body">
           
            <h6 className="card-price text-center">Multi Specialty Doctors</h6>
            <hr/>
			
			<p>Advanced care for any Specialty .</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Expert Advice</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Treatment Plan</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Referral Management </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer"  style={{padding:"0px"}}>
          <div className="card-body">
           
            <h6 className="card-price text-center">Surgeons</h6>
            <hr/>
			
			<p>Surgical treatment for various ailments .</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Top Surgeons </li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Pre and Post Operative Management</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Coordinated Care </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
		
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer"  style={{padding:"0px"}}>
          <div className="card-body">
           
            <h6 className="card-price text-center">Chat with your Doctor</h6>
            <hr/>
			
			<p>Chat with your doctors without the need for appointments.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Confidential</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Share Reports </li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Get advice by chat </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3">
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Second Opinions</h6>
            <hr/>
			
			<p>Get a more informed decision online for a diagnosis or treatment plan.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>No need to visit Hospital </li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Access Top Experts</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Get Personalized Care</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary">Know More</a>
			<hr/>
			    </div>
          </div>
		  </div>
		 
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Physiotherapy</h6>
            <hr/>
			
			<p>Reduce pain and perform your daily activities with better fitness level.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Tailored Treatment Package</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Get treated at Home or Clinic</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Preventive and Rehabilitation Care 
            </li>
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
      
      
      </OwlCarousel> 
      
        </div>     
           </div>
  </section>

<section className="banner set-bg"  style={{backgroundImage: `url(${img5})`}}>
    <div className="container">
        <div className="row">
            <div className="col-xl-10 col-lg-10 m-auto">
                <div className="banner__slider ">
                    <div className="banner__item">
                        <div className="banner__text">
                            
                            <h1   style={{color:"#0c3f73"}}>Fast and affordable lab testing in our private labs.</h1><br/>
                            <h2 style={{color:"#0c3f73",fontWeight:300}}>Lab at your doorstep, all pathology solutions with at-home sample collection. </h2><br/><br/>
                            <a style={{color:"#0c3f73"}} href="/login">Book now</a>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    </div>
</section>

 
<section className="pricing " id="lab_test">
            <div className="container">
			
                <div className="row">
      
       <div className="section-title" >
                    <h4>Lab Test</h4>
					
                </div>
                    
                <OwlCarousel  margin={8} loop={true} autoplay ={true} responsive={this.consultation.responsive}>
      
        <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Health Packages</h6>
            <hr/>
			
			<p>Essential preventive screening tests to get insights into overall health.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Screening for health conditions</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Complete Metabolic Panel</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Determine Risk factors </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Individual Tests</h6>
            <hr/>
			
			<p>Select tests directly and schedule appointment for sample collection.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Trusted by Doctors </li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Test results reported by Top Doctors</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Get reports online </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">COVID Tests </h6>
            <hr/>
			
			<p>Get the essential COVID tests from ICMR approved Labs .</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Diagnostic Testing </li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Antibody Testing for past infection</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Help with COVID Care</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		
                     </OwlCarousel> 
                     </div>
            </div>
        </section>

		


<br/>
<section className="banner set-bg"  style={{backgroundImage: `url(${img6})`}} >
    <div className="container">
        <div className="row">
            <div className="col-xl-10 col-lg-10 m-auto">
                <div className="banner__slider ">
                    <div className="banner__item">
                        <div className="banner__text">
                            
                            <h1 style={{color:"#0c3f73"}}  style={{color:"#0c3f73"}}>Order medicine online with few easy steps.</h1><br/>
                            <h2 style={{color:"#0c3f73",fontWeight:300}}  >Serving the community with home delivering your medical supplies.</h2><br/><br/>
                            <a style={{color:"#0c3f73"}} href="/login">Book now</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</section>


<br/>

<section className="pricing  " id="pharma">
            <div className="container">
			
                <div className="row">
      
       <div className="section-title" >
                    <h4>Pharmacy</h4>
                </div>
                    
                <OwlCarousel  margin={8} loop={true} autoplay ={true} responsive={this.consultation.responsive}>
      
        <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">OTC </h6>
            <hr/>
			
			<p>Our online store will help you buy over the counter products faster and easier.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Search by Product or Category</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Dispensed by Pharmacy</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>100% safe and Home Delivered or Pickup</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">COVID Essentials </h6>
            <hr/>
			
			<p>Safety supplies for your family, home or office.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Personal protection supplies</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Maintain Clean Facilities</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Diagnose, monitor and test</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
		
          </div>
		  </div>
		  </div>
		
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Prescription Medicines </h6>
            <hr/>
			
			<p>We help buying Prescription medicines easier, safer and reliable.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Wide range of high quality Generic and Branded medicines</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Dispensed by our licensed or partner pharmacy</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>100% safe and Home Delivered or local Pickup </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
         </OwlCarousel> 
             </div>   
            </div>
        </section>
		
		<br/>
	
<section className="banner set-bg"   style={{backgroundImage: `url(${img7})`}} >
    <div className="container">
        <div className="row">
            <div className="col-xl-10 col-lg-10 m-auto">
                <div className="banner__slider">
                    <div className="banner__item">
                        <div className="banner__text">
                            
                            <h1 style={{color:"white"}}>Providing the best health services</h1><br/>
                            <h2 style={{color:"white",fontWeight:300}}>Solution of your health issues with complete facilities. Expert doctors, lab tests, pharmacy no need to go anywhere.</h2><br/><br/>
                            <a style={{color:"white"}} href="/login">Book now</a>
                        </div>
                    </div>
                  
                    
                </div>
            </div>
        </div>
    </div>
</section>
<br/>


<section className="pricing  " id="health_service">
            <div className="container">
			
                <div className="row">
     
       <div className="section-title">
                    <h4>Health services</h4>
                </div>
                    
                <OwlCarousel  margin={8} loop={true} autoplay ={true} responsive={this.consultation.responsive}>
      
        <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Vaccination </h6>
            <hr/>
			
			<p>We provide all kinds of vaccinations for new born, kids and adults.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Wide range of vaccinations</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Home or Clinic administered</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Online Vaccination Records</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
		
          </div>
		  </div>
		  </div>
		  
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Physiotherapy </h6>
            <hr/>
			
			<p>Reduce pain and perform your daily activities with better fitness level.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Tailored Treatment Package</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Get treated at Home or Clinic</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Preventive and Rehabilitation Care </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
		
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Home X-Ray  </h6>
            <hr/>
			
			<p>We help patients to avoid difficult and potentially hazardous trips to hospitals.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Faster turnaround time for Diagnosis </li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Digital X-Ray with Radiologist reporting</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Trusted by Doctors</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Nursing  </h6>
            <hr/>
			
			<p>Allow your loved one to receive the care they Need.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>In-Home Nursing</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Manage specific ailments</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Physician directed long or short term services </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Wound Dressing   </h6>
            <hr/>
			
			<p>We bring efficient ways to treat wounds by bringing the clinic to patients.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Personalized approach</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>TeleHealth Platform to track progress</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Heal wounds faster </li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		     </OwlCarousel> 
                    
             </div>   
            </div>
        </section>
		
		
<section className="banner set-bg"   style={{backgroundImage: `url(${img8})`}} >
    <div className="container">
        <div className="row">
            <div className="col-xl-10 col-lg-10 m-auto">
                <div className="banner__slider">
                    <div className="banner__item">
                        <div className="banner__text">
                            
                            <h1 style={{color:"white"}}>Access the newest technology upgrades. </h1><br/>
                            <h2 style={{color:"white",fontWeight:300}}>Accurate radiology solution near you. Book your appointment over a call. </h2><br/><br/>
                            <a  style={{color:"white"}} href="/login">Book now</a>
                            
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    </div>
</section>



<section className="pricing  " id="radiology_test">
            <div className="container">
			
                <div className="row" >
     
      <div className="section-title">
                    <h4>Radiology TESTS</h4>
                </div>
                    
                <OwlCarousel  margin={8} loop={true} autoplay ={true} responsive={this.consultation.responsive}>
      
        <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">X-Ray   </h6>
            <hr/>
			
			<p>Get X-Ray tests done at top imaging facilities and diagnostic centers.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Expert Reporting on every case</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Digital X-Ray for all situations</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Less Radiation exposure</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">MRI  </h6>
            <hr/>
			
			<p>Magnetic resonance imaging (MRI) uses magnets to create detailed images of your body.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>No Radiation exposure</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Images show normal or abnormal tissue</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Higher quality than X-Rays</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">CT Scans    </h6>
            <hr/>
			
			<p>A computed tomography (CT) scan uses X-rays to display cross sectional images.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Higher quality 2D-3D images than X-Ray</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Expert Reports trusted by Top doctors</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Non invasive process</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
		
		  <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Ultrasound </h6>
            <hr/>
			
			<p>An ultrasound exam uses a handheld device to take pictures of organs and other structures using high frequency sound waves.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Painless process</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Expert Radiologist Reporting</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>All types and procedures</li>
              
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
		
          </div>
		  </div>
		  </div>
		 
		 <div className="card mb-3 mb-lg-3" >
		<div className="offer">
          <div className="card-body">
           
            <h6 className="card-price text-center">Mammogram </h6>
            <hr/>
			
			<p>Mammography is X-ray imaging of your breasts designed to detect tumors and other abnormalities.</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Screening for potential signs or symptoms</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Diagnostic imaging to investigate abnormal findings</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Expert Radiologist reporting</li>
              
            </ul>
            <a href="/login" className="btn btn-block btn-primary ">Know More</a>
			<hr/>
			
          </div>
		  </div>
		  </div>
     </OwlCarousel> 
     </div>   
      </div>
        </section>
<br/><br/>
<Footer/>
  </>
  
  
  
 
);

}
}


export default Home;