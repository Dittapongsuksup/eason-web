$(function () {
  $.getJSON("https://www.scg.com/scg_api/stock_data.php", function (result) {
    var data = $.parseJSON(result);
    $(".share_price").html(
      "<span>฿</span>" +
        data["data"]["last_done"] +
        '<span><i class="icon-shift sh_cl"></i></span>'
    );

    var ch = Number(data["data"]["change"]);
    //console.log(data["data"]["change"]);
    //var ch='-';
    if (ch >= 0) {
      $(".sh_cl").css("color", "#4bc932");
      $(".investor_relations .s_main .bx a .cn div p span i").css(
        "transform",
        "rotate(0deg)"
      );
    } else if (ch < 0) {
      $(".sh_cl").css("color", "#ee2524");
      $(".investor_relations .s_main .bx a .cn div p span i").css(
        "transform",
        "rotate(180deg)"
      );
    } else {
      $(".sh_cl").hide();
    }

    var date = data["data"]["datetime"];
    $(".date").html(
      date.slice(6, 8) +
        "." +
        date.slice(4, 6) +
        "." +
        date.slice(0, 4) +
        "<br/>" +
        date.slice(9, 11) +
        ":" +
        date.slice(12, 14) +
        ":" +
        date.slice(15, 17)
    );

    //console.log(result);
  });

  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(window).on("orientationchange", function () {
      if (window.orientation == 0) {
        //alert('แนวตั้ง');
        $(".slide_water").show();
        $(".investor_relations").css("margin-top", 0);
      } else {
        //alert('แนวนอน');
        $(".slide_water").hide();
        $(".investor_relations").css("margin-top", $("header").height());
      }
    });
  }
});

//Check language html
const lang = $("html").attr("lang");

//BANNER Slides
fetch("api/banner-slide/" + lang + "/banner.json")
  .then((response) => response.json())
  .then((json) => {
    const banners = json;
    //console.log(banners)
    let banner_result = "";
    let img_devices = "";
    let banner_checked = "";

    for (const key of banners.banners) {
      if ($(window).width() > 810) img_devices = key.img_desktop;
      else img_devices = key.img_mobile;

      if (key.link)
        banner_checked = `<div class="bg" style="background-image: url(${img_devices});" onclick="window.open('${key.link}', '_blank');"></div>`;
      else
        banner_checked = `<div class="bg" style="background-image: url(${img_devices});"><div class="content_sl"><a class="read_more" href="${key.watch_vdo}" target="_blank">WATCH VIDEO</a><a class="read_more" href="${key.more_info}" target="_blank">MORE INFO</a></div></div>`;
      banner_result += banner_checked;
    }

    $("#slide_v")
      .html(banner_result)
      .royalSlider({
        transitionSpeed: 500,
        fadeinLoadedSlide: "true",
        autoPlay: {
          enabled: true,
          stopAtAction: false,
          pauseOnHover: false,
          delay: 7000,
        },
        block: {
          fadeEffect: true,
        },
        video: {
          autoHideArrows: true,
          autoHideControlNav: false,
          autoHideBlocks: true,
        },
        autoScaleSlider: true,
      });
  })
  .catch((error) => {
    console.error("Error:", error);
    $(".update .slide").html("Json ERROR!!!");
  });

$(".discover-inno-slide .slide").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

$(".discover-esg-slide .slide").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

//product_list .bl
if ($(window).width() <= 640) {
  $(".product_list .row").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

//NEWS UPDATD Slides to show
fetch("api/news-update/" + lang + "/news.json")
  .then((response) => response.json())
  .then((json) => {
    const news = json;
    //console.log(news)
    let news_update = "";

    for (const key of news.news) {
      news_update +=
        '<div class="bl">' +
        '<div class="bll">' +
        '<div class="pic">' +
        '<a href="' +
        key.link +
        '" target="_blank">' +
        '<img src="' +
        key.img +
        '" alt="" />' +
        "</a>" +
        "</div>" +
        '<p class="c0">' +
        key.desc +
        "</p>" +
        '<a class="more_info" href="' +
        key.link +
        '" target="_blank">' +
        "<span>" +
        key.bt +
        "</span>" +
        "</a>" +
        "</div>" +
        "</div>";
    }

    $(".update .slide")
      .html(news_update)
      .slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 810,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  })
  .catch((error) => {
    console.error("Error:", error);
    $(".update .slide").html("Json ERROR!!!");
  });
