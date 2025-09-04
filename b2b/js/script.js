

$(document).ready(function () {
  let slides = $(".slide");
  let index = 0;
  let slideDuration = 3000; // 슬라이드 유지 시간 (3초)
  let fadeDuration = 1000;  // 페이드 전환 시간 (1초)

  // 첫 번째 슬라이드 보이게 설정
  slides.eq(index).css({ opacity: 1, zIndex: 2 }).find("img").css("transform", "scale(1)");

  function showSlide() {
    let nextIndex = (index + 1) % slides.length;

    // 현재 슬라이드 페이드아웃 & 확대 상태 해제
    slides.eq(index).css("z-index", 1).animate({ opacity: 0 }, fadeDuration);
    slides.eq(index).find("img").css("transform", "scale(1)");

    // 다음 슬라이드 페이드인 & 줌아웃 효과
    slides.eq(nextIndex)
      .css({ opacity: 0, zIndex: 2 })
      .animate({ opacity: 1 }, fadeDuration, function () {
        $(this).find("img").css({ transform: "scale(1)" });
      });

    // 처음에 확대 상태 적용
    slides.eq(nextIndex).find("img").css("transform", "scale(1.2)");

    index = nextIndex;
  }

  // 모든 슬라이드가 3초씩 유지되도록 설정
  setInterval(showSlide, slideDuration);

  
});


document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.getElementById("topButton");

  // 스크롤 이벤트 감지 후 버튼 표시 여부 결정
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  // 버튼 클릭 시 상단으로 부드럽게 이동
  topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});