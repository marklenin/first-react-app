import React from 'react';
import { FaInstagram } from '@mui/icons-material';
import { FaTwitter } from '@mui/icons-material';
import { FaFacebook } from '@mui/icons-material';
import { FaPinterest } from '@mui/icons-material';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Мы в соцсетях</h4>
            <ul className="social-icons">
              <li>About</li>
              <li>Stories</li>
              <li>Instagram</li>
              <li>LOCAL OPTIMIST™</li>
              <li>THE MADHAPPY FOUNDATION™</li>
              <li><a href="https://www.instagram.com/madhappy/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
              <li><a href="https://twitter.com/madhappy/" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
              <li><a href="https://www.facebook.com/madhappybrand/" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
              <li><a href="https://www.pinterest.com/madhappy/" target="_blank" rel="noreferrer"><FaPinterest /></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Контакты</h4>
            <ul className="contact">
              <li>1234 Some Street, Los Angeles, CA 90001</li>
              <li>info@madhappy.com</li>
              <li>+1 123-456-7890</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Подписаться на новости</h4>
            <form>
              <input type="email" placeholder="Введите ваш email" />
              <button type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
