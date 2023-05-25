const obj = {
    allow: true
  };
  $(".slide-action").click(function () {
    const len = $(".slide-circle-overflow-h-a").length;
    const slides = $(".slide-circle-overflow-h-a");
    const inners = $(".fullwidth-inner-content-r");
    const action = $(this).data("action");
    if (action == "next") {
      if (obj.allow) {
        obj.allow = false;
        for (let i = 0; i < len; i++) {
          if ($(slides[i]).hasClass("circle-grow")) {
            $(".slide-circle-overflow-h-a").removeClass("circle-grow");
            $(".slide-circle-overflow-h-a").removeClass("previous-circle-grow");
            $(".fullwidth-inner-content-r").removeClass("slight-scale");
            $(".fullwidth-inner-content-r").removeClass("previous-scale");
            $(inners[i]).addClass("previous-scale");
            $(slides[i]).addClass("previous-circle-grow");
            $(slides[(i + 1) % len]).addClass("circle-grow");
            $(inners[(i + 1) % len]).addClass("slight-scale");
            console.log((i + 1) % len);
            if (i == len - 1) {
              $(".fullwidth-inner-content-r").removeClass("previous-scale");
              $(".slide-circle-overflow-h-a").removeClass("previous-circle-grow");
              setTimeout(function () {
                obj.allow = true;
              }, 1700);
            } else {
              setTimeout(function () {
                $(inners[i]).removeClass("previous-scale");
                $(slides[i]).removeClass("previous-circle-grow");
                obj.allow = true;
              }, 1700);
            }
  
            break;
          }
        }
      }
    } else if (action == "previous") {
      if (obj.allow) {
        obj.allow = false;
        for (let i = 0; i < len; i++) {
          if ($(slides[i]).hasClass("circle-grow")) {
            $(".slide-circle-overflow-h-a").removeClass("circle-grow");
            $(".slide-circle-overflow-h-a").removeClass("previous-circle-grow");
            $(".fullwidth-inner-content-r").removeClass("slight-scale");
            $(".fullwidth-inner-content-r").removeClass("previous-scale");
            $(inners[i]).addClass("previous-scale");
            $(slides[i]).addClass("previous-circle-grow");
            $(slides[i < 1 ? len - 1 : i - 1]).addClass("circle-grow");
            $(inners[i < 1 ? len - 1 : i - 1]).addClass("slight-scale");
            console.log(i < 1 ? len - 1 : i - 1);
            if (i != 0) {
              $(".fullwidth-inner-content-r").removeClass("previous-scale");
              $(".slide-circle-overflow-h-a").removeClass("previous-circle-grow");
              setTimeout(function () {
                obj.allow = true;
              }, 1700);
            } else {
              setTimeout(function () {
                $(inners[i]).removeClass("previous-scale");
                $(slides[i]).removeClass("previous-circle-grow");
                obj.allow = true;
              }, 1700);
            }
  
            break;
          }
        }
      }
    }
  });
  