import React from 'react';
import { FaInstagram } from '@mui/icons-material';
import { FaTwitter } from '@mui/icons-material';
import { FaFacebook } from '@mui/icons-material';
import { FaPinterest } from '@mui/icons-material';
import "./Footer.css";
import { colors } from '@mui/material';


function Footer() {
  return (
   <div style={{borderTop: "1px solid black", marginTop:"10px"}}>
    <footer className="footer" style={{ borderBottom: "1px solid black", marginTop:"20px"}}>

      <div className="footer-container" style={{ marginBottom: "20px"}}>
        <div className="footer-row">
          <div className="footer-col" style={{marginLeft: "20px"}}>
            <h4 style={{ marginBottom: "20px"}}>Мы в соцсетях</h4>
            <ul className="social-icons">
              <li  href="#">About</li>
              <li href="https://twitter.com/madhappy/">Twitter</li>
              <li  href="https://www.instagram.com/madhappy/">Instagram</li>
              <li href="#">LOCAL OPTIMIST™</li>
              <li  href="#">THE MADHAPPY FOUNDATION™</li>
              {/* <li><a href="https://www.instagram.com/madhappy/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
              <li><a href="https://twitter.com/madhappy/" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
              <li><a href="https://www.facebook.com/madhappybrand/" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.pinterest.com/madhappy/" target="_blank" rel="noreferrer"><FaPinterest /></a></li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ marginBottom: "20px"}}>Контакты</h4>
            <ul className="contact">
              <li>1234 Some Street, Los Angeles, CA 90001</li>
              <li href="#">info@madhappy.com</li>
              <li>+1 123-456-7890</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ marginBottom: "20px"}}>Подписаться на новости</h4>
            <form>
              <input className='email' type="email" placeholder="Введите ваш email" style={{backgroundColor:"black", color:"white", height: "50px", width:"250px"}}/>
              <button type="submit" style={{backgroundColor:"black", color:"white", height:"50px" ,width:"100px"}} >Подписаться</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default Footer;
