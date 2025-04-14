const timeline = document.querySelector(".timeline");
const timelineContainers = document.querySelectorAll(".timeline-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        timeline.classList.add("show-line");
        timeline.classList.remove("hide-line");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);

timelineContainers.forEach((container) => {
  observer.observe(container);
});

window.addEventListener("scroll", () => {
  const timelineRect = timeline.getBoundingClientRect();
  const top = timelineRect.top;
  const bottom = timelineRect.bottom;

  if (top > window.innerHeight / 2 || bottom < window.innerHeight / 2) {
    timeline.classList.remove("show-line");
    timeline.classList.add("hide-line");
  } else {
    timeline.classList.add("show-line");
    timeline.classList.remove("hide-line");
  }
});
