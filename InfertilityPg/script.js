// -------------------- Dynamic Content Update --------------------

const title = "InfertilityWebinarOn5Apr";

// const drName = "Dr. Sonali";
const webDate = "5 April 2025 | 1:00 PM";

const joiningLink = "https://us06web.zoom.us/j/84772919760";
const whatsappLink = "https://jeenasikho.com/webinar/?page=infertility-issues";

const newSlotDate = "5 April 2025";
const newSlotTime = "1:00 PM";
const offeringTitle = "Infertility";
const waitUntillDate = "2025-04-05";
const targetDate = new Date("April 5, 2025 13:00:00").getTime();
const contactNumber = "917710371037";

const heroHeading =
  "Webinar on <b><i>Infertility</i></b> by <i>Team Acharya Manish Ji</i>";

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/38a78d85-9024-44c6-b2ca-0255b66ef18d.png";

// Why Join Content
const why1 =
  "जो लोग <b>infertility</b> की समस्या के कारण माता-पिता नहीं बन पा रहे हैं।";
const why2 = "<b>PCOD/PCOS</b> से परेशान महिलाएं जो संतान सुख पाना चाहती हैं।";
const why3 = "जिन पुरुषों का <b>sperm count low<b> है या नहीं है।";
const why4 = "जो <b>IVF failure या low AMH levels</b> की समस्या से जूझ रहे हैं।";
const why5 =
  "जो <b>newly married couples</b> सही तरीके से <b>family planning</b> करना चाहते हैं।";

const Testi1 =
  '"यह वेबिनार दिखाता है कि कैसे आयुर्वेदिक उपचार ने IVF के बिना जोड़ों को गर्भधारण में सफलता दिलाई, प्राकृतिक प्रजनन को बढ़ावा देते हुए और साइड इफेक्ट्स को कम किया। जानिए कैसे आयुर्वेद स्वस्थ और प्रभावी रास्ते से मातृत्व प्राप्त करने में मदद कर सकता है।"';
const Testi2 =
  '"रवि तीन महीने से हमारे क्लिनिक पर इलाज करा रहे थे, जिनकी सpermia की समस्या थी और सर्जरी के बारे में सोचा था। अब उनका स्पर्म काउंट 60 मिलियन हो गया है, और वे अब पिता बनने की उम्मीद रखते हैं।"';
const Testi3 =
  '"ज्योति, जो एक डे केयर टीचर हैं, ने शुद्धि आयुर्वेदा में इलाज करवाकर अपने पीसीओएस को रिवर्स किया और अब वह एक बच्चे की मां बन चुकी हैं। शुद्धि आयुर्वेदा ने उनका सपना सच किया और अब वह वेट लॉस पर भी ध्यान दे रही हैं।"';

// Selectors for the dynamic content
document.title = title;
document.getElementById("heroHeading").innerHTML = heroHeading;
if (document.getElementById("drImg")) {
  drImg.src = docImg;
}

if (document.getElementById("BannerImg")) {
  BannerImg.src = bannerImage;
}

document.getElementById("webDate").innerHTML = webDate;

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
