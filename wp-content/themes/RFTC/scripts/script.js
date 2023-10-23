/* jshint ignore:start */

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// Smoothscroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/* jshint ignore:end */
/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: Dev.js
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
	
	You can read more abotu this file - http://shaneprendergast.co.uk/web-design/dev-js/
*/

var cookie = false;
/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/



$('.thankyou-form').submit(function(e) {

	e.preventDefault();

	var formName = $('.thankyou-form__name').val();
	var formComment = $('.thankyou-form__comment').val();
	var formTrue = true;

	console.log('formName =' + formName, 'formComment =' +  formComment);

	$('.thankyou-form__name').removeClass('error');
	$('.thankyou-form__comment').removeClass('error');

	if(formName === '') {

		$('.thankyou-form__name').addClass('error');
		formTrue = false;

	}

	if(formComment === '') {

		$('.thankyou-form__comment').addClass('error');
		formTrue = false;

	}

	if(formTrue) {

		$.ajax({
			method: "POST",
			url: "//rideforthechild.co.uk/wp-content/themes/RFTC/scripts/addthankyou.php",
			data: {name: formName, comment: formComment},
			error: function(xhr, status, error) {
			  //var err = eval("(" + xhr.responseText + ")");
			  //alert(err.Message);
			},
			success: function(data) {
			  //alert('success ' + data);
			}
		});

		$('.thankyou-form').hide();
		$('.thankyou-form-text').html('Thanks so much for assisting me in my goal of helping children with deafness and cancer. Please come back and check the website in October to see the tribute page.<br><br> Shane x').append("<img src='http://rideforthechild.co.uk/wp-content/themes/RFTC/img/thankyou.jpg' />");

	}

});

jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

// JS EXAMPLE

var RFTC = RFTC || {};

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

if (isChrome || isSafari) {
	$('body').addClass('webkit-browser');
}

RFTC.videoBanner = function() {

	var canPlay = false;
	var v = document.createElement('video');

	if(v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
	   canPlay = true;
	}

	var video = $('#slide-video');

	if (canPlay && video.length > 0) {
		video.get(0).play();
	}

	else {
		$('#slide-video').remove();
		$('.banner--homepage').addClass('banner--homepage-no-video');
	}

	$(window).load(function() {

	  $('.page-loader').hide();
	  
	});

};


RFTC.password = function() {
	
	$('.password-submit').submit(function(e){

		e.preventDefault();

		var userPass = $('.password-submit-value').val();
		var pass = 'isupportrideforthechild';

		//console.log(userPass, pass);


		if (userPass === pass) {

			$('.password').fadeOut();

		}

		else {

			$('.password-error').html('Password Incorrect');

		}

	});
	
};

RFTC.navigation = function() {
	
	var navBtn = $('.main-header__nav-btn');

	function init() {

		navBtn.click(openNav);

		if ($(window).width() >= 1170) {

			stickyHead();

		}

	}

	function openNav() {

		$(this).toggleClass('main-header__nav-btn--active');
		$('.main-header__nav').fadeToggle();

	}

	function stickyHead() {

		$(function() {

		    //caches a jQuery object containing the header element
		    var header = $(".main-header");

		    $(window).scroll(function() {

		        var scroll = $(window).scrollTop();

		        if (scroll >= 178) {
		            header.addClass("main-header--sticky");
		        } else {
		            header.removeClass("main-header--sticky");
		        }

		    });

		});

	}

	init();
	
};

RFTC.cookieNotice = function() {

	var bannerHomepage = $('.banner--homepage');
	var cookieNotice = document.cookie.indexOf("alreadyEntered");
	
    console.log(document.cookie.indexOf("clicked"));
    
    console.log(cookie);
    
    if (cookieNotice === -1 || cookie === true) {
    
    	bannerHomepage.addClass('banner--homepage-animate');
		document.cookie = 'alreadyEntered=yes';
    		
	}
	
	else {
	
		bannerHomepage.addClass('banner--homepage-no-animate');
	
	}

};

