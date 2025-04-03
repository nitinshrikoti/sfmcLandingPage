// -------------------- Dynamic Content Update --------------------

const title = "LifestyleDisorderWebinarOn9Apr";
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/0798e2b6-3bdc-4f73-9a6a-9ad04bf56d84.png";

const drName = "Vaidya Navneet";
const webDate = "9 April 2025 | 4:00 PM";

const joiningLink = "https://us06web.zoom.us/j/86765030104";
const whatsappLink = "https://jeenasikho.com/webinar/?page=lifestyle-disorders";

const newSlotDate = "9 April 2025";
const newSlotTime = "4:00 PM";
const offeringTitle = "Lifestyle Disorder";
const waitUntillDate = "2025-04-09";
const targetDate = new Date("April 9, 2025 16:00:00").getTime();
const contactNumber = "917710371037";

const heroHeading =
  "Webinar on <b><i>Lifestyle Disorder</i></b> by <i>Team Acharya Manish Ji</i>";
const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "CERTIFIED in Psychosomatic Disorders",
  "4+ Years of Experience",
];
const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/e6cabbf5-0635-43f1-801f-0ac0ad688f98.png";

// Why Join Content
const why1 =
  "जो <b>CLD</b> और <b>CKD</b> से राहत पाना चाहते हैं और Ayurvedic solutions अपनाना चाहते हैं।";
const why2 =
  "जो <b>joint pain</b> और <b>mobility issues</b> को कम कर <b>better movement</b> चाहते हैं।";
const why3 =
  "जो <b>acidity, constipation, और indigestion</b> जैसी <b>GIT disorders</b> से छुटकारा चाहते हैं।";
const why4 = "जो <b>lifestyle changes</b> से <b>overall health<b> सुधारना चाहते हैं।";
const why5 =
  "जो <b>natural remedies से body detox</b> और immunity boost करना चाहते हैं।";

const Testi1 =
  '"The webinar was very informative! I learned practical tips to manage my diabetes better. Highly recommend it!"';
const Testi2 =
  '"The expert tips on mental wellness were easy to apply and made a real difference."';
const Testi3 =
  '"Great session! The explanations were clear, and I feel more confident about reversing my blood sugar levels & diabetes"';


// Selectors for the dynamic content
document.title = title;
document.getElementById("heroHeading").innerHTML = heroHeading;
if (document.getElementById("drImg")) {
  drImg.src = docImg;
}

if (document.getElementById("BannerImg")) {
  BannerImg.src = bannerImage;
}
document.getElementById("drName1").innerHTML = drName;
document.getElementById("drName2").innerHTML = drName;
document.getElementById("webDate").innerHTML = webDate;

// Dr. Details
const ulElement = document.createElement("ul");
drDetails.forEach((item) => {
  const liElement = document.createElement("li");
  liElement.textContent = item;
  ulElement.appendChild(liElement);
});
document.getElementById("drDetails").appendChild(ulElement);

document.getElementById("why1").innerHTML = why1;
document.getElementById("why2").innerHTML = why2;
document.getElementById("why3").innerHTML = why3;
document.getElementById("why4").innerHTML = why4;
document.getElementById("why5").innerHTML = why5;

document.getElementById("whatsappLink1").href = whatsappLink;
document.getElementById("whatsappLink2").value = whatsappLink;
document.getElementById("joiningLink").value = joiningLink;
document.getElementById("NewSlotDate").value = newSlotDate;
document.getElementById("NewSlotTime").value = newSlotTime;
document.getElementById("OfferingTitle").value = offeringTitle;
document.getElementById("WaitUntillDate").value = waitUntillDate;
document.getElementById("ContactNumber").value = contactNumber;

document.getElementById("testi1").innerHTML = Testi1;
document.getElementById("testi2").innerHTML = Testi2;
document.getElementById("testi3").innerHTML = Testi3;

// Selectors for the dynamic content end

// -------------------- Timer Script --------------------
// Main Timer Elements
const mainDays = document.getElementById("mainDays");
const mainHours = document.getElementById("mainHours");
const mainMinutes = document.getElementById("mainMinutes");
const mainSeconds = document.getElementById("mainSeconds");

// Footer Timer Elements
const footerDays = document.getElementById("footerDays");
const footerHours = document.getElementById("footerHours");
const footerMinutes = document.getElementById("footerMinutes");
const footerSeconds = document.getElementById("footerSeconds");

// Helper function to add leading zero
function formatTime(num) {
  return num < 10 ? "0" + num : num;
}

// Set your target date/time here (shared by both timers)
// const targetDate = new Date("April 3, 2025 10:00:00").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  // If countdown is over, set all to "00"
  if (distance < 0) {
    updateTimer("00", "00", "00", "00");
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    updateTimer(
      formatTime(days),
      formatTime(hours),
      formatTime(minutes),
      formatTime(seconds)
    );
  }
}

// Update both main & footer timers
function updateTimer(d, h, m, s) {
  if (mainDays) mainDays.textContent = d;
  if (mainHours) mainHours.textContent = h;
  if (mainMinutes) mainMinutes.textContent = m;
  if (mainSeconds) mainSeconds.textContent = s;

  if (footerDays) footerDays.textContent = d;
  if (footerHours) footerHours.textContent = h;
  if (footerMinutes) footerMinutes.textContent = m;
  if (footerSeconds) footerSeconds.textContent = s;
}

// Run timer every second
setInterval(timer, 1000);
timer(); // Initialize immediately

// -------------------- Fill Form Script --------------------

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementsByClassName("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");
var formContainer = document.getElementById("formContainer");
var successContainer = document.getElementById("successContainer");

// On page load, check if isSubmitted was set to true by AMPscript
document.addEventListener("DOMContentLoaded", function () {
  if (typeof isSubmitted !== "undefined" && isSubmitted === true) {
    // Show the modal with success message
    modal.style.display = "block";
    successContainer.style.display = "block";
    formContainer.style.display = "none";
  }
});

function newopenmodal() {
  modal.style.display = "block";
  successContainer.style.display = "none";
  formContainer.style.display = "block";
}

// Close modal on "x" click
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal if user clicks outside modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// -------------------- Close Nav container Script --------------------
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  // Select all links or buttons inside .nav-tab elements
  const navTabs = document.querySelectorAll(".nav-tab a, .nav-tab button");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Uncheck the checkbox to close the nav-container
      menuToggle.checked = false;
    });
  });
});
