// lightbox 燈箱效果
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function (){
  var $win = $(window);    
  // 當使用者滾動到離頂部 100px 時，展示回到最上層功能按鈕
  $win.scroll(function (){
      if ($win.scrollTop() > 100){    
          $(".topBtn").fadeIn(200);
      } else{    
          $(".topBtn").fadeOut(200);
      }    
  });
  // 回到最上層功能按鈕
  $(document).ready(function(){
      $('.topBtn').click(function(event){
          event.preventDefault();
          $('html, body').animate({
          scrollTop: 0
          }, 500);
      });
  });
});

// 下拉選單
$(document).ready(function(){
    $('.dropdown').click(function(event){
      event.preventDefault();
      $('.dropdown').toggleClass('active');
      $('.dropdown-open').slideToggle();
    });
});

//swiper 輪播
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});