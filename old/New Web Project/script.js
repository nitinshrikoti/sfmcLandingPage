// -------------------- Dynamic Content Update --------------------

const title = "KneePainReplacementWebinarOn29dec";

const webDate = "29 December 2025 | 1:30 PM";

const targetDate = new Date("29 December, 2025 13:30:00").getTime();

const drName = "Dr. Ritika";
const drDetails = ["Bachelor of Ayurvedic Medicine and Surgery"];
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/b8bb16d9-0e8a-47a8-9da3-198e8a7a54db.png";

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/ffec998a-5356-47d9-b86a-882e4cd865ea.png";

const heroHeading =
  "Webinar on <b><i>Knee Pain/Replacement</i></b> by <i>Team Acharya Manish Ji</i>";

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
  "“Thanks Doctor. I learned effective ways to manage arthritis pain and improve joint health naturally.”";
const Testi2 =
  "“Great!The tips on diet and exercise for arthritis were practical and easy to follow.”";
const Testi3 =
  '“Great insights on arthritis treatment options! Helped me understand how to reduce stiffness and inflammation."';

const TestiNam1 = "— Saheb";
const TestiNam2 = "— Pryanka";
const TestiNam3 = "— Sidharth";

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

// -------------------- Common Payment link --------------------

var BOOK_SPOT_URL = "https://u.payu.in/PAYUMN/nIUnA1SFuiaE";

document.querySelectorAll(".book-spot-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    window.location.href = BOOK_SPOT_URL;
  });
});
