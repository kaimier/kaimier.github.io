/* @update: 2015-5-21 20:33:33 */ 
! function($) {
	function n() {
		i.removeClass("cur"), i.eq(u).addClass("cur"), l = !0, o.each(function() {
			$(this).children().eq(0).outerHeight();
			$(this).stop(!0, !0).animate({
				marginTop: -$(this).children().eq(0).outerHeight() * u
			}, 1e3, function() {
				l = !1;
			});
		})
	}

	function e() {
		u++, u === r && (u = 0), n()
	}
	var i = $(".slide-flag").find("span"),
		t = $(".slide-up"),
		c = $(".slide-down"),
		o = $(".recommend-slidebox"),
		r = o.eq(0).children().length,
		l = !1,
		u = 0,
		d = null;
	d = setInterval(e, 5e3), $(".recommended").hover(function() {
		clearInterval(d);
	}, function() {
		d = setInterval(e, 5e3);
	}), t.click(function() {
		return l === !0 ? !1 : (u--, -1 === u && (u = r - 1), void n());
	}), c.click(function() {
		return l === !0 ? !1 : (u++, u === r && (u = 0), void n());
	});
	for (var a = 0; r > a; a++) ! function(e) {
		i[a].onclick = function() {
			u = e, n()
		};
	}(a)
}(jQuery);