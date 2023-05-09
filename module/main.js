$(function () {
  //grayscale();

  window.onbeforeunload = function (e) {
    /*alert("The Window is closing!");*/
  };

  var data = [];
  var temp = "";

  if ($("body").hasClass("th")) {
    $.getJSON("https://www.scg.com/scg_api/ir_menu_th.php", function (result) {
      data = $.parseJSON(result);

      $.each(data.submenu, function (i, item) {
        var class_name = "";
        var sub = "";
        if (data.submenu[i]["submenu"]) {
          class_name = 'class = "has_child"';
          $.each(data.submenu[i]["submenu"], function (j, item1) {
            sub +=
              '<li><a href="' +
              data.submenu[i]["submenu"][j]["link"] +
              '">' +
              data.submenu[i]["submenu"][j]["title"] +
              "</a></li>";
          });
        }
        temp +=
          "<li " +
          class_name +
          '><a href="' +
          data.submenu[i]["link"] +
          '">' +
          data.submenu[i]["title"] +
          "</a><ul>" +
          sub +
          "</ul></li>";
      });
      //console.log(data);
      $("#menu_ir").html(temp);
    });
  } else if ($("body").hasClass("en")) {
    $.getJSON("https://www.scg.com/scg_api/ir_menu_en.php", function (result) {
      data = $.parseJSON(result);

      $.each(data.submenu, function (i, item) {
        var class_name = "";
        var sub = "";
        if (data.submenu[i]["submenu"]) {
          class_name = 'class = "has_child"';777777777777776
          $.each(data.submenu[i]["submenu"], function (j, item1) {
            sub +=
              '<li><a href="' +
              data.submenu[i]["submenu"][j]["link"] +
              '">' +
              data.submenu[i]["submenu"][j]["title"] +
              "</a></li>";
          });
        }
        temp +=
          "<li " +
          class_name +
          '><a href="' +
          data.submenu[i]["link"] +
          '">' +
          data.submenu[i]["title"] +
          "</a><ul>" +
          sub +
          "</ul></li>";
      });
      //console.log(data);
      $("#menu_ir").html(temp);
    });
  }

  //select language
  if (
    $(location).attr("hash") == "#th" ||
    window.location.pathname == "/landing/index.html"
  ) {
    $('#lang option[value="th"]').attr("selected", true);
  } else if (
    $(location).attr("hash") == "#en" ||
    window.location.pathname == "/landing/index_en.html"
  ) {
    //window.location.href="../king_bhumibol/index_en.html"
    //window.location.href="index_en.html#en";
    $('#lang option[value="en"]').attr("selected", true);
  }

  $("#lang").change(function () {
    location.reload();
    if ($("#lang").val() == "th") {
      window.location.href = "/th/";
      $('#lang option[value="th"]').attr("selected", true);
      $('#lang option[value="en"]').attr("selected", false);
    } else if ($("#lang").val() == "en") {
      window.location.href = "/en/";
      //window.location.href="index-Princess-Chulabhorn-en.html"
      $('#lang option[value="th"]').attr("selected", false);
      $('#lang option[value="en"]').attr("selected", true);
    } else if ($("#lang").val() == "Vietnam/Vietnamese") {
      window.location.href = "/vn/";
    } else if ($("#lang").val() == "Vietnam/English") {
      window.location.href = "/vn/en/home-en/";
    } else if ($("#lang").val() == "Indonesia/English") {
      window.location.href = "/id/en/home-2/";
    } else if ($("#lang").val() == "Indonesia/Indonesia") {
      window.location.href = "/id/";
    } else if ($("#lang").val() == "Myanmar/English") {
      window.location.href = "/mm/";
    }
  });

  //header
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(window).scroll(function () {
      //logo
      if ($(document).scrollTop() > 50) {
        $("header .container-fluid").addClass("header_fix");
        $(".navbar-brand>i").css({ color: "#fff" });
      } else {
        $("header .container-fluid").removeClass("header_fix");
      }
    });
  } else {
    $(window).scroll(function () {
      //logo
      if ($(document).scrollTop() > 50) {
        $("header .container-fluid").addClass("header_fix");
        $(".navbar-brand>i").css({ color: "#fff" });
      } else {
        $("header .container-fluid").removeClass("header_fix");
      }
    });
  }

  $(".logomini").attr("href", "/");

  //footer
  $(".prods").click(function () {
    $(".foot_sub").slideToggle("fast");
  });

  //start reset scroll
  let urlHash = new URL(window.location.href).hash;
  if (new URL(window.location.href).hash == "") {
    $("html, body").animate({ scrollTop: 0 }, 500);
  } else {
    $("html, body").animate(
      {
        scrollTop:
          document.querySelector(urlHash).getBoundingClientRect().y - 200,
      },
      500
    );
  }

  //images responsive
  $("img").addClass("img-responsive");

  //setInterval(scg_imove, 5000);

  $(
    ".header_main,.txt_cen,.vdo,.invest,.environment_header .s_main,.career_header"
  ).css({ "min-height": $(window).height() });
  $(".familiar>div").css({ "min-height": $(window).height() });
  $(".txt_cen div,#environment .environment_header .s_main").css({
    height: $(window).height(),
  });
  $(".parallax-mirror+.parallax-mirror+.parallax-mirror+.parallax-mirror").css({
    "min-height": $(window).height(),
  });
  $(window).resize(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
    } else {
      location.reload();
    }

    $(
      ".header_main,.txt_cen,.vdo,.invest,.environment_header .s_main,.career_header"
    ).css({ "min-height": $(window).height() });
    $(".familiar>div").css({ "min-height": $(window).height() });
    $(".txt_cen div,#environment .environment_header .s_main").css({
      height: $(window).height(),
    });
    $(
      ".parallax-mirror+.parallax-mirror+.parallax-mirror+.parallax-mirror"
    ).css({ "min-height": $(window).height() });
  });
  $(window).load(function () {
    $(
      ".header_main,.txt_cen,.vdo,.invest,.environment_header .s_main,.career_header"
    ).css({ "min-height": $(window).height() });
    $(".familiar>div").css({ "min-height": $(window).height() });
    $(".txt_cen div,#environment .environment_header .s_main").css({
      height: $(window).height(),
    });
    $(
      ".parallax-mirror+.parallax-mirror+.parallax-mirror+.parallax-mirror"
    ).css({ "min-height": $(window).height() });
  });
});

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) { },
  scrollContainer: null,
});
wow.init();

function bx0(i) {
  $(".txb" + i).animate({ opacity: "1", left: "0px" });
}
