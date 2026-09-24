
var therapySwiper = new Swiper(".testimonialSlides", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: false,

  autoplay:
    window.innerWidth <= 767
      ? {
          delay: 3000,
          disableOnInteraction: false,
        }
      : false,

  navigation: {
    nextEl: ".attend-next",
    prevEl: ".attend-prev",
  },

  on: {
    init: function () {
      toggleAttendArrows(this);
    },

    slideChange: function () {
      toggleAttendArrows(this);
    },
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 2.5,
    },
  },
});

function toggleAttendArrows(swiper) {
  // 👇 Current slider ke parent me arrows dhundo
  const wrapper = swiper.el.parentElement;

  const prevBtn = wrapper.querySelector(".attend-prev");
  const nextBtn = wrapper.querySelector(".attend-next");

  if (!prevBtn || !nextBtn) return;

  if (swiper.isBeginning) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "flex";
  } else if (swiper.isEnd) {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}
// FAQ Accordion JS

const plusIcon = `
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.08333 5.75V12.4167M5.75 9.08333H12.4167M17.4167 9.08333C17.4167 13.6857 13.6857 17.4167 9.08333 17.4167C4.48096 17.4167 0.75 13.6857 0.75 9.08333C0.75 4.48096 4.48096 0.75 9.08333 0.75C13.6857 0.75 17.4167 4.48096 17.4167 9.08333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

const minusIcon = `
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75 9.08333H12.4167M17.4167 9.08333C17.4167 13.6857 13.6857 17.4167 9.08333 17.4167C4.48096 17.4167 0.75 13.6857 0.75 9.08333C0.75 4.48096 4.48096 0.75 9.08333 0.75C13.6857 0.75 17.4167 4.48096 17.4167 9.08333Z" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
        faq.querySelector(".faq-icon").innerHTML = plusIcon;
      }
    });

    item.classList.toggle("active");

    const icon = item.querySelector(".faq-icon");

    if (item.classList.contains("active")) {
      icon.innerHTML = minusIcon;
    } else {
      icon.innerHTML = plusIcon;
    }
  });
});

// Autoplay video js start here
document.querySelectorAll(".main-modal").forEach((modal) => {
  const iframe = modal.querySelector(".attend-video");

  modal.addEventListener("shown.bs.modal", function () {
    iframe.src = iframe.dataset.src + "&autoplay=1&mute=1";
  });

  modal.addEventListener("hidden.bs.modal", function () {
    iframe.src = "";
  });
});

// search eng to hindi change js

// disease webinar slide js
var diseaseSwiper = new Swiper(".diseaseWebinar", {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: false,

  autoplay:
    window.innerWidth <= 767
      ? {
          delay: 3000,
          disableOnInteraction: false,
        }
      : false,

  navigation: {
    nextEl: ".attend-next",
    prevEl: ".attend-prev",
  },

  pagination: {
    el: ".disease-pagination",
    clickable: true,
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    992: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

// upcoming slides js
var upcomingSwiper = new Swiper(".upcomingWebinarSlider", {
  slidesPerView: 1.2,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: false,

  navigation: {
    nextEl: ".attend-next",
    prevEl: ".attend-prev",
  },

  pagination: {
    el: ".upcoming-pagination",
    clickable: true,
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const mobileTopbar = document.getElementById("mobileTopbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      mobileTopbar.classList.add("active");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      mobileTopbar.classList.remove("active");
    });
  }
});
