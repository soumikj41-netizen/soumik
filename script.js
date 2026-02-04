// Scroll animation
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 100) {
      el.classList.add("show");
    }
  });
});

// Button actions
function yesClick() {
  alert("This made my day 💖");
}

function maybeClick() {
  alert("That’s perfectly okay 🌷");
}
//function yesClick() {
  //window.location.href =
    //"https://wa.me/917872765632?text=Hey%20I%20saw%20your%20website%20and%20I’d%20love%20to%20be%20your%20Valentine%20💖";
//}

//function maybeClick() {
  //window.location.href =
    //"https://wa.me/7872765632?text=I%20saw%20your%20website%20🌸%20Let’s%20see%20where%20things%20go%20😊";
//}
function sendThoughts() {
  const msg = document.getElementById("thankYouMsg");
  msg.classList.add("show");

  setTimeout(() => {
    window.location.href =
      "https://wa.me/917872765632?text=Hey%20I%20went%20through%20your%20website%20and%20here’s%20what%20I%20feel%20💭";
  }, 1800); // delay before redirect
}
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

// Start music on first interaction
function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.25; // soft volume
    bgMusic.play();
    musicStarted = true;
  }
}

// Start music on scroll or click
window.addEventListener("scroll", startMusic);
window.addEventListener("click", startMusic);
const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5sRUv0urCzOA1IKDgfy4rUKoMhM2Xyx3lWTmNzU7t0vN3CA/formResponse";

const entryID = "entry.1585302338";

function sendResponse(choice) {
  const formData = new FormData();
  formData.append(entryID, choice);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });
}

// Button actions
function yesClick() {
  sendResponse("YES");
}

function maybeClick() {
  sendResponse("MAYBE");
}





