// Reference the popup element in the DOM
let popup = document.getElementById("popup");

// Function to fetch quote from backend API and show popup
function openPopup() {
  fetch('http://localhost:3000/api/funfact')
    .then(response => response.json())
    .then(data => {
      popup.querySelector('p').innerText = data.message;
      popup.classList.add("open-popup");
    })
    .catch(() => {
      popup.querySelector('p').innerText = "Error loading message.";
      popup.classList.add("open-popup");
    });
}

// Function to hide the popup
function closePopup() {
  popup.classList.remove("open-popup");
}

// Sound toggle state (start with sound ON)
let soundEnabled = true;

// Sound toggle button and its image
const soundToggleBtn = document.querySelector('.sound-btn');
const soundToggleImg = soundToggleBtn.querySelector('img');

// The two icon image paths
const soundOnIcon = 'images/sound_icon.png';
const soundOffIcon = 'images/mute_sound_icon.png';

// Click sound audio instance
const clickSound = new Audio('/audio/button_click_sound.mp3');

// Play click sound for all buttons, only if sound is enabled
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (soundEnabled) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });
});

// Toggle sound on/off when sound button is clicked
soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;

  if (soundEnabled) {
    soundToggleImg.src = soundOnIcon;
    soundToggleImg.alt = 'Sound On';
  } else {
    soundToggleImg.src = soundOffIcon;
    soundToggleImg.alt = 'Sound Off';
  }
});
