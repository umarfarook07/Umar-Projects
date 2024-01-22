document.getElementById('js-search-btn').addEventListener('click', function() {
    const searchBox = document.getElementById('js-search-box');
    searchBox.innerHTML = '<input type="text" placeholder="Search Here"><button id="js-cancel-btn" class="cancel-btn">X</button>';
    searchBox.classList.toggle('show');
});



document.getElementById('js-search-box').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'js-cancel-btn') {
        const searchBox = document.getElementById('js-search-box');
        searchBox.innerHTML = '';        
    }
});

const menuButton = document.getElementById('js-menu-btn');
const menuList = document.getElementById('js-menu-list');

let isMenuVisible = false;
menuButton.addEventListener('click', function() {
    if (isMenuVisible) {
        menuList.innerHTML = '';
    } else {
        menuList.innerHTML = '<ul><li><a href="#">Home</a></li><li><a href="#">Men</a></li><li><a href="#">Women</a></li><li><a href="#">Baby Collection</a></li><li><a href="#">Pages</a></li><li><a href="#">Blog</a></li><li><a href="#">Contact</a></li></ul>';
    }
    menuList.classList.toggle('show');
    isMenuVisible = !isMenuVisible;
});
