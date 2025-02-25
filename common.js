let hamBurgerBtn = document.querySelector(".ham-burger-button.open");
let hamBurgerMenu = document.querySelector(".ham-burger-menu");
const logo = document.querySelector(".logo");
const hamburger = document.getElementById("hamburger");
const mainLinks = document.querySelector(".main-links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        logo.classList.add("scrolled");
    } else {
        logo.classList.remove("scrolled");
    }
});

if (hamBurgerBtn) {
    hamBurgerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        hamBurgerMenu.classList.toggle("active");
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 520) {
            hideHamBurger();
        }
    });

    window.addEventListener('click', () => {
        if (hamBurgerMenu.classList.contains('active')) {
            hideHamBurger();
        }
    });

    function hideHamBurger() {
        hamBurgerMenu.classList.remove("active");
    }
}

const services = {
    'computer-lab': {
      title: 'Computer Lab',
      image: './images/computer-lab.jpg',
      description: 'Our state-of-the-art computer lab is equipped with the latest technology and software. Students have access to high-speed internet and modern computers for research, assignments, and computer science classes. The lab is supervised by experienced staff who provide guidance and support to students working on technology-based projects.'
    },
    'cafeteria': {
      title: 'Cafeteria',
      image: './images/cafeteria.jpg',
      description: 'The school cafeteria provides nutritious and delicious meals for students and staff. We offer a variety of menu options including vegetarian choices. Our cafeteria focuses on balanced nutrition while maintaining high standards of hygiene and food safety. The spacious dining area provides a comfortable environment for students to enjoy their meals.'
    },
    'transportation': {
      title: 'Transportation',
      image: './images/transportation.jpg',
      description: 'We provide safe and reliable transportation services for students. Our fleet of buses covers various routes throughout the city, making commuting convenient for students. Each bus is equipped with safety features and is maintained regularly. Experienced drivers and attendants ensure that students reach school and return home safely.'
    },
    'sports': {
      title: 'Sports Facilities',
      image: './images/sports.jpg',
      description: 'Our school offers excellent sports facilities including a large playground, basketball court, and indoor games area. We encourage students to participate in various sports activities to develop physical fitness, teamwork, and sportsmanship. Regular sports events and competitions are organized to foster healthy competition among students.'
    },
    'internet': {
      title: 'Internet Facilities',
      image: './images/internet.jpg',
      description: 'The school provides high-speed internet access throughout the campus. Students can access online educational resources, research materials, and learning platforms. Our secure network ensures safe browsing while our IT team monitors usage to maintain appropriate educational standards. Wi-Fi connectivity is available in designated areas for academic purposes.'
    }
  };
  
  const serviceLinks = document.querySelectorAll('.service-link');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupClose = document.getElementById('popup-close');
  const popupTitle = document.getElementById('popup-title');
  const popupImg = document.getElementById('popup-img');
  const popupText = document.getElementById('popup-text');

  serviceLinks.forEach(link => {
    link.addEventListener('click', function() {
      const serviceId = this.getAttribute('data-service');
      const service = services[serviceId];
      popupTitle.textContent = service.title;
      popupImg.src = service.image;
      popupImg.alt = service.title;
      popupText.textContent = service.description;
      
      popupOverlay.classList.add('active');
      
      document.body.style.overflow = 'hidden';
    });
  });
  
  popupClose.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });