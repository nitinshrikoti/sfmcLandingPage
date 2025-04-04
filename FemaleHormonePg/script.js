// -------------------- Dynamic Content Update --------------------

const title = "HormonalWebinarOn16Apr";
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/6de07489-5caa-4c98-b41f-60660aefa45c.png";

const drName = "Dr. Ankita";
const webDate = "16 April 2025 | 1:00 PM";

const joiningLink = "https://us06web.zoom.us/j/88404667061";
const whatsappLink = "https://jeenasikho.com/webinar/?page=female-sexual";

const newSlotDate = "16 April 2025";
const newSlotTime = "1:00 PM";
const offeringTitle = "Hormonal Disorder";
const waitUntillDate = "2025-04-16";
const targetDate = new Date("April 16, 2025 13:00:00").getTime();
const contactNumber = "917710371037";

const heroHeading =
  "Webinar on <b><i>Hormonal Disorders</i></b> by <i>Team Acharya Manish Ji</i>";

const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Chronic Liver & Kidney Disease",
  "Expertise in Arthritis, Mental Health",
  "2+ Years of Experience",
];

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/4e666290-5329-4c7b-a389-7a8c41f4103e.png";

// Why Join Content
const why1 =
  "जो महिलाएं <b>irregular periods</b> को <b>regular</b> करना चाहती हैं।";
const why2 =
  "जिन्हें <b>mood swings, weight changes, और sleep issues</b> हो रही हैं।";
const why3 = "जो skin problems, hair fall, और fatigue से परेशान हैं।";
const why4 =
  "जो <b>infertility</b> को दूर कर motherhood का अनुभव करना चाहती हैं।";
const why5 =
  "जिन्हें <b>focus issues या fast heartbeat</b> की समस्या हो रही है।";

const Testi1 =
  '"PCOS troubled me for years, but a webinar by Acharya Manish Ji’s team changed everything. After HiiMS consultation, I feel energetic, and my reports improved. Grateful for this life-changing experience"';
const Testi2 =
  '"PCOD ne mujhe stress diya, medicines bas symptoms control karti thi. HiiMS webinar attend kiya, Ayurveda treatment shuru kiya. 3 mahine me hi periods regular, acne kam, aur energy badh gayi"';
const Testi3 =
  '"Hormonal imbalance caused mood swings, weight gain, and fatigue. HiiMS webinar was eye-opening. After consultation, my energy returned, sleep improved, and I feel like myself again."';

const TestiNam1 = "— Rajni";
const TestiNam2 = "— Nidhi";
const TestiNam3 = "— Payal Jain";

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
