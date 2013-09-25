$(function() {
  $("#home_pic").hover(function() {
    $(this).attr("src", "IMG_20130924_123240.jpg");
  },
  function() {
    $(this).attr("src", "IMG_20130924_123249.jpg");
  });
});