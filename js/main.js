//메뉴
$('.menu_btn').click(function(){
  $('.menu_btn').toggleClass('open')
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.nextBtn',
    prevEl: '.prevBtn',
  },
});

//로고 h1을 클릭을 하면 첫 시작 화면으로
$('h1').click(function(){
  swiper.slideTo(0) //runCallbacks - 슬라이더가 끝나고 나서
})

$('nav li').click(function(){ //nav li 제이쿼리에서는 각각의 li로 들어간다. 자바스크립트는 q..All로 해야 한다.
  swiper.slideTo($(this).index())//$(this).index() 인덱스 번호를 알아와줘 자바스크립트도 동일
  $('.menu_btn').removeClass('open')
})