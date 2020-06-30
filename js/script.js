var feedbackButton = document.querySelector(".feedback-button");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackClose = document.querySelector(".close-button");
var feedbackSend = document.querySelector(".send-button");
var feedbackName = document.querySelector("#feedback-name");
var feedbackLogin = document.querySelector("#feedback-login");
var feedbackMessage = document.querySelector("#feedback-name");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("popup-show");
  if (storage) {
    feedbackLogin.value = storage;
  }
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("popup-show");
  feedbackForm.classList.remove("popup-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackLogin.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackForm.classList.add("popup-error");
  } else {
      if (isStorageSupport) {
      localStorage.setItem("login", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains("popup-show")) {
      evt.preventDefault();
      feedbackForm.classList.remove("popup-show");
      feedbackForm.classList.remove("popup-error");
    }
  }
});
