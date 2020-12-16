// lightbox 燈箱效果
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// 回到最上面按鈕
$(document).ready(function(){
    $('.topBtn').click(function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
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