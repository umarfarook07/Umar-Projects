import React from 'react';
import './mainContent.css';

function MainContent() {
    return (
        <main>
            {/* Menu Row Section */}
            <section className="menu-row">
                {/* Menu Button */}
                <div className="menu-div">
                    <button className="menu-btn" id="js-menu-btn">
                        MENU <i className='bx bx-menu'></i>
                    </button>
                </div>
                {/* Menu List Placeholder */}
                <div className="menu-list" id="js-menu-list">
                </div>
                {/* Search Box Placeholder */}
                <div className="search-box" id="js-search-box">
                </div>
            </section>
            {/* Hero Section with Collection Grid */}
            <section className="hero-section">
                {/* Collection Grid for Men's, Women's, and Baby's Collections */}
                <div className="collection-grid">
                    {/* Men's Collection */}
                    <div className="mens-collection">
                        <img className="collection-img" src="/Umar-Projects/E-Commerce-Website/Images/items1.jpg.webp" alt="Men's Collection" />
                        <span>Men's Collection</span>
                    </div>
                    {/* Women's Collection */}
                    <div className="womens-collection">
                        <img className="collection-img" src="/Umar-Projects/E-Commerce-Website/product-images/product-image4.jpeg" alt="Women's Collection" />
                        <span>Women's Collection</span>
                    </div>
                    {/* Baby's Collection */}
                    <div className="baby-collection">
                        <img className="collection-img" src="/Umar-Projects/E-Commerce-Website/Images/items3.jpg.webp" alt="Baby's Collection" />
                        <span>Baby's Collection</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainContent;
