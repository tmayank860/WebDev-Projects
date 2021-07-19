$(".menu-bar").bind("click", function () {
    console.log("clicked");
	$(this).toggleClass("active");
	$(this).find("div").removeClass("animation");
});
