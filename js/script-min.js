var feedback=document.querySelector(".feedback"),feedbackButton=document.querySelector(".feedback-button"),feedbackForm=document.querySelector(".feedback-form"),feedbackClose=document.querySelector(".close-button"),feedbackSend=document.querySelector(".send-button"),feedbackName=document.querySelector("#feedback-name"),feedbackLogin=document.querySelector("#feedback-login"),feedbackMessage=document.querySelector("#feedback-name"),firstSliderControl=document.querySelector(".first-slider-control"),secondSliderControl=document.querySelector(".second-slider-control"),thirdSliderControl=document.querySelector(".third-slider-control"),firstSliderItem=document.querySelector(".first-slider-item"),secondSliderItem=document.querySelector(".second-slider-item"),thirdSliderItem=document.querySelector(".third-slider-item"),siteWrapper=document.querySelector(".site-wrapper"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}feedbackButton.addEventListener("click",function(e){e.preventDefault(),feedbackForm.classList.add("popup-show"),feedback.classList.add("popup-show"),storage&&(feedbackLogin.value=storage),feedbackName.focus()}),feedbackClose.addEventListener("click",function(e){e.preventDefault(),feedbackForm.classList.remove("popup-show"),feedback.classList.remove("popup-show"),feedbackForm.classList.remove("popup-error")}),feedbackForm.addEventListener("submit",function(e){feedbackName.value&&feedbackLogin.value&&feedbackMessage.value?isStorageSupport&&localStorage.setItem("login",feedbackLogin.value):(e.preventDefault(),feedbackForm.classList.remove("popup-error"),feedbackForm.offsetWidth=feedbackForm.offsetWidth,feedbackForm.classList.add("popup-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackForm.classList.contains("popup-show")&&(e.preventDefault(),feedbackForm.classList.remove("popup-show"),feedback.classList.remove("popup-show"),feedbackForm.classList.remove("popup-error"))}),firstSliderControl.addEventListener("click",function(e){secondSliderControl.classList.contains("current")?(secondSliderControl.classList.remove("current"),secondSliderItem.classList.remove("slide-current"),siteWrapper.classList.remove("site-wrapper-2")):thirdSliderControl.classList.contains("current")&&(thirdSliderControl.classList.remove("current"),thirdSliderItem.classList.remove("slide-current"),siteWrapper.classList.remove("site-wrapper-3")),firstSliderControl.classList.add("current"),firstSliderItem.classList.add("slide-current"),siteWrapper.classList.add("site-wrapper-1")}),secondSliderControl.addEventListener("click",function(e){thirdSliderControl.classList.contains("current")?(thirdSliderControl.classList.remove("current"),thirdSliderItem.classList.remove("slide-current"),siteWrapper.classList.remove("site-wrapper-3")):firstSliderControl.classList.contains("current")&&(firstSliderControl.classList.remove("current"),firstSliderItem.classList.remove("slide-current"),siteWrapper.classList.remove("site-wrapper-1")),secondSliderControl.classList.add("current"),secondSliderItem.classList.add("slide-current"),siteWrapper.classList.add("site-wrapper-2")}),thirdSliderControl.addEventListener("click",function(e){firstSliderControl.classList.contains("current")?(firstSliderControl.classList.remove("current"),firstSliderItem.classList.remove("slide-current"),siteWrapper.classList.remove("site-wrapper-1")):secondSliderControl.classList.contains("current")&&(secondSliderControl.classList.remove("current"),secondSliderItem.classList.remove("slide-current"),siteWrapper.classList.remove("site-wrapper-2")),thirdSliderControl.classList.add("current"),thirdSliderItem.classList.add("slide-current"),siteWrapper.classList.add("site-wrapper-3")});
