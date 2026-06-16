const targetDate = new Date("2026-07-20T19:00:00").getTime();

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
