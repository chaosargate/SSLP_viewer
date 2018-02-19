var KEY_LEFT  = 37;
var KEY_UP    = 38;
var KEY_RIGHT = 39;
var KEY_LEFT  = 40;

function toggleDisplay(element) {
    if (element.css("display") == "none") {
        element.css("display", "");
    } else {
        element.css("display", "none");
    }
}

function prevScreen() {
    var screens = $(".screen");
	$.each(screens, function(index, screen) {
		if ($(screen).hasClass("active")) {
			$(screen).removeClass("active");
			nextVal = index - 1;
			if (nextVal < 0) {
				nextVal = screens.length - 1;
            };
			$(screens[nextVal]).addClass("active");
            return false;
		}
    })
}

function nextScreen() {
    var screens = $(".screen");
	$.each(screens, function(index, screen) {
		if ($(screen).hasClass("active")) {
			$(screen).removeClass("active");
			nextVal = index + 1;
			if (nextVal == screens.length) {
				nextVal = 0;
            };
			$(screens[nextVal]).addClass("active");
            return false;
		}
    })
}

function init() {
    //$(".sslp_viewer").children()
}

$(document).keydown(function(e) {
    if (e.which == 39) {
        nextScreen();
    } else if (e.which == 37) {
        prevScreen();
    }
})