// Functionality of the progress bar
const indicator = document.querySelector(".progressBar")

const scroll = () => {
  const height = document.documentElement.offsetHeight
  const mx = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const perc = document.documentElement.scrollTop * 100  / mx
  indicator.style.width = perc + "%"
}

document.addEventListener("scroll", scroll)

// Popup will show if post wasn't posted on Instagram
function noInstagram() {
  Swal.fire({
  title: "This post wasn't shared on Instagram",
  icon: 'info',
  confirmButtonText: 'I understand',
  confirmButtonColor: "#00bae9",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}

// Popup will show if post wasn't posted on Facebook
function noFacebook() {
  Swal.fire({
  title: "This post wasn't shared on Facebook",
  icon: 'info',
  confirmButtonText: 'I understand',
  confirmButtonColor: "#00bae9",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey:  false});
}
