// -------------------- Dynamic Content Update --------------------

const title = "MuscularSkeletonWebinarOn11Apr";
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/121dab33-39a6-4863-91de-4ed0356eeeff.png";

const drName = "Dr. Meetali";
const webDate = "11 April 2025 | 4:00 PM";

const joiningLink = "https://us06web.zoom.us/j/81557819089";
const whatsappLink = "https://jeenasikho.com/webinar/?page=joint";

const newSlotDate = "11 April 2025";
const newSlotTime = "4:00 PM";
const offeringTitle = "Muscular Skeleton Disorder";
const waitUntillDate = "2025-04-11";
const targetDate = new Date("April 11, 2025 16:00:00").getTime();
const contactNumber = "917710371037";

const heroHeading =
  "Webinar on <b><i>Muscular Skeleton Disorder</i></b> by <i>Team Acharya Manish Ji</i>";

const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Specialization in Panchkarma",
  "8+ Years of Experience",
];

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/ccc5a531-cb71-459f-8af1-91d9aadfddf3.png";

// Why Join Content
const why1 = "<b>Back Pain</b> से राहत पाकर पीठ के दर्द को कम करना चाहते हैं।";
const why2 = "<b>Arthritis</b> में सूजन और दर्द से आराम पाना चाहते हैं।";
const why3 =
  "<b>Tendinitis</b> से बचाव और मांसपेशियों की ताकत बढ़ाना चाहते हैं।";
const why4 = "<b>Bursitis</b> में सूजन और दर्द से राहत पाना चाहते हैं।";
const why5 = "<b>आयुर्वेदिक और प्राकृतिक उपायों से मांसपेशियों और हड्डियों को मजबूत करें।";

const Testi1 =
  '"Thanks Doctor. I learned effective ways to manage arthritis pain and improve joint health naturally."';
const Testi2 =
  '"Great!The tips on diet and exercise for arthritis were practical and easy to follow."';
const Testi3 =
  '"Great insights on arthritis treatment options! Helped me understand how to reduce stiffness and inflammation"';

const TestiNam1 = "— Saheb";
const TestiNam2 = "— Pryanka";
const TestiNam3 = "— Sidharth";

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
