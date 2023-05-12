import React from 'react'
import  './Navbar.css' 

const Navbar = () => {
  return (
    <div>
        <div class="free-shiping-container">
    <div class="text-header">
      shipping to Kyrgyzstan on all orders above KGS21,825.00
    </div>
  </div>
  <header>  
    <div class="container">
      <div class="header-menu">
        <div class="left-menu">
          <ul>
            SHOP
          </ul>
          <ul>
            COLLECTION
          </ul>
          <ul>
            NEWS
          </ul>
        </div>
        <div class="logo-name">Madhappy</div>
        <div class="right-menu">
          <ul>
            SEARCH
          </ul>
          <ul>
            LOG IN
          </ul>
          <ul>
            KG+
          </ul>
          <ul>
            CART
          </ul>
        </div>
      </div>
    </div>
    <div class="container-f-a">
      <div class="alls">ALL / ALL</div>
      <div class="filters">FILTER+</div>
    </div>
  </header>
    <div class="page">
      <footer class="footer">
        <div class="footer-div">
          <div class="footer-menu">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">The local optimis</a></li>
              <li><a href="#">The MadHappycpodcast</a></li>
            </ul>
          </div>
          <div class="footer-menu2">
            <ul>
              <li><a href="#">Faq</a></li>
              <li><a href="#">Careersaccessibility</a></li>
              <li><a href="#">Privacy Police</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Navbar