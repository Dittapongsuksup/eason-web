
function myFunction() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction1() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction2() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction3() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction4() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction5() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction6() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction7() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction8() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction9() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction10() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction11() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction12() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction13() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction14() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction15() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction16() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction17() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction18() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}
function myFunction19() {
  window.open("https://weblink.set.or.th/dat/news/202305/0861NWS120520231717320366T.pdf");
}


$(document).ready(function () {
  //hides dropdown content
  $(".size_chart").hide();

  //unhides first option content
  $("#option1").show();

  //listen to dropdown for change
  $("#size_select").change(function () {
    //rehide content on change
    $(".size_chart").hide();
    //unhides current item
    $("#" + $(this).val()).show();
  });
});
function map() {
  window.open("https://goo.gl/maps/kyuQWGksgoG28MAQ7");
}
function mappt() {
  window.open("https://goo.gl/maps/DG3zJHgnALH9LBWTA");
}

const images = document.querySelectorAll(".slide"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let current = 0;

function changeImage() {
  images.forEach((img) => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  images[current].classList.add("show");
  images[current].style.display = "block";
}

// Calling first time
changeImage();

next.addEventListener("click", function () {
  current++;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});
prev.addEventListener("click", function () {
  current--;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});

// Auto change in 5 seconds

setInterval(() => {
  next.click();
}, 5000);

