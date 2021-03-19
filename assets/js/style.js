const item = $(".perc"); // The div to catch up
const drawDelay = 1000; // In milliseconds

item.each(function() {
  $(this)
    .animate(
      {
        width: $(this).attr("data-percent") + "%" // Draw the width
      },
      drawDelay
    ) // Draw delay
    .css("background", $(this).attr("data-color")); // Change the color
});