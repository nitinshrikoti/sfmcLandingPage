// -------------------- Dynamic Content Update --------------------

const title = "LiverWebinarOn10Apr";
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/540c60d3-7b05-4859-b63b-27c34da6ba93.png";

const drName = "Dr. Geetika";
const webDate = "10 April 2025 | 1:00 PM";

const joiningLink = "https://us06web.zoom.us/j/89377911510";
const whatsappLink = "https://jeenasikho.com/webinar/?page=liver";

const newSlotDate = "10 April 2025";
const newSlotTime = "1:00 PM";
const offeringTitle = "Liver";
const waitUntillDate = "2025-04-10";
const targetDate = new Date("April 10, 2025 13:00:00").getTime();
const contactNumber = "917710371037";

const heroHeading =
  "Webinar on <b><i>Liver</i></b> by <i>Team Acharya Manish Ji</i>";
const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "PGDIP (PG. Diploma in Panchakarma)",
  "M.S. (Ay.) Master of Surgery",
  "15+ Years of Experience",
];
const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/1e0f9aef-c15f-403b-b5f5-73c34ac9b657.png";

// Why Join Content
const why1 =
  "जो लोग <b>liver cirrhosis, fatty liver, liver fibrosis, या liver failure</b> जैसी समस्याओं से जूझ रहे हैं।";
const why2 = "जो लगातार <b>fatigue</b> और <b>weakness</b> महसूस कर रहे हैं।";
const why3 =
  "जो <b>liver health improve</b> करने के लिए प्राकृतिक उपाय ढूंढ रहे हैं।";
const why4 =
  "जो <b>weight gain</b> और <b>fat accumulation</b> की समस्या से परेशान हैं।";
const why5 =
  "जिन्हें <b>mental stress</b> है या ध्यान केंद्रित करने में कठिनाई हो रही है।";

const Testi1 =
  '"Jaswinder Kaur from Amritsar, who struggled with sugar, thyroid, and fatty liver grade 2, now feels much better after attending the 72-hour camp. She recommends switching from allopathic medicine to treatment with Acharya Manish Ji and BRC."';
const Testi2 =
  '"Vipin Kumar Jain shared that after attending the camp, he experienced relief from liver cirrhosis and joint-muscle pain. He appreciates Ayurvedic treatment and Acharya Manish Jis good nature."';
const Testi3 =
  '"Gautam Jain, admitted for liver issues, experienced significant relief in swelling and digestion after just three days of Ayurvedic treatment. He highly recommends Acharya Manish Ji’s hospital for better results."';

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
