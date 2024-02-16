import React, { useState } from 'react';

function mainScript() {
    // State to manage visibility
    const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
    const [isMenuListVisible, setMenuListVisible] = useState(false);

    // Toggle the visibility of the search box
    const toggleSearchBox = () => {
        setSearchBoxVisible(!isSearchBoxVisible);
    };

    // Toggle the visibility of the menu list
    const toggleMenuList = () => {
        setMenuListVisible(!isMenuListVisible);
    };

    return (
        <main>
            {/* Rest of your component */}

            {/* Search Button */}
            <button className="search-btn" onClick={toggleSearchBox}>
                <i className='bx bx-search'></i>
            </button>
            
            {/* Search Box */}
            {isSearchBoxVisible && (
                <div className="search-box show">
                    <input type="text" placeholder="Search Here" autoFocus />
                    <button className="cancel-btn" onClick={() => setSearchBoxVisible(false)}>X</button>
                </div>
            )}

            {/* Menu Button */}
            <button className="menu-btn" onClick={toggleMenuList}>
                MENU <i className='bx bx-menu'></i>
            </button>

            {/* Menu List */}
            {isMenuListVisible && (
                <div className="menu-list show">
                    <ul>
                        <li><a href="#">Home</a></li>
                        {/* Add other menu items */}
                    </ul>
                </div>
            )}

            {/* Rest of your component */}
        </main>
    );
}

export default mainScript;
