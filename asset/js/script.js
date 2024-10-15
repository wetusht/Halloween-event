let navMenu = document.getElementById("nav-menu");
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");
// Show menu when menuIcon is clicked
menuIcon.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
// Hide menu when closeIcon is clicked
closeIcon.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
// Hide menu when user clicks outside the menu
document.addEventListener("click", function (event) {
  if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    navMenu.classList.add("hidden");
  }
});

// Countdown timer
document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  const countDownDate = new Date("Oct 31, 2024 00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "EXPIRED";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  };

  // Declare the interval before using it in clearInterval
  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Call initially to avoid 1 second delay
});

// Scroll Reveal
ScrollReveal().reveal(".move-in-bottom", {
  distance: "80px",
  duration: 2000,
  origin: "bottom",
  easing: "ease-in-out",
  opacity: 1,
});
ScrollReveal().reveal(".zoom-in-up", {
  distance: "50px",
  duration: 2000,
  origin: "top",
  easing: "ease-in-out",
  scale: 1.1,
});
ScrollReveal().reveal(".move-in-right", {
  distance: "150px",
  duration: 2000,
  origin: "right",
  easing: "ease-in-out",
  opacity: 1,
});
