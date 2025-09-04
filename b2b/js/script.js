

$(document).ready(function () {
  let slides = $(".slide");
  let index = 0;
  let slideDuration = 3000;
  let fadeDuration = 1000;

  slides.eq(index).css({ opacity: 1, zIndex: 2 }).find("img").css("transform", "scale(1)");

  function showSlide() {
    let nextIndex = (index + 1) % slides.length;

    slides.eq(index).css("z-index", 1).animate({ opacity: 0 }, fadeDuration);
    slides.eq(index).find("img").css("transform", "scale(1)");

    slides.eq(nextIndex)
      .css({ opacity: 0, zIndex: 2 })
      .animate({ opacity: 1 }, fadeDuration, function () {
        $(this).find("img").css({ transform: "scale(1)" });
      });

    slides.eq(nextIndex).find("img").css("transform", "scale(1.2)");

    index = nextIndex;
  }

  setInterval(showSlide, slideDuration);

  
});


document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.getElementById("topButton");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});