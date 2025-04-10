// -------------------- Dynamic Content Update --------------------

const title = "MaleSexualWebinarOn22Apr";
const offeringTitle = "Male Sexual Disorder";

const joiningLink = "https://us06web.zoom.us/j/85745472594";
const whatsappLink =
  "https://jeenasikho.com/webinar/?page=male-sexual-disorder";

const webDate = "22 April 2025 | 1:00 PM";
const newSlotDate = "22 April 2025";
const newSlotTime = "1:00 PM";
const waitUntillDate = "2025-04-22";
const targetDate = new Date("April 22, 2025 13:00:00").getTime();

const heroHeading =
  "Webinar on <b><i>Male Sexual Disorder</i></b> by <i>Team Acharya Manish Ji</i>";

const drName = "Vaidya Navneet";
const drDetails = [
  "Bachelor of Ayurvedic Medicine and Surgery",
  "Doctor of Medicine (MD)",
  "Certified Yoga Practitioner (CYP)",
  "5+ Years of Experience",
];
const docImg =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/0798e2b6-3bdc-4f73-9a6a-9ad04bf56d84.png";

const bannerImage =
  "https://image.marketing.jeenasikho.com/lib/fe2d117473640474771173/m/1/790d8dc0-9f46-4609-8e1f-ea358f39de25.png";

// Why Join Content
const why1 =
  "जो पुरुष <b>erectile dysfunction (ED), premature ejaculation</b> या अन्य male sexual disorders से जूझ रहे हैं।";
const why2 =
  "जिन्हें <b>mental stress और anxiety</b> के कारण समस्या हो रही है।";
const why3 = "जो <b>low libido या यौन इच्छा</b> में कमी महसूस कर रहे हैं।";
const why4 =
  "जो <b>natural remedies</b> से अपनी sexual health सुधारना चाहते हैं।";
const why5 =
  "जिन्हें <b>physical या psychological reasons</b> से परेशानी हो रही है।";

const Testi1 =
  '"I was struggling with erectile dysfunction for over a year. It affected my confidence and my relationship. I tried many treatments but nothing worked. Then I came across HiiMS, where the doctors treated me with a combination of Ayurveda, diet, and therapy. Within a few months, I saw a big improvement. Now, I feel more energetic and my problem is almost gone. Thank you, HiiMS!"';
const Testi2 =
  '"Mujhe bohot time se premature ejaculation ki problem thi. Is wajah se meri married life par bohot asar pada. Maine HiiMS me consultation li aur wahan ke Ayurvedic treatment aur lifestyle changes follow kiye. Sirf 2 mahine me hi mujhe improvement feel hone laga. Aaj mujhe zyada confidence hai aur meri problem bhi kaafi had tak solve ho gayi hai."';
const Testi3 =
  '"Mujhe hamesha thakaan aur stress feel hota tha jiske wajah se meri sex life bilkul khatam ho gayi thi. Maine HiiMS ke doctors se baat ki, unhone mujhe proper diet, ayurvedic medicines aur yoga bataya. 3 mahine me hi mujhe bohot improvement dikhai diya. Aaj main apne relationship aur health dono me positive feel karta hoon. HiiMS ka treatment sach me kamaal ka hai"';

const TestiNam1 = "— Parvez";
const TestiNam2 = "— Kashish Sharma";
const TestiNam3 = "— Ajaydeep";

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
