function getScreenHeight() {
	return window.screen.availHeight
}


$(function(){

			$(document).keydown(function(event) {
				if(event.keyCode == '122'){
		   			window.location.reload();
		   		}

			});
		    
		//源代码
		$(window).on('scroll', function() {
			var point = getScreenHeight() + $(this).attr("scrollY");
			if(point > 3456) {
				$(".my-productions img").each(function(i) {
					$(this).attr('src',$(this).data("src"));
				});
			}
		});
		//each-content-height
		// console.log(window.screen.height);
		$('.main').css('height',getScreenHeight() * 6 + 'px');
		//icon
		$('.me').on({
			'mouseover':function() {
				$('.contact').fadeIn();
			},
			'mouseout':function() {
				$('.contact').fadeOut();
			}

		});
		//第一幅画下箭头
		$('#info span').click(function() {
			$('html,body').animate({
				scrollTop: getScreenHeight()
			},1000);
		});

		//nav点击每个link
		$.each($('nav a'),function(i,n) {
			$('nav a:eq('+i+')').click(function() {
				$('html,body').stop().animate({
					scrollTop: i * getScreenHeight()
				},1000);
			})
		});

		//back-to-top tag fadeIn&fadeOut
		$(window).scroll(function() {
			if($(this).attr("scrollY") > getScreenHeight() - 100) {
				$('#to-Top').fadeIn();
			} else {
				$('#to-Top').fadeOut(function(){
					$(this).css('top','585px');
				});
			}
		});

		//click btt tag
		$('#to-Top').click(function() {
			// console.log($(this).css('top') =='580px');
			if($(this).css('top') =='585px'){
				$(this).css('top','100px');
				$('html,body').stop().animate({
					scrollTop:'0'
				},600);
			}
		});

		//left-arrow
		var flag = false;
		var $ulObj = $(".my-productions > ul");
		var limit = ($(".my-productions > ul >li").length-1) * 360;
		$(".left-arrow").on('click',function() {
			var nowOffset = $ulObj.css('marginLeft');
			if(parseInt(nowOffset) % 360 == 0) {flag = true;};
			if(flag){
				Math.abs(parseInt(nowOffset)) > 0 ? $ulObj.css('marginLeft',parseInt(nowOffset)+360) : false;
			flag = false;
			}
		});
		//right-arrow
		$(".right-arrow").on('click',function() { 
			var nowOffset = $ulObj.css('marginLeft');
			if(parseInt(nowOffset) % 360 == 0) {flag = true;};
			if(flag){
				Math.abs(parseInt(nowOffset)) >= limit ? false : 
			$ulObj.css('marginLeft',parseInt(nowOffset)-360);
			flag = false;
			}
			
		});

	});