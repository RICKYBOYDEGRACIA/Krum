import React from 'react';
import "../css/Footer.css";
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#222222' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <div className='footer-text'>
                <a href='/'>FACEBOOK</a>
                <a href='/'> TWITTER</a>
                <a href='/'> INSTAGRAM</a>
                <a href='/'> GOOGLE+</a>
            </div>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' >
        <p>© 2016 KRUNCH LANDING PAGE, DESIGNED BY <a href='/'> SHUVO</a> WEBFLOWED BY <a href='/'> TAIMURIAN</a></p>
      </div>
    </MDBFooter>
  );
}