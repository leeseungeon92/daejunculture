
//헤더 버튼 바뀌기

$(function(){
	
	// AOS.init();
	
	var scTop;
	var hdHei;
	var topNavFix = function(){
		($(window).scrollTop() < $('#hd_wrap').height()) ? $('#hd_wrap').removeClass('fixed') : $('#hd_wrap').addClass('fixed')
	}
	topNavFix();
	
	$(window).scroll(function(){
		//$('#main_nav .depth1 > li > a').removeClass('on');
		topNavFix();
	});
})

	// 줌기능
	var nowZoom = 100;
	$('#hd_wrap .mo_none a').click(function(e){
		if ($(this).hasClass('in')) nowZoom = nowZoom+5;
		if ($(this).hasClass('def')) nowZoom = 100;
		if ($(this).hasClass('out')) nowZoom = nowZoom-5;
		document.body.style.zoom = nowZoom + "%";
		e.preventDefault();
		return false;
	});

		// 스크롤 최상단 처리
		var tempToTop = function(){
			var savDate = new Date(),
				scTar = $('html, body'),
				btntt = $('#for_totop'),
				curDate,
				calDate,
				sett,
				action,
				chk = 2000;
			sett = function(){
				action = setTimeout(function(){
					btntt.removeClass('on');
				}, chk);
			};
			$(window).scroll(function(){
				curDate = new Date();
				if ($(this).scrollTop() <= 0) {
					clearTimeout(action);
					btntt.removeClass('on');
				} else {
					calDate = curDate - savDate;
					btntt.addClass('on');
					(calDate < chk) ? clearTimeout(action) : savDate = new Date()
					sett();
				}
			});
			btntt.click(function(e){
				scTar.stop().animate({
					scrollTop : 0
				}, 300);
				e.preventDefault();
			});
		};
		tempToTop();
		