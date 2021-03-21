const item = $(".perc"); // The div to catch up
const drawDelay = 1000; // In milliseconds

item.each(function () {
  $(this)
    .animate(
      {
        width: $(this).attr("data-percent") + "%", // Draw the width
      },
      drawDelay
    ) // Draw delay
    .css("background", $(this).attr("data-color")); // Change the color
});
document.querySelectorAll(".switch").forEach(function (theSwitch) {
  theSwitch.addEventListener("click", handleClickEvent, false);
});

function handleClickEvent(evt) {
  let el = evt.target;

  if (el.getAttribute("aria-checked") == "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
}

const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "./assets/css/style_light.css") {
    theme.href = "./assets/css/style_dark.css";
  } else {
    theme.href = "./assets/css/style_light.css";
  }
});
$("#togglebutton").click(function () {
  $(".far fa-sun").toggleClass(".far fa-moon");
});