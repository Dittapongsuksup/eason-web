
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

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const toggle = document.querySelector("#myonoffswitch");
let auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
	// Get current class
	const current = document.querySelector(".current");
	// Remove current class
	current.classList.remove("current");
	// Check for next slide
	if (current.nextElementSibling) {
		// Add current to next sibiling
		current.nextElementSibling.classList.add("current");
	} else {
		// Add current to start
		slides[0].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
	// Get current class
	const current = document.querySelector(".current");
	// Remove current class
	current.classList.remove("current");
	// Check for next slide
	if (current.previousElementSibling) {
		// Add current to prev sibiling
		current.previousElementSibling.classList.add("current");
	} else {
		// Add current to last
		slides[slides.length - 1].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});
prev.addEventListener("click", (e) => {
	prevSlide();
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
});

// Auto slide toggle
toggle.addEventListener("click", (e) => {
	if (toggle.checked) {
		auto = true;
		slideInterval = setInterval(nextSlide, intervalTime);
	} else {
		auto = false;
		clearInterval(slideInterval);
	}
});

// Auto slide
if (auto) {
	slideInterval = setInterval(nextSlide, intervalTime);
}
