$("#light_mini .close").click(function () {
  $("#light_mini").fadeOut();
});

var today = new Date();
var startshow = new Date("2001-04-22 00:01:00");
var endshow = new Date("2001-05-22 23:29:00");

//alert(today+'----'+startshow);
//lightbox

if (today >= startshow && today <= endshow) {
  if ($(window).width() > 1024) {
    $("#h_image").attr("href", "images/cover/ONLINE-SURVEY.jpg");
  } else {
    $("#h_image").attr("href", "images/cover/ONLINE-SURVEY.jpg");
  }
  $("#h_image")
    .fancybox({
      width: 640,
      height: 480,
      autoSize: false,
      showCloseButton: true,
    })
    .trigger("click");
}

$(".fancybox-overlay").click(function () {
  //$.fancybox.close();
  //window.location.href='https://forms.gle/LrGA4kmpQgwJfyKh8';
  window.open("https://forms.gle/LrGA4kmpQgwJfyKh8", "_blank");
});