RFTC.routeMap = function() {

	var route = [
		{
			"id": 1,
			"day": "Day One",
			"start": "San Fran, CA",
			"finish": "Ione, CA",
			"miles": 106,
			"milestogo": 3130,
			"pagelink": "link.co.uk"
		},
		{
			"id": 2,
			"day": "Day Two",
			"start": "Ione, CA",
			"finish": "Carson City, NV",
			"miles": 114,
			"milestogo": 3016,
			"pagelink": "link.co.uk"
		},
		{
			"id": 3,
			"day": "Day Three",
			"start": "Carson City, NV",
			"finish": "Middlegate NV",
			"miles": 108,
			"milestogo": 2908,
			"pagelink": "link.co.uk"
		},
		{
			"id": 4,
			"day": "Day Four",
			"start": "Middlegate, NV",
			"finish": "Eureka, NV",
			"miles": 132,
			"milestogo": 2776,
			"pagelink": "link.co.uk"
		},
		{
			"id": 5,
			"day": "Day Five",
			"start": "Eureka, NV",
			"finish": "Baker, NV",
			"miles": 139,
			"milestogo": 2637,
			"pagelink": "link.co.uk"
		},
		{
			"id": 6,
			"day": "Day Six",
			"start": "Baker, NV",
			"finish": "Leamington, UT",
			"miles": 117,
			"milestogo": 2520,
			"pagelink": "link.co.uk"
		},
		{
			"id": 7,
			"day": "Day Seven",
			"start": "Leamington, UT",
			"finish": "Fruitland, UT",
			"miles": 122,
			"milestogo": 2398,
			"pagelink": "link.co.uk"
		},
		{
			"id": 8,
			"day": "Day Eight",
			"start": "Fruitland, UT",
			"finish": "Dinosaur, CO",
			"miles": 117,
			"milestogo": 2281,
			"pagelink": "link.co.uk"
		},
		{
			"id": 9,
			"day": "Day Nine",
			"start": "Dinosaur, CO",
			"finish": "Milner, CO",
			"miles": 120,
			"milestogo": 2161,
			"pagelink": "link.co.uk"
		},
		{
			"id": 10,
			"day": "Day Ten",
			"start": "Milner, CO",
			"finish": "Laporte, CO",
			"miles": 144,
			"milestogo": 2017,
			"pagelink": "link.co.uk"
		},
		{
			"id": 11,
			"day": "Day Eleven",
			"start": "Laporte, CO",
			"finish": "Akron, CO",
			"miles": 126,
			"milestogo": 1891,
			"pagelink": "link.co.uk"
		},
		{
			"id": 12,
			"day": "Day Twelve",
			"start": "Akron, CO",
			"finish": "Herndon, KS",
			"miles": 142,
			"milestogo": 1749,
			"pagelink": "link.co.uk"
		},
		{
			"id": 13,
			"day": "Day Thirteen",
			"start": "Herndon, KS",
			"finish": "Smith Center, KS",
			"miles": 115,
			"milestogo": 1634,
			"pagelink": "link.co.uk"
		},
		{
			"id": 14,
			"day": "Day Fourteen",
			"start": "Smith Center, KS",
			"finish": "Marysville, KS",
			"miles": 115,
			"milestogo": 1519,
			"pagelink": "link.co.uk"
		},
		{
			"id": 15,
			"day": "Day Fifteen",
			"start": "Marysville, KS",
			"finish": "Cameron, MO",
			"miles": 136,
			"milestogo": 1383,
			"pagelink": "link.co.uk"
		},
		{
			"id": 16,
			"day": "Day Sixteen",
			"start": "Cameron, MO",
			"finish": "Shelbyville, MO",
			"miles": 127,
			"milestogo": 1256,
			"pagelink": "link.co.uk"
		},
		{
			"id": 17,
			"day": "Day Seventeen",
			"start": "Shelbyville, MO",
			"finish": "Franklin, IL",
			"miles": 122,
			"milestogo": 1134,
			"pagelink": "link.co.uk"
		},
		{
			"id": 18,
			"day": "Day Eighteen",
			"start": "Franklin, IL",
			"finish": "Union Center, IL",
			"miles": 121,
			"milestogo": 1013,
			"pagelink": "link.co.uk"
		},
		{
			"id": 19,
			"day": "Day Nineteen",
			"start": "Union Center, IL",
			"finish": "Plainfield, IN",
			"miles": 109,
			"milestogo": 904,
			"pagelink": "link.co.uk"
		},
		{
			"id": 20,
			"day": "Day Twenty",
			"start": "Plainfield, IN",
			"finish": "Trotwood, OH",
			"miles": 122,
			"milestogo": 782,
			"pagelink": "link.co.uk"
		},
		{
			"id": 21,
			"day": "Day Twenty One",
			"start": "Trotwood, OH",
			"finish": "Hebron, OH",
			"miles": 112,
			"milestogo": 670,
			"pagelink": "link.co.uk"
		},
		{
			"id": 22,
			"day": "Day Tweny Two",
			"start": "Hebron, OH",
			"finish": "Triadelphia, WV",
			"miles": 113,
			"milestogo": 557,
			"pagelink": "link.co.uk"
		},
		{
			"id": 23,
			"day": "Day Twenty Three",
			"start": "Triadelphia, WV",
			"finish": "Somerset, PA",
			"miles": 94,
			"milestogo": 463,
			"pagelink": "link.co.uk"
		},
		{
			"id": 24,
			"day": "Day Twenty Four",
			"start": "Somerset, PA",
			"finish": "Knobsville, PA",
			"miles": 78,
			"milestogo": 385,
			"pagelink": "link.co.uk"
		},
		{
			"id": 25,
			"day": "Day Twenty Five",
			"start": "Knobsville, PA",
			"finish": "Lancaster, PA",
			"miles": 113,
			"milestogo": 272,
			"pagelink": "link.co.uk"
		},
		{
			"id": 26,
			"day": "Day Twenty Six",
			"start": "Lancaster, PA",
			"finish": "Warrington, PA",
			"miles": 77,
			"milestogo": 195,
			"pagelink": "link.co.uk"
		},
		{
			"id": 27,
			"day": "Day Twenty Seven",
			"start": "Warrington, PA",
			"finish": "Westfield, NJ",
			"miles": 62,
			"milestogo": 133,
			"pagelink": "link.co.uk"
		},
		{
			"id": 28,
			"day": "Day Twenty Eight",
			"start": "Westfield, NJ",
			"finish": "New York, NY",
			"miles": 46,
			"milestogo": 0,
			"pagelink": "link.co.uk"
		}
	];
	
	var num = -1;
	
	if ($(window).width() > 799) {
	
   		$('.location__pin').hover(hoverPlace);
   		
	}
	
	else {
	
		$('body').on("swipeleft",function() {
		
  			swipePlace('left');
  			
		});
		
		$('body').on("swiperight",function() {
		
  			swipePlace('right');
  			
		});
	
	}
	
	$('.location-info__page--next').on("click",function() {
		
		swipePlace('left');
			
	});
	
	$('.location-info__page--prev').on("click",function() {
		
		swipePlace('right');
			
	});
	
	function swipePlace(direction) {
		
		if(direction === 'left' && num < 27) {
		
			num++;
		
		}

		if(direction === 'right' && num > 0) {
			
			num--;
			
		}
		
		addPlace(num);
		
	
	}
	
	function hoverPlace() {
	
		var id = $(this).data('id');
		
		num = id;
		
		addPlace(id);
			
	}
	
	function addPlace(id) {
	
		$('.location__pin').removeClass('location__pin--start');
		$('.location__pin').removeClass('location__pin--end');
	
		var days = id + 1;
		var dayPlus = id + 2;
		//console.log('one is ' + days + "two is " + dayPlus);
		$('#pin' + days).addClass('location__pin--start');
		$('#pin' + dayPlus).addClass('location__pin--end');
	
		var day = route[id].day;
		var start = route[id].start;
		var finish = route[id].finish;
		var miles = route[id].miles;
		var milestogo = route[id].milestogo;
		var pagelink = route[id].pagelink;
		
		$('.location-info__header').html(day);
		$('.start-name').finish().html(start).fadeIn(300);
		$('.finish-name').finish().html(finish).fadeIn(300);
		$('.miles-name').finish().html(miles).fadeIn((300));
		$('.milestogo-name').finish().html(milestogo).fadeIn(300);
		
	}

};

