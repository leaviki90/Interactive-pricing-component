const slider = document.querySelector(".slider");
const sliderInput = document.getElementById("slider-input");
const sliderThumb = document.querySelector(".slider-thumb");
const sliderProgress = document.querySelector(".slider-progress");
const switchInput = document.querySelector("div.switch > input");
const customSlider = () => {
  maxValue = 4;
  const value = (sliderInput.value / maxValue) * 100 + "%";
  sliderProgress.style.width = value;
  sliderThumb.style.left = value;
  sliderThumb.style.transform = `translate(-${+sliderInput.value * 25}%, -50%)`;
};

function checkInputChecked() {
  let sliderValue = +sliderInput.value;
  let priceArr = [8, 12, 16, 24, 36];
  let pageViews = "";
  let price = 0;
  let timespan = "";
  if (switchInput.checked) {
    //per year
    let month = 12;
    let discount = 25 / 100;
    switch (sliderValue) {
      case 0:
        price = priceArr[0] * month - priceArr[0] * month * discount;
        pageViews = "10K pageviews";
        timespan = "/ year";
        break;
      case 1:
        price = priceArr[1] * month - priceArr[1] * month * discount;
        pageViews = "50K pageviews";
        timespan = "/ year";
        break;
      case 2:
        price = priceArr[2] * month - priceArr[2] * month * discount;
        pageViews = "100K pageviews";
        timespan = "/ year";
        break;
      case 3:
        price = priceArr[3] * month - priceArr[3] * month * discount;
        pageViews = "500K pageviews";
        timespan = "/ year";
        break;
      case 4:
        price = priceArr[4] * month - priceArr[4] * month * discount;
        pageViews = "1M pageviews";
        timespan = "/ year";
        break;
    }
  } else {
    //per month

    switch (sliderValue) {
      case 0:
        price = priceArr[0];
        pageViews = "10K pageviews";
        timespan = "/ month";
        break;
      case 1:
        price = priceArr[1];
        pageViews = "50K pageviews";
        timespan = "/ month";
        break;
      case 2:
        price = priceArr[2];
        pageViews = "100K pageviews";
        timespan = "/ month";
        break;
      case 3:
        price = priceArr[3];
        pageViews = "500K pageviews";
        timespan = "/ month";
        break;
      case 4:
        price = priceArr[4];
        pageViews = "1M pageviews";
        timespan = "/ month";
        break;
    }
  }
  document.getElementById("monthlyPrice").innerText = `$${price.toFixed(2)}`;
  document.querySelector("span.second-span").innerText = timespan;
  document.querySelector(".flex-wrapper1 > h2").innerText = pageViews;
}
checkInputChecked();

//EVENT LISTENERS
sliderInput.addEventListener("input", () => {
  customSlider();
  checkInputChecked();
});
switchInput.addEventListener("input", () => {
  checkInputChecked();
});
