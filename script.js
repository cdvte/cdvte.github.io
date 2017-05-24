$("i").hover(
	function(){
		$(this).addClass("animated tada");
	},
	function(){
		$(this).removeClass("animated tada");
	}
);

$("a h5").hover(
	function(){
		$(this).addClass("animated tada");
	},
	function(){
		$(this).removeClass("animated tada");
	}
);

$(".portfolio .item").hover(
	function(){
		$(this).addClass("animated pulse");
	},
	function(){
		$(this).removeClass("animated pulse");
	}
);

$(".portfolio .item").hover(
	function(){
		$(this).find("p").css("display", "block");
	},
	function(){
		$(this).find("p").css("display", "none");
	}
);