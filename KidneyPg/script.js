// -------------------- Dynamic Content Update --------------------

const title = "KidneyWebinarOn29May";
const offeringTitle = "Kidney";

const joiningLink = "https://us06web.zoom.us/j/88628213519";
const whatsappLink = "https://chat.whatsapp.com/GmvYQU4nRrGKCCobbzkVB9";

const webDate = "29 May 2025 | 1:00 PM";
const newSlotDate = "29 May 2025";
const newSlotTime = "1:00 PM";
const waitUntillDate = "2025-05-29";
const targetDate = new Date("May 29, 2025 13:00:00").getTime();

const heroHeading =
  "Webinar on <b><i>Kidney</i></b> by <i>Team Acharya Manish Ji</i>";

const drName = "Dr. Neha";
const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Diploma in Panchakarma Chikitsa (DPC)",
  "Expertise in Cancer, Gynaecology, CKD, CLD, Obesity, Diabetes",
  "4+ Years Of Experience",
];
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/b2bc80d6-0ca9-4f5a-8439-8d4149c54329.png";

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/ebc2bfa9-2919-4840-a855-b45e1d4531ed.png";

// Why Join Content
const why1 =
  "जो लोग <b>nephrotic syndrome, CKD, kidney stones, hydronephrosis</b> जैसी किडनी समस्याओं से जूझ रहे हैं।";
const why2 = "जिनकी <b>kidney failure</b> हो चुकी है या dialysis पर हैं।";
const why3 =
  "जिनका <b>creatinine level</b> बढ़ रहा है या kidney transplant की सलाह मिली है।";
const why4 =
  "जिन्हें <b>foamy urine, protein leakage</b> या पेशाब से जुड़ी समस्याएं हैं।";
const why5 =
  "जो high BP, diabetes से किडनी बचाना चाहते हैं और <b>natural remedies</b> अपनाना चाहते हैं।";

const Testi1 =
  '"Acharya Manish Ji’s webinar gave me hope! Learned effective Ayurvedic ways to support kidney health."';
const Testi2 =
  '"Very helpful session! Understood how Ayurveda can naturally reduce creatinine levels and improve kidney function. This webinar changed my thinkin"';
const Testi3 =
  '"Got practical solutions in the webinar! Learned simple remedies and dietary tips to heal kidney infections naturally"';

const TestiNam1 = "— Roshni Singh";
const TestiNam2 = "— Jagmeet Kaur";
const TestiNam3 = "— Preetinder";

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

document.getElementById("testi1").innerHTML = Testi1;
document.getElementById("testi2").innerHTML = Testi2;
document.getElementById("testi3").innerHTML = Testi3;

document.getElementById("testiNam1").innerHTML = TestiNam1;
document.getElementById("testiNam2").innerHTML = TestiNam2;
document.getElementById("testiNam3").innerHTML = TestiNam3;

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

// — Prevent anything but letters (no spaces) in FirstName —
const firstNameEl = document.getElementById("FirstName");
firstNameEl.addEventListener("keypress", (e) => {
  // if the key isn’t A–Z or a–z, block it
  if (!/^[A-Za-z]$/.test(e.key)) {
    e.preventDefault();
  }
});
firstNameEl.addEventListener("input", () => {
  // strip out any non-letters (just in case)
  firstNameEl.value = firstNameEl.value.replace(/[^A-Za-z]/g, "");
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
const form = document.getElementById("RegisterForm");
const errorDiv = document.getElementById("phoneError");

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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let raw = phoneInput.value.replace(/\D/g, "");
  let digits = raw.replace(/^0+/, "");

  // validate
  if (digits.length !== 10) {
    errorDiv.textContent = "Please enter exactly 10 digits";
    phoneInput.focus();
    return;
  }
  // clear any previous error
  errorDiv.textContent = "";

  const countryData = iti.getSelectedCountryData();

  // Set hidden fields
  document.getElementById("countryCode").value = countryData.dialCode;
  document.getElementById("initialCountry").value = countryData.iso2;

  // Now submit the form manually
  setTimeout(() => {
    form.submit();
  }, 100);
});
