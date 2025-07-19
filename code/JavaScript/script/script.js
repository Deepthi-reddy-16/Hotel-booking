let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Initialize all swipers
var homeSwiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var roomSwiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var gallerySwiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Handle FAQs accordion
let accordions = document.querySelectorAll('.faqs .row .content .box');
accordions.forEach(accordion => {
    accordion.onclick = () => {
        accordions.forEach(subAcco => subAcco.classList.remove('active'));
        accordion.classList.add('active');
    };
});

// Handle room selection and confirmation
document.querySelector('.room-selection-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const selectedRoom = document.querySelector('.swiper-slide-active .content h3').textContent;
    const price = document.querySelector('.swiper-slide-active .price').textContent.replace('$', '');
    const convertedPrice = parseFloat(price) * 75; // Assuming $1 = 75 INR

    // Set the text in the confirmation overlay
    document.getElementById('roomType').textContent = selectedRoom;
    document.getElementById('roomPrice').textContent = `${convertedPrice} INR`;

    // Display the confirmation overlay
    document.getElementById('confirmationOverlay').style.display = 'flex';
});

// Function to close the confirmation overlay
function closeConfirmation() {
    document.getElementById('confirmationOverlay').style.display = 'none';
}

  
  