new RFTC.navigation();
//new RFTC.cookieNotice();
new RFTC.routeMap();
new RFTC.password();
new RFTC.videoBanner();


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJkZXYuanMiLCJzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuLy8gdXNhZ2U6IGxvZygnaW5zaWRlIGNvb2xGdW5jJywgdGhpcywgYXJndW1lbnRzKTtcbi8vIHBhdWxpcmlzaC5jb20vMjAwOS9sb2ctYS1saWdodHdlaWdodC13cmFwcGVyLWZvci1jb25zb2xlbG9nL1xud2luZG93LmxvZyA9IGZ1bmN0aW9uIGYoKXsgbG9nLmhpc3RvcnkgPSBsb2cuaGlzdG9yeSB8fCBbXTsgbG9nLmhpc3RvcnkucHVzaChhcmd1bWVudHMpOyBpZih0aGlzLmNvbnNvbGUpIHsgdmFyIGFyZ3MgPSBhcmd1bWVudHMsIG5ld2FycjsgYXJncy5jYWxsZWUgPSBhcmdzLmNhbGxlZS5jYWxsZXI7IG5ld2FyciA9IFtdLnNsaWNlLmNhbGwoYXJncyk7IGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09ICdvYmplY3QnKSBsb2cuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgbmV3YXJyKTsgZWxzZSBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBuZXdhcnIpO319O1xuXG4vLyBtYWtlIGl0IHNhZmUgdG8gdXNlIGNvbnNvbGUubG9nIGFsd2F5c1xuKGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9Zm9yKHZhciBjPVwiYXNzZXJ0LGNvdW50LGRlYnVnLGRpcixkaXJ4bWwsZXJyb3IsZXhjZXB0aW9uLGdyb3VwLGdyb3VwQ29sbGFwc2VkLGdyb3VwRW5kLGluZm8sbG9nLG1hcmtUaW1lbGluZSxwcm9maWxlLHByb2ZpbGVFbmQsdGltZSx0aW1lRW5kLHRyYWNlLHdhcm5cIi5zcGxpdChcIixcIiksZDshIShkPWMucG9wKCkpOyl7YVtkXT1hW2RdfHxiO319KVxuKGZ1bmN0aW9uKCl7dHJ5e2NvbnNvbGUubG9nKCk7cmV0dXJuIHdpbmRvdy5jb25zb2xlO31jYXRjaChhKXtyZXR1cm4gKHdpbmRvdy5jb25zb2xlPXt9KTt9fSgpKTtcblxuXG4vLyBwbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUsIGluc3RlYWQgb2Ygc2VwYXJhdGUsIHNsb3dlciBzY3JpcHQgZmlsZXMuXG5cbi8vIFNtb290aHNjcm9sbFxuXG4kKGZ1bmN0aW9uKCkge1xuICAkKCdhW2hyZWYqPSNdOm5vdChbaHJlZj0jXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuLyohXG4qIGpxdWVyeS5jb3VudGVydXAuanMgMS4wXG4qXG4qIENvcHlyaWdodCAyMDEzLCBCZW5qYW1pbiBJbnRhbCBodHRwOi8vZ2FtYml0LnBoIEBiZmludGFsXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBHUEwgdjIgTGljZW5zZVxuKlxuKiBEYXRlOiBOb3YgMjYsIDIwMTNcbiovKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2UuZm4uY291bnRlclVwPWZ1bmN0aW9uKHQpe3ZhciBuPWUuZXh0ZW5kKHt0aW1lOjQwMCxkZWxheToxMH0sdCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWUodGhpcykscj1uLGk9ZnVuY3Rpb24oKXt2YXIgZT1bXSxuPXIudGltZS9yLmRlbGF5LGk9dC50ZXh0KCkscz0vWzAtOV0rLFswLTldKy8udGVzdChpKTtpPWkucmVwbGFjZSgvLC9nLFwiXCIpO3ZhciBvPS9eWzAtOV0rJC8udGVzdChpKSx1PS9eWzAtOV0rXFwuWzAtOV0rJC8udGVzdChpKSxhPXU/KGkuc3BsaXQoXCIuXCIpWzFdfHxbXSkubGVuZ3RoOjA7Zm9yKHZhciBmPW47Zj49MTtmLS0pe3ZhciBsPXBhcnNlSW50KGkvbipmKTt1JiYobD1wYXJzZUZsb2F0KGkvbipmKS50b0ZpeGVkKGEpKTtpZihzKXdoaWxlKC8oXFxkKykoXFxkezN9KS8udGVzdChsLnRvU3RyaW5nKCkpKWw9bC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQrKShcXGR7M30pLyxcIiQxLCQyXCIpO2UudW5zaGlmdChsKX10LmRhdGEoXCJjb3VudGVydXAtbnVtc1wiLGUpO3QudGV4dChcIjBcIik7dmFyIGM9ZnVuY3Rpb24oKXt0LnRleHQodC5kYXRhKFwiY291bnRlcnVwLW51bXNcIikuc2hpZnQoKSk7aWYodC5kYXRhKFwiY291bnRlcnVwLW51bXNcIikubGVuZ3RoKXNldFRpbWVvdXQodC5kYXRhKFwiY291bnRlcnVwLWZ1bmNcIiksci5kZWxheSk7ZWxzZXtkZWxldGUgdC5kYXRhKFwiY291bnRlcnVwLW51bXNcIik7dC5kYXRhKFwiY291bnRlcnVwLW51bXNcIixudWxsKTt0LmRhdGEoXCJjb3VudGVydXAtZnVuY1wiLG51bGwpfX07dC5kYXRhKFwiY291bnRlcnVwLWZ1bmNcIixjKTtzZXRUaW1lb3V0KHQuZGF0YShcImNvdW50ZXJ1cC1mdW5jXCIpLHIuZGVsYXkpfTt0LndheXBvaW50KGkse29mZnNldDpcIjEwMCVcIix0cmlnZ2VyT25jZTohMH0pfSl9fSkoalF1ZXJ5KTtcblxuLyoganNoaW50IGlnbm9yZTplbmQgKi8iLCIvKiAtIEJBU0UgSFRNTCBURU1QTEFURVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcblx0RGVzY3JpcHRpb246IERldi5qc1xuXHRBdXRob3I6U2hhbmUgUHJlbmRlcmdhc3Rcblx0QXV0aG9yIFVSTDpodHRwOi8vd3d3LndlYmtuaXQuY28udWtcblx0VGVtcGxhdGUgVVJMOmh0dHA6Ly9iYXNlLndlYmtuaXQuY28udWsvXG5cdFxuXHRZb3UgY2FuIHJlYWQgbW9yZSBhYm90dSB0aGlzIGZpbGUgLSBodHRwOi8vc2hhbmVwcmVuZGVyZ2FzdC5jby51ay93ZWItZGVzaWduL2Rldi1qcy9cbiovXG5cbnZhciBjb29raWUgPSBmYWxzZTsiLCIvKiAtIEJBU0UgSFRNTCBURU1QTEFURVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcblx0RGVzY3JpcHRpb246IEpTIFNjcmlwdHNcblx0QXV0aG9yOlNoYW5lIFByZW5kZXJnYXN0XG5cdEF1dGhvciBVUkw6aHR0cDovL3d3dy53ZWJrbml0LmNvLnVrXG5cdFRlbXBsYXRlIFVSTDpodHRwOi8vYmFzZS53ZWJrbml0LmNvLnVrL1xuKi9cblxuXG5cbiQoJy50aGFua3lvdS1mb3JtJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcblxuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0dmFyIGZvcm1OYW1lID0gJCgnLnRoYW5reW91LWZvcm1fX25hbWUnKS52YWwoKTtcblx0dmFyIGZvcm1Db21tZW50ID0gJCgnLnRoYW5reW91LWZvcm1fX2NvbW1lbnQnKS52YWwoKTtcblx0dmFyIGZvcm1UcnVlID0gdHJ1ZTtcblxuXHRjb25zb2xlLmxvZygnZm9ybU5hbWUgPScgKyBmb3JtTmFtZSwgJ2Zvcm1Db21tZW50ID0nICsgIGZvcm1Db21tZW50KTtcblxuXHQkKCcudGhhbmt5b3UtZm9ybV9fbmFtZScpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXHQkKCcudGhhbmt5b3UtZm9ybV9fY29tbWVudCcpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXG5cdGlmKGZvcm1OYW1lID09PSAnJykge1xuXG5cdFx0JCgnLnRoYW5reW91LWZvcm1fX25hbWUnKS5hZGRDbGFzcygnZXJyb3InKTtcblx0XHRmb3JtVHJ1ZSA9IGZhbHNlO1xuXG5cdH1cblxuXHRpZihmb3JtQ29tbWVudCA9PT0gJycpIHtcblxuXHRcdCQoJy50aGFua3lvdS1mb3JtX19jb21tZW50JykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cdFx0Zm9ybVRydWUgPSBmYWxzZTtcblxuXHR9XG5cblx0aWYoZm9ybVRydWUpIHtcblxuXHRcdCQuYWpheCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0dXJsOiBcIi8vcmlkZWZvcnRoZWNoaWxkLmNvLnVrL3dwLWNvbnRlbnQvdGhlbWVzL1JGVEMvc2NyaXB0cy9hZGR0aGFua3lvdS5waHBcIixcblx0XHRcdGRhdGE6IHtuYW1lOiBmb3JtTmFtZSwgY29tbWVudDogZm9ybUNvbW1lbnR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuXHRcdFx0ICAvL3ZhciBlcnIgPSBldmFsKFwiKFwiICsgeGhyLnJlc3BvbnNlVGV4dCArIFwiKVwiKTtcblx0XHRcdCAgLy9hbGVydChlcnIuTWVzc2FnZSk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0ICAvL2FsZXJ0KCdzdWNjZXNzICcgKyBkYXRhKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQoJy50aGFua3lvdS1mb3JtJykuaGlkZSgpO1xuXHRcdCQoJy50aGFua3lvdS1mb3JtLXRleHQnKS5odG1sKCdUaGFua3Mgc28gbXVjaCBmb3IgYXNzaXN0aW5nIG1lIGluIG15IGdvYWwgb2YgaGVscGluZyBjaGlsZHJlbiB3aXRoIGRlYWZuZXNzIGFuZCBjYW5jZXIuIFBsZWFzZSBjb21lIGJhY2sgYW5kIGNoZWNrIHRoZSB3ZWJzaXRlIGluIE9jdG9iZXIgdG8gc2VlIHRoZSB0cmlidXRlIHBhZ2UuPGJyPjxicj4gU2hhbmUgeCcpLmFwcGVuZChcIjxpbWcgc3JjPSdodHRwOi8vcmlkZWZvcnRoZWNoaWxkLmNvLnVrL3dwLWNvbnRlbnQvdGhlbWVzL1JGVEMvaW1nL3RoYW5reW91LmpwZycgLz5cIik7XG5cblx0fVxuXG59KTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiggJCApIHtcbiAgICAkKCcuY291bnRlcicpLmNvdW50ZXJVcCh7XG4gICAgICAgIGRlbGF5OiAxMCxcbiAgICAgICAgdGltZTogMjAwMFxuICAgIH0pO1xufSk7XG5cbi8vIEpTIEVYQU1QTEVcblxudmFyIFJGVEMgPSBSRlRDIHx8IHt9O1xuXG52YXIgaXNDaHJvbWUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xudmFyIGlzU2FmYXJpID0gL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvQXBwbGUgQ29tcHV0ZXIvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG5cbmlmIChpc0Nocm9tZSB8fCBpc1NhZmFyaSkge1xuXHQkKCdib2R5JykuYWRkQ2xhc3MoJ3dlYmtpdC1icm93c2VyJyk7XG59XG5cblJGVEMudmlkZW9CYW5uZXIgPSBmdW5jdGlvbigpIHtcblxuXHR2YXIgY2FuUGxheSA9IGZhbHNlO1xuXHR2YXIgdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cblx0aWYodi5jYW5QbGF5VHlwZSAmJiB2LmNhblBsYXlUeXBlKCd2aWRlby9tcDQnKS5yZXBsYWNlKC9uby8sICcnKSkge1xuXHQgICBjYW5QbGF5ID0gdHJ1ZTtcblx0fVxuXG5cdHZhciB2aWRlbyA9ICQoJyNzbGlkZS12aWRlbycpO1xuXG5cdGlmIChjYW5QbGF5ICYmIHZpZGVvLmxlbmd0aCA+IDApIHtcblx0XHR2aWRlby5nZXQoMCkucGxheSgpO1xuXHR9XG5cblx0ZWxzZSB7XG5cdFx0JCgnI3NsaWRlLXZpZGVvJykucmVtb3ZlKCk7XG5cdFx0JCgnLmJhbm5lci0taG9tZXBhZ2UnKS5hZGRDbGFzcygnYmFubmVyLS1ob21lcGFnZS1uby12aWRlbycpO1xuXHR9XG5cblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cblx0ICAkKCcucGFnZS1sb2FkZXInKS5oaWRlKCk7XG5cdCAgXG5cdH0pO1xuXG59O1xuXG5cblJGVEMucGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcblx0XG5cdCQoJy5wYXNzd29yZC1zdWJtaXQnKS5zdWJtaXQoZnVuY3Rpb24oZSl7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgdXNlclBhc3MgPSAkKCcucGFzc3dvcmQtc3VibWl0LXZhbHVlJykudmFsKCk7XG5cdFx0dmFyIHBhc3MgPSAnaXN1cHBvcnRyaWRlZm9ydGhlY2hpbGQnO1xuXG5cdFx0Ly9jb25zb2xlLmxvZyh1c2VyUGFzcywgcGFzcyk7XG5cblxuXHRcdGlmICh1c2VyUGFzcyA9PT0gcGFzcykge1xuXG5cdFx0XHQkKCcucGFzc3dvcmQnKS5mYWRlT3V0KCk7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0JCgnLnBhc3N3b3JkLWVycm9yJykuaHRtbCgnUGFzc3dvcmQgSW5jb3JyZWN0Jyk7XG5cblx0XHR9XG5cblx0fSk7XG5cdFxufTtcblxuUkZUQy5uYXZpZ2F0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFxuXHR2YXIgbmF2QnRuID0gJCgnLm1haW4taGVhZGVyX19uYXYtYnRuJyk7XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblxuXHRcdG5hdkJ0bi5jbGljayhvcGVuTmF2KTtcblxuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAxMTcwKSB7XG5cblx0XHRcdHN0aWNreUhlYWQoKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb3Blbk5hdigpIHtcblxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ21haW4taGVhZGVyX19uYXYtYnRuLS1hY3RpdmUnKTtcblx0XHQkKCcubWFpbi1oZWFkZXJfX25hdicpLmZhZGVUb2dnbGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gc3RpY2t5SGVhZCgpIHtcblxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cblx0XHQgICAgLy9jYWNoZXMgYSBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGhlYWRlciBlbGVtZW50XG5cdFx0ICAgIHZhciBoZWFkZXIgPSAkKFwiLm1haW4taGVhZGVyXCIpO1xuXG5cdFx0ICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cblx0XHQgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHQgICAgICAgIGlmIChzY3JvbGwgPj0gMTc4KSB7XG5cdFx0ICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwibWFpbi1oZWFkZXItLXN0aWNreVwiKTtcblx0XHQgICAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwibWFpbi1oZWFkZXItLXN0aWNreVwiKTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICB9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxuXHRpbml0KCk7XG5cdFxufTtcblxuUkZUQy5jb29raWVOb3RpY2UgPSBmdW5jdGlvbigpIHtcblxuXHR2YXIgYmFubmVySG9tZXBhZ2UgPSAkKCcuYmFubmVyLS1ob21lcGFnZScpO1xuXHR2YXIgY29va2llTm90aWNlID0gZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCJhbHJlYWR5RW50ZXJlZFwiKTtcblx0XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCJjbGlja2VkXCIpKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhjb29raWUpO1xuICAgIFxuICAgIGlmIChjb29raWVOb3RpY2UgPT09IC0xIHx8IGNvb2tpZSA9PT0gdHJ1ZSkge1xuICAgIFxuICAgIFx0YmFubmVySG9tZXBhZ2UuYWRkQ2xhc3MoJ2Jhbm5lci0taG9tZXBhZ2UtYW5pbWF0ZScpO1xuXHRcdGRvY3VtZW50LmNvb2tpZSA9ICdhbHJlYWR5RW50ZXJlZD15ZXMnO1xuICAgIFx0XHRcblx0fVxuXHRcblx0ZWxzZSB7XG5cdFxuXHRcdGJhbm5lckhvbWVwYWdlLmFkZENsYXNzKCdiYW5uZXItLWhvbWVwYWdlLW5vLWFuaW1hdGUnKTtcblx0XG5cdH1cblxufTtcblxuUkZUQy5yb3V0ZU1hcCA9IGZ1bmN0aW9uKCkge1xuXG5cdHZhciByb3V0ZSA9IFtcblx0XHR7XG5cdFx0XHRcImlkXCI6IDEsXG5cdFx0XHRcImRheVwiOiBcIkRheSBPbmVcIixcblx0XHRcdFwic3RhcnRcIjogXCJTYW4gRnJhbiwgQ0FcIixcblx0XHRcdFwiZmluaXNoXCI6IFwiSW9uZSwgQ0FcIixcblx0XHRcdFwibWlsZXNcIjogMTA2LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMzEzMCxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMixcblx0XHRcdFwiZGF5XCI6IFwiRGF5IFR3b1wiLFxuXHRcdFx0XCJzdGFydFwiOiBcIklvbmUsIENBXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkNhcnNvbiBDaXR5LCBOVlwiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMTQsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAzMDE2LFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAzLFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgVGhyZWVcIixcblx0XHRcdFwic3RhcnRcIjogXCJDYXJzb24gQ2l0eSwgTlZcIixcblx0XHRcdFwiZmluaXNoXCI6IFwiTWlkZGxlZ2F0ZSBOVlwiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMDgsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAyOTA4LFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiA0LFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgRm91clwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIk1pZGRsZWdhdGUsIE5WXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkV1cmVrYSwgTlZcIixcblx0XHRcdFwibWlsZXNcIjogMTMyLFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMjc3Nixcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogNSxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IEZpdmVcIixcblx0XHRcdFwic3RhcnRcIjogXCJFdXJla2EsIE5WXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkJha2VyLCBOVlwiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMzksXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAyNjM3LFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiA2LFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgU2l4XCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiQmFrZXIsIE5WXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkxlYW1pbmd0b24sIFVUXCIsXG5cdFx0XHRcIm1pbGVzXCI6IDExNyxcblx0XHRcdFwibWlsZXN0b2dvXCI6IDI1MjAsXG5cdFx0XHRcInBhZ2VsaW5rXCI6IFwibGluay5jby51a1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDcsXG5cdFx0XHRcImRheVwiOiBcIkRheSBTZXZlblwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIkxlYW1pbmd0b24sIFVUXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkZydWl0bGFuZCwgVVRcIixcblx0XHRcdFwibWlsZXNcIjogMTIyLFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMjM5OCxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogOCxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IEVpZ2h0XCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiRnJ1aXRsYW5kLCBVVFwiLFxuXHRcdFx0XCJmaW5pc2hcIjogXCJEaW5vc2F1ciwgQ09cIixcblx0XHRcdFwibWlsZXNcIjogMTE3LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMjI4MSxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogOSxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IE5pbmVcIixcblx0XHRcdFwic3RhcnRcIjogXCJEaW5vc2F1ciwgQ09cIixcblx0XHRcdFwiZmluaXNoXCI6IFwiTWlsbmVyLCBDT1wiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMjAsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAyMTYxLFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAxMCxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IFRlblwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIk1pbG5lciwgQ09cIixcblx0XHRcdFwiZmluaXNoXCI6IFwiTGFwb3J0ZSwgQ09cIixcblx0XHRcdFwibWlsZXNcIjogMTQ0LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMjAxNyxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcImRheVwiOiBcIkRheSBFbGV2ZW5cIixcblx0XHRcdFwic3RhcnRcIjogXCJMYXBvcnRlLCBDT1wiLFxuXHRcdFx0XCJmaW5pc2hcIjogXCJBa3JvbiwgQ09cIixcblx0XHRcdFwibWlsZXNcIjogMTI2LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTg5MSxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTIsXG5cdFx0XHRcImRheVwiOiBcIkRheSBUd2VsdmVcIixcblx0XHRcdFwic3RhcnRcIjogXCJBa3JvbiwgQ09cIixcblx0XHRcdFwiZmluaXNoXCI6IFwiSGVybmRvbiwgS1NcIixcblx0XHRcdFwibWlsZXNcIjogMTQyLFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTc0OSxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTMsXG5cdFx0XHRcImRheVwiOiBcIkRheSBUaGlydGVlblwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIkhlcm5kb24sIEtTXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIlNtaXRoIENlbnRlciwgS1NcIixcblx0XHRcdFwibWlsZXNcIjogMTE1LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTYzNCxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTQsXG5cdFx0XHRcImRheVwiOiBcIkRheSBGb3VydGVlblwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIlNtaXRoIENlbnRlciwgS1NcIixcblx0XHRcdFwiZmluaXNoXCI6IFwiTWFyeXN2aWxsZSwgS1NcIixcblx0XHRcdFwibWlsZXNcIjogMTE1LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTUxOSxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTUsXG5cdFx0XHRcImRheVwiOiBcIkRheSBGaWZ0ZWVuXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiTWFyeXN2aWxsZSwgS1NcIixcblx0XHRcdFwiZmluaXNoXCI6IFwiQ2FtZXJvbiwgTU9cIixcblx0XHRcdFwibWlsZXNcIjogMTM2LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTM4Myxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTYsXG5cdFx0XHRcImRheVwiOiBcIkRheSBTaXh0ZWVuXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiQ2FtZXJvbiwgTU9cIixcblx0XHRcdFwiZmluaXNoXCI6IFwiU2hlbGJ5dmlsbGUsIE1PXCIsXG5cdFx0XHRcIm1pbGVzXCI6IDEyNyxcblx0XHRcdFwibWlsZXN0b2dvXCI6IDEyNTYsXG5cdFx0XHRcInBhZ2VsaW5rXCI6IFwibGluay5jby51a1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDE3LFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgU2V2ZW50ZWVuXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiU2hlbGJ5dmlsbGUsIE1PXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkZyYW5rbGluLCBJTFwiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMjIsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAxMTM0LFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAxOCxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IEVpZ2h0ZWVuXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiRnJhbmtsaW4sIElMXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIlVuaW9uIENlbnRlciwgSUxcIixcblx0XHRcdFwibWlsZXNcIjogMTIxLFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTAxMyxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMTksXG5cdFx0XHRcImRheVwiOiBcIkRheSBOaW5ldGVlblwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIlVuaW9uIENlbnRlciwgSUxcIixcblx0XHRcdFwiZmluaXNoXCI6IFwiUGxhaW5maWVsZCwgSU5cIixcblx0XHRcdFwibWlsZXNcIjogMTA5LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogOTA0LFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAyMCxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IFR3ZW50eVwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIlBsYWluZmllbGQsIElOXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIlRyb3R3b29kLCBPSFwiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMjIsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiA3ODIsXG5cdFx0XHRcInBhZ2VsaW5rXCI6IFwibGluay5jby51a1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDIxLFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgVHdlbnR5IE9uZVwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIlRyb3R3b29kLCBPSFwiLFxuXHRcdFx0XCJmaW5pc2hcIjogXCJIZWJyb24sIE9IXCIsXG5cdFx0XHRcIm1pbGVzXCI6IDExMixcblx0XHRcdFwibWlsZXN0b2dvXCI6IDY3MCxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMjIsXG5cdFx0XHRcImRheVwiOiBcIkRheSBUd2VueSBUd29cIixcblx0XHRcdFwic3RhcnRcIjogXCJIZWJyb24sIE9IXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIlRyaWFkZWxwaGlhLCBXVlwiLFxuXHRcdFx0XCJtaWxlc1wiOiAxMTMsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiA1NTcsXG5cdFx0XHRcInBhZ2VsaW5rXCI6IFwibGluay5jby51a1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDIzLFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgVHdlbnR5IFRocmVlXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiVHJpYWRlbHBoaWEsIFdWXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIlNvbWVyc2V0LCBQQVwiLFxuXHRcdFx0XCJtaWxlc1wiOiA5NCxcblx0XHRcdFwibWlsZXN0b2dvXCI6IDQ2Myxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMjQsXG5cdFx0XHRcImRheVwiOiBcIkRheSBUd2VudHkgRm91clwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIlNvbWVyc2V0LCBQQVwiLFxuXHRcdFx0XCJmaW5pc2hcIjogXCJLbm9ic3ZpbGxlLCBQQVwiLFxuXHRcdFx0XCJtaWxlc1wiOiA3OCxcblx0XHRcdFwibWlsZXN0b2dvXCI6IDM4NSxcblx0XHRcdFwicGFnZWxpbmtcIjogXCJsaW5rLmNvLnVrXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMjUsXG5cdFx0XHRcImRheVwiOiBcIkRheSBUd2VudHkgRml2ZVwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIktub2JzdmlsbGUsIFBBXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIkxhbmNhc3RlciwgUEFcIixcblx0XHRcdFwibWlsZXNcIjogMTEzLFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMjcyLFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAyNixcblx0XHRcdFwiZGF5XCI6IFwiRGF5IFR3ZW50eSBTaXhcIixcblx0XHRcdFwic3RhcnRcIjogXCJMYW5jYXN0ZXIsIFBBXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIldhcnJpbmd0b24sIFBBXCIsXG5cdFx0XHRcIm1pbGVzXCI6IDc3LFxuXHRcdFx0XCJtaWxlc3RvZ29cIjogMTk1LFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAyNyxcblx0XHRcdFwiZGF5XCI6IFwiRGF5IFR3ZW50eSBTZXZlblwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIldhcnJpbmd0b24sIFBBXCIsXG5cdFx0XHRcImZpbmlzaFwiOiBcIldlc3RmaWVsZCwgTkpcIixcblx0XHRcdFwibWlsZXNcIjogNjIsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAxMzMsXG5cdFx0XHRcInBhZ2VsaW5rXCI6IFwibGluay5jby51a1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDI4LFxuXHRcdFx0XCJkYXlcIjogXCJEYXkgVHdlbnR5IEVpZ2h0XCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwiV2VzdGZpZWxkLCBOSlwiLFxuXHRcdFx0XCJmaW5pc2hcIjogXCJOZXcgWW9yaywgTllcIixcblx0XHRcdFwibWlsZXNcIjogNDYsXG5cdFx0XHRcIm1pbGVzdG9nb1wiOiAwLFxuXHRcdFx0XCJwYWdlbGlua1wiOiBcImxpbmsuY28udWtcIlxuXHRcdH1cblx0XTtcblx0XG5cdHZhciBudW0gPSAtMTtcblx0XG5cdGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc5OSkge1xuXHRcbiAgIFx0XHQkKCcubG9jYXRpb25fX3BpbicpLmhvdmVyKGhvdmVyUGxhY2UpO1xuICAgXHRcdFxuXHR9XG5cdFxuXHRlbHNlIHtcblx0XG5cdFx0JCgnYm9keScpLm9uKFwic3dpcGVsZWZ0XCIsZnVuY3Rpb24oKSB7XG5cdFx0XG4gIFx0XHRcdHN3aXBlUGxhY2UoJ2xlZnQnKTtcbiAgXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdFx0JCgnYm9keScpLm9uKFwic3dpcGVyaWdodFwiLGZ1bmN0aW9uKCkge1xuXHRcdFxuICBcdFx0XHRzd2lwZVBsYWNlKCdyaWdodCcpO1xuICBcdFx0XHRcblx0XHR9KTtcblx0XG5cdH1cblx0XG5cdCQoJy5sb2NhdGlvbi1pbmZvX19wYWdlLS1uZXh0Jykub24oXCJjbGlja1wiLGZ1bmN0aW9uKCkge1xuXHRcdFxuXHRcdHN3aXBlUGxhY2UoJ2xlZnQnKTtcblx0XHRcdFxuXHR9KTtcblx0XG5cdCQoJy5sb2NhdGlvbi1pbmZvX19wYWdlLS1wcmV2Jykub24oXCJjbGlja1wiLGZ1bmN0aW9uKCkge1xuXHRcdFxuXHRcdHN3aXBlUGxhY2UoJ3JpZ2h0Jyk7XG5cdFx0XHRcblx0fSk7XG5cdFxuXHRmdW5jdGlvbiBzd2lwZVBsYWNlKGRpcmVjdGlvbikge1xuXHRcdFxuXHRcdGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnICYmIG51bSA8IDI3KSB7XG5cdFx0XG5cdFx0XHRudW0rKztcblx0XHRcblx0XHR9XG5cblx0XHRpZihkaXJlY3Rpb24gPT09ICdyaWdodCcgJiYgbnVtID4gMCkge1xuXHRcdFx0XG5cdFx0XHRudW0tLTtcblx0XHRcdFxuXHRcdH1cblx0XHRcblx0XHRhZGRQbGFjZShudW0pO1xuXHRcdFxuXHRcblx0fVxuXHRcblx0ZnVuY3Rpb24gaG92ZXJQbGFjZSgpIHtcblx0XG5cdFx0dmFyIGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuXHRcdFxuXHRcdG51bSA9IGlkO1xuXHRcdFxuXHRcdGFkZFBsYWNlKGlkKTtcblx0XHRcdFxuXHR9XG5cdFxuXHRmdW5jdGlvbiBhZGRQbGFjZShpZCkge1xuXHRcblx0XHQkKCcubG9jYXRpb25fX3BpbicpLnJlbW92ZUNsYXNzKCdsb2NhdGlvbl9fcGluLS1zdGFydCcpO1xuXHRcdCQoJy5sb2NhdGlvbl9fcGluJykucmVtb3ZlQ2xhc3MoJ2xvY2F0aW9uX19waW4tLWVuZCcpO1xuXHRcblx0XHR2YXIgZGF5cyA9IGlkICsgMTtcblx0XHR2YXIgZGF5UGx1cyA9IGlkICsgMjtcblx0XHQvL2NvbnNvbGUubG9nKCdvbmUgaXMgJyArIGRheXMgKyBcInR3byBpcyBcIiArIGRheVBsdXMpO1xuXHRcdCQoJyNwaW4nICsgZGF5cykuYWRkQ2xhc3MoJ2xvY2F0aW9uX19waW4tLXN0YXJ0Jyk7XG5cdFx0JCgnI3BpbicgKyBkYXlQbHVzKS5hZGRDbGFzcygnbG9jYXRpb25fX3Bpbi0tZW5kJyk7XG5cdFxuXHRcdHZhciBkYXkgPSByb3V0ZVtpZF0uZGF5O1xuXHRcdHZhciBzdGFydCA9IHJvdXRlW2lkXS5zdGFydDtcblx0XHR2YXIgZmluaXNoID0gcm91dGVbaWRdLmZpbmlzaDtcblx0XHR2YXIgbWlsZXMgPSByb3V0ZVtpZF0ubWlsZXM7XG5cdFx0dmFyIG1pbGVzdG9nbyA9IHJvdXRlW2lkXS5taWxlc3RvZ287XG5cdFx0dmFyIHBhZ2VsaW5rID0gcm91dGVbaWRdLnBhZ2VsaW5rO1xuXHRcdFxuXHRcdCQoJy5sb2NhdGlvbi1pbmZvX19oZWFkZXInKS5odG1sKGRheSk7XG5cdFx0JCgnLnN0YXJ0LW5hbWUnKS5maW5pc2goKS5odG1sKHN0YXJ0KS5mYWRlSW4oMzAwKTtcblx0XHQkKCcuZmluaXNoLW5hbWUnKS5maW5pc2goKS5odG1sKGZpbmlzaCkuZmFkZUluKDMwMCk7XG5cdFx0JCgnLm1pbGVzLW5hbWUnKS5maW5pc2goKS5odG1sKG1pbGVzKS5mYWRlSW4oKDMwMCkpO1xuXHRcdCQoJy5taWxlc3RvZ28tbmFtZScpLmZpbmlzaCgpLmh0bWwobWlsZXN0b2dvKS5mYWRlSW4oMzAwKTtcblx0XHRcblx0fVxuXG59O1xuXG5uZXcgUkZUQy5uYXZpZ2F0aW9uKCk7XG4vL25ldyBSRlRDLmNvb2tpZU5vdGljZSgpO1xubmV3IFJGVEMucm91dGVNYXAoKTtcbm5ldyBSRlRDLnBhc3N3b3JkKCk7XG5uZXcgUkZUQy52aWRlb0Jhbm5lcigpO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
