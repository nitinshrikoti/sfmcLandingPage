// -------------------- Dynamic Content Update --------------------

const title = "DiabetesWebinarOn10Apr";
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/2a06da4f-2205-458e-a16f-fb3d4d65e198.png";

const drName = "Dr. Divyadeep";
const webDate = "10 April 2025 | 10:00 AM";

const joiningLink = "https://us06web.zoom.us/j/83661087818";
const whatsappLink = "https://jeenasikho.com/webinar/?page=mmb";

const newSlotDate = "10 April 2025";
const newSlotTime = "10:00 AM";
const offeringTitle = "Diabetes";
const waitUntillDate = "2025-04-10";
const targetDate = new Date("April 10, 2025 10:00:00").getTime();
const contactNumber = "917710371037";

const heroHeading =
  "Webinar on <b><i>Diabetes</i></b> by <i>Team Acharya Manish Ji</i>";

const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Diploma in Naturopathy and Diploma in Yoga",
  "Expertise in Chronic Diseases, Metabolic, Skin Disorders and Infertility",
  "16+ Years of Experience",
];

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/766d2799-154f-4dee-bab1-0a358411bb5e.png";

// Why Join Content
const why1 =
  "जो लोग <b>diabetes</b> (मधुमेह) को नियंत्रित करना या ठीक करना चाहते हैं।";
const why2 =
  "जिनकी <b>eyesight weak</b> हो रही है या <b>wounds heal</b> होने में समय लग रहा है।";
const why3 = "जिन्हें <b>heart disease या kidney problems</b> की परेशानी हो रही है।";
const why4 = "जिन्हें <b>frequent urination या excessive fatigue</b> की समस्या है।";
const why5 =
  "जो <b>natural remedies</b> से </b>blood sugar control</b> और overall health improve करना चाहते हैं।";

const Testi1 =
  '"Eye-opening webinar! The expert advice on diet and lifestyle changes was really helpful for my diabetes management."';
const Testi2 =
  '"Great session! The explanations were clear, and I feel more confident about reversing my blood sugar levels & diabetes"';
const Testi3 =
  '"The webinar was very informative! I learned practical tips to manage my diabetes better. Highly recommend it!"';

const TestiNam1 = "— Roshni Singh";
const TestiNam2 = "— Jagmeet Kaur";
const TestiNam3 = "— Preetinder";

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

document.getElementById("testiNam1").innerHTML = TestiNam1;
document.getElementById("testiNam2").innerHTML = TestiNam2;
document.getElementById("testiNam3").innerHTML = TestiNam3;

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

// -------------------- Form country script --------------------
const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "in",
  strictMode: true,
  loadUtils: function () {
    return import(
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
    );
  },
});

const form = document.getElementById("RegisterForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form submission temporarily

  const countryData = iti.getSelectedCountryData();

  // Set hidden fields
  document.getElementById("countryCode").value = countryData.dialCode;
  document.getElementById("initialCountry").value = countryData.iso2;

  // Now submit the form manually
  setTimeout(() => {
    form.submit();
  }, 100); // Slight delay ensures fields are updated
});