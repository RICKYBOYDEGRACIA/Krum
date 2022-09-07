import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import Testimonials from "./components/Testimonial";
import "./App.css";
import pen from "./img/pens.jpg";
import graphic1 from "./img/graphicdesign.jpg";
import graphic2 from "./img/graphicdesign2.jpeg";
import td from "./img/3dDrawing.jpg";
import homedesign from "./img/homedesign.jpg";
import interior from "./img/interiordesign.jpg";
import mobileapp from "./img/mobileapp.jpg";
import printdesign from "./img/printdesign.jpg";
import webdesign from "./img/webdesign.jpg";
import { BsLaptop, BsApple, BsCamera, BsGlobe, BsPencil, BsBrightnessHigh, BsArrowRight} from "react-icons/bs";
import Ricky1 from "./img/Ricky1.jpg";
import Ricky2 from "./img/Ricky2.jpg";
import Ricky3 from "./img/Ricky3.jpg";
import Ricky4 from "./img/Ricky4.jpg";
import Tempor from "./img/Tempor.jpg";
import Eiusmod from "./img/Eiusmod.jpg";
import Conseqntur  from "./img/Conseqntur.jpg";

function App() {
  return (
      <div className='content'>

          <div className='home' id='home'>
            <Navigation/>
              <div className='home-body'>
                <div className='home-body-title'>
                  <h1>CLEAN AND FLEXIBLE TEMPLATE</h1>
                </div>
                <div className='home-body-subtitle'>
                  <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
                <div className='home-body-button'>
                  <button style={{backgroundColor:"#4D8CF5", borderStyle:"none" }}>DOWNLOAD NOW</button>
                  <button style={{backgroundColor:"transparent", borderColor:"#4D8CF5" }}>VIEW FEATURES</button>
                </div>
              </div>
          </div>


          <div className='about' id ="about">
              <div className='about-title'>
                <h1>ABOUT US</h1>
                  <div className='about-subtitle'>
                    <p>Setibulum rutrum quam vitae fringilla tincidunt</p>
                  </div>
              </div>

              <div className='about-body'>
                <p>Lorem ipsum dolor sitamet, consectetur adipisicing elit, 
                  seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quisus nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                  id est laborum.
                  <br/><br/>
                  Excepteur sint occaecat cupidatat none proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum voluptate dolor.</p>

                  <div className='about-image'>
                    <img src={pen} height={300} width={300} alt="pen"/>
                  </div>
              </div>
          </div>

          <div className='portfolio' id='portfolio'>
              <div className="portfolio-title">
                <h1>PORTFOLIO</h1>
                  <div className='portfolio-subtitle'>
                      <p>An eye for detail makes our work beautiful</p>
                  </div>
              </div>

              <div className='portfolio-body'>
                  <div className='one'>
                    <img src={graphic1} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={printdesign} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={mobileapp} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={td} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={interior} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={webdesign} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={graphic2} alt="img"></img>
                  </div>
                  <div className='one'>
                    <img src={homedesign} alt="img"></img>
                  </div>

                  <div className='portfolio-contact'>
                    <h1>Have a Project in Mind? </h1>
                    <button className='contact'>CONTACT NOW</button>
                  </div>

                  <div className='porfolio-testimonial'>
                      <div className='porfolio-testimonial-title'>
                        <h1>TESTIMONIALS</h1>
                      </div>
                        
                        <div className='porfolio-testimonial-subtitle'>
                          <Testimonials/>
                        </div>
                  </div>
              </div>
          </div>

          <div className='services' id='services'>
              <div className='services-title'>
                <h1>SERVICES</h1>
                <p>An eye for detail makes our work beautiful</p>
              </div>

              <div className='services-body'>
                <div className='services-body-section'>
                  <div className='section'>
                    <div className ='section-content'>
                      <BsLaptop style={{fontSize:"50px", color:"#4D8CF5"}} />
                      <h3>WEB DESIGN</h3>
                        <div className='section-content-sub'>
                          <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Suspendisse varius enim 
                            eros elementum tristique. Duis cursus, viverra
                            ornare, eros dolor interdum nulla, commodo 
                            diam libero vitae.</p>
                        </div>
                    </div>
                  </div>

                  <div className='section'>
                    <div className ='section-content'>
                        <BsBrightnessHigh style={{fontSize:"50px", color:"#4D8CF5"}} />
                        <h3>WEB DESIGN</h3>
                          <div className='section-content-sub'>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Suspendisse varius enim 
                              eros elementum tristique. Duis cursus, viverra
                              ornare, eros dolor interdum nulla, commodo 
                              diam libero vitae.</p>
                          </div>
                      </div>
                  </div>
                  <div className='section'>
                    <div className ='section-content'>
                        <BsPencil style={{fontSize:"50px", color:"#4D8CF5"}} />
                        <h3>APP DESIGN</h3>
                          <div className='section-content-sub'>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Suspendisse varius enim 
                              eros elementum tristique. Duis cursus, viverra
                              ornare, eros dolor interdum nulla, commodo 
                              diam libero vitae.</p>
                          </div>
                    </div>
                  </div>
                  <div className='section'>
                    <div className ='section-content'>
                        <BsCamera style={{fontSize:"50px", color:"#4D8CF5"}} />
                        <h3>PHOTOGRAPHY</h3>
                          <div className='section-content-sub'>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Suspendisse varius enim 
                              eros elementum tristique. Duis cursus, viverra
                              ornare, eros dolor interdum nulla, commodo 
                              diam libero vitae.</p>
                          </div>
                      </div>
                  </div>
                  <div className='section'>
                    <div className ='section-content'>
                        <BsApple style={{fontSize:"50px", color:"#4D8CF5"}} />
                        <h3>BRANDING</h3>
                          <div className='section-content-sub'>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Suspendisse varius enim 
                              eros elementum tristique. Duis cursus, viverra
                              ornare, eros dolor interdum nulla, commodo 
                              diam libero vitae.</p>
                          </div>
                      </div>
                  </div>
                  <div className='section'>
                    <div className ='section-content'>
                        <BsGlobe style={{fontSize:"50px", color:"#4D8CF5"}} />
                        <h3>HOSTING</h3>
                          <div className='section-content-sub'>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Suspendisse varius enim 
                              eros elementum tristique. Duis cursus, viverra
                              ornare, eros dolor interdum nulla, commodo 
                              diam libero vitae.</p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>

          <div className='team' id='team'>
              <div className='team-title'>
                <h1>AWESOME TEAM</h1>
                <p style={{fontStyle:"italic"}}>Setibulum rutrum quam vitae fringilla tincidunt</p>
              </div>

              <div className='team-body'>
                <div className='team-body-contents'>

                    <div className='people'>
                      <img src={Ricky3} alt="img"></img>
                      <div className='people-data'>
                          <h4>RICKY BOY DE GRACIA</h4>
                          <p>Web Developer</p>
                        </div>
                    </div>

                    <div className='people'>
                      <img src={Ricky4} alt="img"></img>
                        <div className='people-data'>
                            <h4>RICKY BOY DE GRACIA</h4>
                            <p>Web Designer</p>
                          </div>
                    </div>
                </div>
              </div>
              <div className='team-body-footer'></div>
          </div>

          <div className="blog" id="blog">
                  <div className='blog-title'>
                    <h1>LATEST NEWS</h1>
                      <div className='blog-subtitle'>
                        <p style={{fontStyle:"italic"}}>Check out our latest news and activities</p>
                      </div>
                  </div>

                  <div className="blog-body">
                    <div className="blog-body-contents">

                      <div className="blog-1-3">
                        <img src={Tempor} alt="img"></img>
                          <div className="blog-1-3-information">
                              <div className="blog-1-3-title">
                                <h3>Tempor incidunt labore dolor</h3>
                              </div>

                              <div className="blog-1-3-date">
                                  <p>August 24, 2016</p>
                              </div>

                              <div className="blog-1-3-text">
                                  <p>Excepteur sint occaecat cupidatat 
                                  non proident, sunt in culpa qui officia 
                                  deserunt mollit anim id est laborum.</p>
                              </div>
                              
                              <div className="blog-1-3-button">
                                  <a href="/">READ MORE <BsArrowRight/></a>
                              </div>
                          </div>
                      </div>

                      <div className="blog-1-3">
                        <img src={Eiusmod} alt="img"></img>
                          <div className="blog-1-3-information">
                              <div className="blog-1-3-title">
                                <h3>Eiusmod tempor labore aliqua</h3>
                              </div>

                              <div className="blog-1-3-date">
                                  <p>August 20, 2016</p>
                              </div>

                              <div className="blog-1-3-text">
                                  <p>Excepteur sint occaecat cupidatat 
                                  non proident, sunt in culpa qui officia 
                                  deserunt mollit anim id est laborum.</p>
                              </div>
                              
                              <div className="blog-1-3-button">
                                  <a href="/">READ MORE <BsArrowRight/></a>
                              </div>
                          </div>
                      </div>

                      <div className="blog-1-3">
                        <img src={Conseqntur} alt="img"></img>
                          <div className="blog-1-3-information">
                              <div className="blog-1-3-title">
                                <h3>Conseqntur distinctio ipsum</h3>
                              </div>

                              <div className="blog-1-3-date">
                                  <p>August 18, 2016</p>
                              </div>

                              <div className="blog-1-3-text">
                                  <p>Excepteur sint occaecat cupidatat 
                                  non proident, sunt in culpa qui officia 
                                  deserunt mollit anim id est laborum.</p>
                              </div>
                              
                              <div className="blog-1-3-button">
                                  <a href="/">READ MORE <BsArrowRight style={{fontWeight:"900"}}/></a>
                              </div>
                          </div>
                      </div>
                    </div>

                    <div className="blog-footer-button">
                      <button>READ OUR BLOG</button>
                    </div>
                  </div>
          </div>


          <div className="contact-us" id="contact-us">
              <div className='contact-us-title'>
                    <h1>KEEP IN TOUCH</h1>
                      <div className='contact-us-subtitle'>
                        <p style={{fontStyle:"italic"}}>Setibulum rutrum quam vitae fringilla tincidunt</p>
                      </div>
              </div>

              <div className="contact-us-body">
                  <div className="contact-us-content">
                    <div className="input-2">
                      <input className="form-control" type="text"  placeholder="Enter your name"></input>
                      <div className="input-2-space" style={{margin:"2%"}}></div>
                      <input className="form-control" type="text"  placeholder="Enter your name"></input>
                    </div>
                    <div className="input-1">
                      <input className="form-control" type="text"  placeholder="Enter your email address"></input>
                      <textarea className="form-control" style={{width:"100%"}} placeholder="your message"></textarea>
                    </div>
                    <div className="input-button">
                    <input class="button" type="submit" value="SEND MESSAGE"/>
                    </div>

                  </div>
              </div>
          </div>
        <Footer/>
      </div>
  );
}

export default App;