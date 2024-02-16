import React from 'react';
import './header.css'; 
import Logo from './assets/logo.webp'; 

function Header() {
    return (
        <header> 
            <div className="product-logo">
                <img className="logo-img" src={Logo} alt="Capital Shop Logo" />
            </div>
            <nav className="nav-bar">
                <div className="search-btn-div">                
                    <button className="search-btn" id="js-search-btn">
                        <i className='bx bx-search'></i>
                    </button>               
                </div>
                <div className="user-btn">
                    <a href="/Umar-Projects/E-Commerce-Website/User-registration-form/login.html" target="_blank" rel="noopener noreferrer">
                        <button>
                            <i className='bx bxs-user'></i>
                        </button>
                    </a>
                </div>
                <div className="cart-btn">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button>
                            <i className='bx bxs-cart'></i>
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
