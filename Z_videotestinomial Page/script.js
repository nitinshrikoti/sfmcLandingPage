// -------------------- Dynamic Content Update --------------------

const title = "test";
const offeringTitle = "All Joint Pain";

const joiningLink = "https://us06web.zoom.us/j/82099820502";
const whatsappLink = "https://jeenasikho.com/webinar/?page=joint";

const webDate = "22 April 2025 | 10:00 AM";
const newSlotDate = "22 April 2025";
const newSlotTime = "10:00 AM";
const waitUntillDate = "2025-04-22";
const targetDate = new Date("April 22, 2025 10:00:00").getTime();

const heroHeading =
  "Webinar on <b><i>All Joint Pain</i></b> by <i>Team Acharya Manish Ji</i>";

const drName = "Dr. Meghna";
const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Chronic Kidney & Liver Disease",
  "Lifestyle Disorders (GIT, Joint, Mental Health)",
  "7+ Years Of Experience",
];
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/2457b5fd-2e28-495d-90e0-5625d446d1b2.png";

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/ffec998a-5356-47d9-b86a-882e4cd865ea.png";

// Why Join Content
const why1 = "जो लोग <b>arthritis</b> या <b>joint pain</b> से जूझ रहे हैं।";
const why2 = "जिन्हें <b>bone swelling</b> या <b>stiffness</b> की समस्या हो।";
const why3 = "जिन्हें <b>walking, sitting, moving</b> में दिक्कत हो रही है।";
const why4 = "जो <b>severe joint pain</b> और <b></b> से राहत पाना चाहते हैं।";
const why5 =
  "जो <b>natural remedies</b> से <b>joint health</b> सुधारना चाहते हैं।";


const contactNumber = "917710371037";

// -------------------- Dynamic Content Update End --------------------

// Script for  Dynamic Content Update
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


// Script for Dynamic Content Update End

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

// Restrict typing to digits only
phoneInput.addEventListener("keypress", function (e) {
  const char = String.fromCharCode(e.which);
  if (!/^[0-9]$/.test(char)) {
    e.preventDefault();
  }
});

// Clean pasted input and remove non-numeric characters
phoneInput.addEventListener("paste", function (e) {
  e.preventDefault();
  const pasted = (e.clipboardData || window.clipboardData).getData("text");
  const digitsOnly = pasted.replace(/\D/g, "").replace(/^0+/, ""); // remove leading zeros
  phoneInput.value = digitsOnly;
});

// Prevent number from starting with 0
phoneInput.addEventListener("input", function () {
  if (phoneInput.value.startsWith("0")) {
    phoneInput.value = phoneInput.value.replace(/^0+/, "");
  }
});

const iti = window.intlTelInput(phoneInput, {
  initialCountry: "in",
  strictMode: true,
  separateDialCode: true,
  loadUtils: function () {
    return import(
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js?1743167482095"
    );
  },
});

const form = document.getElementById("RegisterForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const countryData = iti.getSelectedCountryData();

  // Set hidden fields
  document.getElementById("countryCode").value = countryData.dialCode;
  document.getElementById("initialCountry").value = countryData.iso2;

  // Now submit the form manually
  setTimeout(() => {
    form.submit();
  }, 100);
});

// Get the carousel track and slide items
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

// Get the indicators container (initially empty)
const indicatorsContainer = document.querySelector(".carousel-indicators");

// Dynamically generate carousel indicators based on the number of slides
indicatorsContainer.innerHTML = "";
items.forEach((item, index) => {
  const btn = document.createElement("button");
  btn.setAttribute("data-index", index);
  if (index === 0) {
    btn.classList.add("active");
  }
  indicatorsContainer.appendChild(btn);
});

// Now get the dynamically created indicators
const indicators = document.querySelectorAll(".carousel-indicators button");

// Set the current slide index
let currentIndex = 0;

// Function to update carousel position and indicator states
function updateCarousel() {
  const amountToMove = -currentIndex * 100; // Each slide is 100% width
  track.style.transform = `translateX(${amountToMove}%)`;

  // Update indicator buttons
  indicators.forEach((btn) => btn.classList.remove("active"));
  indicators[currentIndex].classList.add("active");
}

// Next button click event
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Previous button click event
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Indicator click navigation
indicators.forEach((btn) => {
  btn.addEventListener("click", function () {
    currentIndex = parseInt(this.getAttribute("data-index"));
    updateCarousel();
  });
});
