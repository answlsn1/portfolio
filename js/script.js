// 예: li 클릭 시 active 클래스 토글
$('.project > ul > li > button').on('click', function () {
  $(this).toggleClass('active');
});
