var feedback = document.querySelector(".feedback");
var feedbackButton = document.querySelector(".feedback-button");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackClose = document.querySelector(".close-button");
var feedbackSend = document.querySelector(".send-button");
var feedbackName = document.querySelector("#feedback-name");
var feedbackLogin = document.querySelector("#feedback-login");
var feedbackMessage = document.querySelector("#feedback-name");

var firstSliderControl = document.querySelector(".first-slider-control");
var secondSliderControl = document.querySelector(".second-slider-control");
var thirdSliderControl = document.querySelector(".third-slider-control");
var firstSliderItem = document.querySelector(".first-slider-item");
var secondSliderItem = document.querySelector(".second-slider-item");
var thirdSliderItem = document.querySelector(".third-slider-item");
var siteWrapper = document.querySelector(".site-wrapper");

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
  feedback.classList.add("popup-show");
  if (storage) {
    feedbackLogin.value = storage;
  }
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("popup-show");
  feedback.classList.remove("popup-show");
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

firstSliderControl.addEventListener("click", function (evt) {
  if (secondSliderControl.classList.contains("current")) {
    secondSliderControl.classList.remove("current");
    secondSliderItem.classList.remove("slide-current");
    siteWrapper.classList.remove("site-wrapper-2");
  } else if (thirdSliderControl.classList.contains("current")) {
    thirdSliderControl.classList.remove("current");
    thirdSliderItem.classList.remove("slide-current");
    siteWrapper.classList.remove("site-wrapper-3");
  }
  firstSliderControl.classList.add("current");
  firstSliderItem.classList.add("slide-current");
  siteWrapper.classList.add("site-wrapper-1");
});

secondSliderControl.addEventListener("click", function (evt) {
  if (thirdSliderControl.classList.contains("current")) {
    thirdSliderControl.classList.remove("current");
    thirdSliderItem.classList.remove("slide-current");
    siteWrapper.classList.remove("site-wrapper-3");
  } else if (firstSliderControl.classList.contains("current")) {
    firstSliderControl.classList.remove("current");
    firstSliderItem.classList.remove("slide-current");
    siteWrapper.classList.remove("site-wrapper-1");
  }
  secondSliderControl.classList.add("current");
  secondSliderItem.classList.add("slide-current");
  siteWrapper.classList.add("site-wrapper-2");
});

thirdSliderControl.addEventListener("click", function (evt) {
  if (firstSliderControl.classList.contains("current")) {
    firstSliderControl.classList.remove("current");
    firstSliderItem.classList.remove("slide-current");
    siteWrapper.classList.remove("site-wrapper-1");
  } else if (secondSliderControl.classList.contains("current")) {
    secondSliderControl.classList.remove("current");
    secondSliderItem.classList.remove("slide-current");
    siteWrapper.classList.remove("site-wrapper-2");
  }
  thirdSliderControl.classList.add("current");
  thirdSliderItem.classList.add("slide-current");
  siteWrapper.classList.add("site-wrapper-3");
});
