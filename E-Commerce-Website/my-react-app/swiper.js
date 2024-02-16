var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      });      
      
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 40,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// Function to update slider display based on the selected category
function updateSliderDisplay() {
  var selectedCategory = document.querySelector('input[name="category"]:checked').value + 'Slider';
  var sliders = document.querySelectorAll('.mySwiper2');

  sliders.forEach(function(slider) {
      if (slider.id === selectedCategory) {
          slider.style.display = 'block';
      } else {
          slider.style.display = 'none';
      }
  });
}

// Initial call to display the correct slider on page load
updateSliderDisplay();

// Event listener for category changes
document.getElementById('categoryForm').addEventListener('change', updateSliderDisplay);
