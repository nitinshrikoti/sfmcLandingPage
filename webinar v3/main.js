// const targetDate = new Date("%%=v(@startDT)=%%").getTime();
const targetDate = new Date("2026-07-01T16:30:00").getTime();

const webDateEl = document.getElementById("webDate");
const webTimeEl = document.getElementById("webTime");

if (webDateEl) {
  webDateEl.innerHTML = formatDate(targetDate);
}

if (webTimeEl) {
  webTimeEl.innerHTML = formatTime(targetDate);
}

// -------------------- Timer Script --------------------

function updateCountdown() {
  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = String(days).padStart(2, "0");

  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");

  document.getElementById("minutes").innerHTML = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").innerHTML = String(seconds).padStart(
    2,
    "0",
  );
}

// -------------------- How to youtube video --------------------
setInterval(updateCountdown, 1000);

updateCountdown();

const videoContainer = document.getElementById("videoContainer");

videoContainer.addEventListener("click", function () {
  videoContainer.innerHTML = `

    <iframe

        src="https://www.youtube.com/embed/Zxv21BqGicM?autoplay=1"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

        allowfullscreen>

    </iframe>

    `;
});

// -------------------- Faqs --------------------
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// -------------------- Displaying date --------------------

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();

  const year = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${months[date.getMonth()]} ${year}`;
}

function formatTime(timestamp) {
  const date = new Date(timestamp);

  let hours = date.getHours();

  const minutes = String(date.getMinutes()).padStart(2, "0");

  const meridian = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${meridian}`;
}
