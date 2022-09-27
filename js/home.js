// News carousel
$(".newsCarousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {items: 1, nav: false},
    600: {items: 2, nav: false},
    1000: {items: 3, nav: false},
    1400: {items: 4, nav: false}
  }
});

// Sponsors carousel
$(".sponsorsCarousel").owlCarousel({
  margin: 50,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {items: 1, nav: false},
    600: {items: 2, nav: false},
    1000: {items: 3, nav: false}
  }
});

// Popup will show if Netsoc doesn't have an event currently to feature
function noEvent() {
  Swal.fire({
  title: "No event currently",
  text: 'We will update the event link once an event has been finalized!',
  icon: 'info',
  confirmButtonText: 'I understand',
  confirmButtonColor: "#00bae9",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// Popup will show if Netsoc has a featured event that doesn't need registration
function noRegistration() {
  Swal.fire({
  title: "Event doesn't require registration",
  icon: 'info',
  confirmButtonText: 'See you there!',
  confirmButtonColor: "#00bae9",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// Popup will show if Netsoc has a featured event
// UPDATE EVENT CONTEXT LINK & REGISTRATION LINK
function eventOptions() {
  Swal.fire({
  title: "Choose an option:",
  icon: 'info',
  showDenyButton: true,
  showCloseButton: true,
  confirmButtonText: '<a href="post.html" target="_blank" style="color:#fff;">View Event Context</a>',
  denyButtonText: '<a href="https://forms.gle/f6KNxZd3wkXFRDncA" target="_blank" style="color:#fff;">Register For Event</a>',
  confirmButtonColor: "#00bae9",
  denyButtonColor: "#004c7b",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// Popup will show if Netsoc not hiring executive members
function noExecutive() {
  Swal.fire({
  title: "The hiring season for Netsoc's 2022-2023 executive team has passed",
  text: 'Keep a lookout for the 2023-2024 hiring cycle!',
  icon: 'info',
  confirmButtonText: 'I understand',
  confirmButtonColor: "#00bae9",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// Popup will show if Netsoc is hiring for the 2023-2024 Executive team
// UPDATE APPLICATION FORM LINK & JOB ROLE PDF
function hiringOptions() {
  Swal.fire({
  title: "Choose an option:",
  icon: 'info',
  showDenyButton: true,
  showCloseButton: true,
  confirmButtonText: '<a href="pdf/NetsocSponsorshipPackage.pdf" target="_blank" style="color:#fff;">View Job Descriptions</a>',
  denyButtonText: '<a href="https://forms.gle/f6KNxZd3wkXFRDncA" target="_blank" style="color:#fff;">View Application Form</a>',
  confirmButtonColor: "#00bae9",
  denyButtonColor: "#004c7b",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// Popup will show when user presses "Become a sponsor" button
function sponsorOptions() {
  Swal.fire({
  title: "Choose an option:",
  icon: 'info',
  showDenyButton: true,
  showCloseButton: true,
  confirmButtonText: '<a href="pdf/NetsocSponsorshipPackage.pdf" target="_blank" style="color:#fff;">View Sponsorship Package</a>',
  denyButtonText: '<a href="mailto:netsoc@ontariotechu.net" style="color:#fff;">Connect & Discuss With Us</a>',
  confirmButtonColor: "#00bae9",
  denyButtonColor: "#004c7b",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// For mobile menu option (About & Events) SAME PAGE
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}
