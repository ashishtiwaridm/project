function toggleMenu() {
  var leftSection = document.querySelector('.left-section');
  leftSection.style.display = (leftSection.style.display === 'flex') ? 'none' : 'flex';
}


  // Add your JavaScript code here
  function sendMessage() {
    var contact = document.getElementById("contact").value;
    var message = document.getElementById("message").value;

    if (message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }

    // Redirect to WhatsApp with the prefilled message
    var whatsappURL = "https://wa.me/1234567890?text=" + encodeURIComponent(message); // Replace 1234567890 with the actual WhatsApp number
    window.location.href = whatsappURL;
  }

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var marquee = document.querySelector('.marquee');
        var navbar = document.querySelector('.navbar');

        if (window.scrollY > navbar.offsetHeight) {
            marquee.style.top = navbar.offsetHeight + 'px';
        } else {
            marquee.style.top = 0;
        }
    });
});



function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}





let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth;

  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  currentIndex = index;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}


document.getElementById('whatsapp-icon').addEventListener('click', function() {
  // Replace '1234567890' with your actual phone number
  // var phoneNumber = '8770183554';
  var whatsappLink = 'https://wa.link/8bqfet' ;
  window.location.href = whatsappLink;
});

document.getElementById('call-icon').addEventListener('click', function() {
  // Replace '1234567890' with your actual phone number
  var phoneNumber = '8770183554';
  window.location.href = 'tel:' + phoneNumber;
});



  // Simple slider functionality
  const productContainer = document.querySelector('.product-list');
  let currentIndex = 0;

  function showSlide(index) {
      const transformValue = -index * 100 + '%';
      productContainer.style.transform = 'translateX(' + transformValue + ')';
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % productContainer.children.length;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + productContainer.children.length) % productContainer.children.length;
      showSlide(currentIndex);
  }

  setInterval(() => {
      nextSlide();
  }, 3000);







