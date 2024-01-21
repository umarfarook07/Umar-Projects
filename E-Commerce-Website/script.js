document.getElementById('js-search-btn').addEventListener('click', function() {
    const searchBox = document.getElementById('js-search-box');
    searchBox.innerHTML = '<input type="text" placeholder="Search Here"><button id="js-cancel-btn" class="cancel-btn">X</button>';
    
});

document.getElementById('js-search-box').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'js-cancel-btn') {
        const searchBox = document.getElementById('js-search-box');
        searchBox.innerHTML = '';        
    }
});
