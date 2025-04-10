// -------------------- Dynamic Content Update --------------------

const title = "ChronicSinusitisWebinarOn18Apr";
const offeringTitle = "Chronic Sinusitis";

const joiningLink = "https://us06web.zoom.us/j/82387826269";
const whatsappLink = "https://chat.whatsapp.com/DWunZCA4RpM1pznvIiuOwC";

const webDate = "19 April 2025 | 10:00 AM";
const newSlotDate = "19 April 2025";
const newSlotTime = "10:00 AM";
const waitUntillDate = "2025-04-19";
const targetDate = new Date("April 19, 2025 10:00:00").getTime();

const heroHeading =
  "Webinar on <b><i>Chronic Sinusitis</i></b> by <i>Team Acharya Manish Ji</i>";

const drName = "Dr. Ritu";
const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Diploma in Naturopathy and Diploma in Yoga",
  "7+ Years of Experience",
];
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/aeb9ac0d-ef59-4b4d-9f8e-0bbf4eac6c40.png";

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/8ba496b8-ad26-4c73-9019-a1f564db0842.png";

// Why Join Content
const why1 =
  "Allergic Rhinitis और Nasal Obstruction से राहत पाकर नाक की समस्याओं को दूर करना चाहते हैं।";
const why2 =
  "Postnasal Drip और Fungal Sinusitis से छुटकारा पाकर गले और साइनस को साफ रखना चाहते हैं।";
const why3 =
  "Nasal Polyps और Deviated Nasal Septum (DNS) को सही करके सांस लेने में सुविधा बढ़ाना चाहते हैं।";
const why4 = "Sinus Headache और आंखों के आसपास के दबाव से राहत पाना चाहते हैं।";
const why5 =
  "Immune Dysfunction को ठीक करके बार-बार होने वाले साइनस इंफेक्शन से बचाव करना चाहते हैं।";

const Testi1 =
  '"धूपम थेरेपी में आयुर्वेदिक औषधियों का धुआं नाक से दिया जाता है और मुंह से निकाला जाता है। यह विधि एलर्जी, माइग्रेन, कान की आवाज़, आंखों की समस्या और छींक जैसी परेशानियों में फायदेमंद होती है। डॉक्टर साहब बताते हैं कि इसे आयुर्वेद में धूमपान विधि कहा जाता है और यह सुबह करने से लाभ होता है।"';
const Testi2 =
  '"मैं गंभीर स्वास्थ्य समस्याओं जैसे जलन, नींद की परेशानी, और साइनस से परेशान था। यहां इलाज के बाद मुझे 50% से ज्यादा आराम मिला है, और अब मैं बिना दवाइयों के स्वस्थ महसूस कर रहा हूं। जीवनशैली में बदलाव और सही मार्गदर्शन से मेरी हालत काफी सुधरी है।"';
const Testi3 =
  '"Acharya Manish Ji’s team explains sinus in simple terms, comparing it to stagnant water causing infections. They demonstrate an easy home remedy using warm water, salt, and ghee for natural sinus cleansing. The method is safe, effective, and can be done at home for lasting relief from sinus issues"';

const TestiNam1 = "— Relief in Migrane";
const TestiNam2 = "— Relief in Sinus";
const TestiNam3 = "— Sinus remedy";

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
