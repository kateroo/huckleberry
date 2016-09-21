

//Video - Pause when it's not in view

    
var headerVideo = document.getElementById('header-vid');

$(window).scroll(function() {

    if ($(window).scrollTop() > $("#header-vid").height()) {
        headerVideo.pause();

    } else
        headerVideo.play();
});

         // fix "vh" iOS scroll issue

if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
       var $herowrap = $('#home-hero')
       var $herovidwrap = $('.test-video')
       var $herovid = $('#header-vid')
       var $heroimg = $('.hero-background-image')
       h = window.innerHeight;
      $herowrap.css('height', h);
      $heroimg.css('height', h);
}

//Video - Remove embed code for mobile, we don't want to bother them

        var windowWidth = $(window).innerWidth();
         if (windowWidth < 991) {
         $( ".video-embed-code" ).remove();


         } if (windowWidth < 479) {
             
           $('.c-logo').css("position", "absolute");  
                    $('.client-list img:gt(0)').hide();
		setInterval(function(){
			$('.client-list :first-child').fadeOut()
				.next('img').fadeIn()
				.end().appendTo('.client-list');}, 
		3000);
        }
    
    
        //Contact mobile slide
        $("#contact-mobile,  #bottom-contact").click(function() {
                if (($(window).scrollTop() > $('.skip-me').height()) && ($( ".skip-me" ).is( ":visible" ))){
        //do nothing
                } else{ 
             $('.skip-me').slideToggle(500);
                  $('#contact-mobile').toggleClass("grey");
        }
           });
   $("#contact, #bottom-contact, #top-contact-close").click(function() {
                if (($(window).scrollTop() > $('.top-contact').height()) && ($( ".top-contact" ).is( ":visible" ))){
        //do nothing
                } else{ 
             $('.top-contact').slideToggle(500);
                  $('#contact').toggleClass("grey");
        }
           });



      
// Section 1: Hero animation
 
        TweenMax.set('.flip-text, .flip-text2',{autoAlpha:0, rotationX: 90});
	    var tlRotate1 = new TimelineMax({repeat:-1, repeatDelay: -0.6, paused:true});
	    var tlRotate2 = new TimelineMax({repeat:-1, repeatDelay: -0.6, paused:true, delay: 0.45});

	    $('.flip-text-1').each(function(){
		tlRotate1
			.fromTo($(this), 1, {y:-20, autoAlpha:0},{y:0, autoAlpha:1, delay:1},"-=2")
			.to($(this), 1, {y:20, autoAlpha:0, delay:5});
	});

	   $('.flip-text-2').each(function(){
		tlRotate2
			.fromTo($(this), 1, {y:-20, autoAlpha:0},{y:0, autoAlpha:1, delay:1},"-=2")
			.to($(this), 1, {y:20, autoAlpha:0, delay:5});
	});

	tlRotate1.timeScale(2.5);
	tlRotate2.timeScale(2.5);
         
        var HeaderMax = new TimelineMax();
        HeaderMax.set($('.hero-background-image'), {autoAlpha: 0, display:"block"})
                 .set($('.hero-button-back'), {y:"-50", display:"block"})
                 .set($('.banner-header-holder.one'), {y:"30"})
			     .set($('.banner-header-holder.three'), {y:"-30"})
				 .set(headerVideo, {autoAlpha: 1, onComplete: function(){
						headerVideo.play();
					}}, '0')      
                 .set($('.header h1'), {y:"100"})
                 .set($('.header'), {display:"block"})
                 .staggerTo($('.header h1'), 1, {y: '0', ease: Power2.easeOut}, '0.2', '1.4')
                 .to($('header .banner-header-holder'), 0.7, {y: 0, ease: Expo.easeOut}, '1')
     		     .to('.banner-header-holder.one', 1, {y: 0, ease: Expo.easeOut})
		         .to('.banner-header-holder.three', 1, {y: 0, ease: Expo.easeOut}, '-=1')
                 .to($('.hero-background-image'), 1, {autoAlpha: 0.8 }, '3')
                 .to('.flip-text-1.first', 0.3, {y:-20, onComplete: function(){
				  tlRotate1.play();

		    	 }}, '-=1')
		     	 .to('.flip-text-2.first',0.3, {y:-20, onComplete: function(){

				  tlRotate2.play();
		    	 }}, '-=1')
                 .to('.hero-button-container', 1, {autoAlpha:1})
                 .fromTo('.hero-button',0.6, {scaleY:0}, {scaleY:1, ease:Power2.easeOut}, '-=1')
                 .from('.line, .line2', 1, {width:"0", ease: Expo.easeOut},'-=1')
                 .from('.vertical-line', 1, {height:"0", ease: Expo.easeOut}, '-=.4')
                 .to('.hero-button-text', 0.3, {autoAlpha: 1}, '-=1')
      
        $(window).resize(function() {
       var width = $(document).width();
        if (width > 991) {
          var HeaderMax2 = new TimelineMax();
          HeaderMax2.to('.line', .1, {width:"249"})
                    .to('.line2', .1, {width:"188"})
                    .to('.vertical-line._1, .vertical-line._2', .1, {height:"64"})
       }
                if (width < 991) {
          var HeaderMax2 = new TimelineMax();
          HeaderMax2.to('.line', .1, {width:"227"})
                    .to('.line2', .1, {width:"203"})
                    .to('.vertical-line._1, .vertical-line._2', .1, {height:"144"})
       } 
                if (width < 767) {
          var HeaderMax2 = new TimelineMax();
          HeaderMax2.to('.line', .1, {width:"214"})
                    .to('.line2', .1, {width:"203"})
                    .to('.vertical-line._1, .vertical-line._2', .1, {height:"173"})
    
       }   
       });
        
        $('.hero-button').mouseover(function() {
        var HeaderMax2 = new TimelineMax();
       
         HeaderMax2.to('.hero-button-back', .5, {y:"0", ease: Power2.easeOut})
                   .to('.hero-button-text', 0.3, {color: 'white'}, '-=1')
            }).mouseout (function() {
             var HeaderMax3 = new TimelineMax();
          HeaderMax3.to('.hero-button-back', .5, {y:"-50", ease: Power2.easeOut})
                    .to('.hero-button-text', 0.3, {color: '#dfac53'}, '-=1')
            });
    

    // Portfolio Animations

        var back = ('.portfolio-background-image')
        var back_1 = ('.portfolio-background-image._1')
        var back_2 = ('.portfolio-background-image._2')
        var back_3 = ('.portfolio-background-image._3')
        var back_4 = ('.portfolio-background-image._4')
        var back_5 = ('.portfolio-background-image._5')
        var back_6 = ('.portfolio-background-image._6')
        var back_7 = ('.portfolio-background-image._7')
        var back_8 = ('.portfolio-background-image._8')
        var back_9 = ('.portfolio-background-image._9')
        var back_10 = ('.portfolio-background-image._10')
        var back_11 = ('.portfolio-background-image._11')
        var back_12 = ('.portfolio-background-image._12')
        var back_13 = ('.portfolio-background-image._13')
        var back_14 = ('.portfolio-background-image._14')
        var back_15 = ('.portfolio-background-image._15')
        var port_ut = ('.unselected .portfolio-thumb')
        var port_st = ('.selected .portfolio-thumb')

        if ($(window).width() >= 991) {
            TweenLite.to(back, 0.5, {
                autoAlpha: 0
            });
            
// Section 2: Huckleberry-Way Animation

var scrollMagicController = new ScrollMagic ();

	var hbway = new TimelineMax()
	.add([
          TweenMax.staggerFrom([" .one-right, .two-right"], 2.3, {autoAlpha:0, y:835, ease:Expo.easeOut}, 0.20),
          TweenMax.staggerFrom([".one-left, .two-left, .three-left, .three-right"], 2.3, {autoAlpha:0, y:835, delay: 0.35, ease:Expo.easeOut}, 2.40), 
          TweenMax.from (".treesection2, .photo-border", 1, {autoAlpha:0, ease: Power2.easeOut}, 0), 
          TweenMax.from ("#huckleberryway, #the-huck", 1, {y:35, autoAlpha:0, ease: Power2.easeOut}, 2.5), 
          TweenMax.from (".tagline.left", 1.6, {x:95,  width:0, delay: 0.35, ease:Expo.easeOut}, 0.7),
          TweenMax.from (".tagline.right", 1.6, {x:-95,  width:0, delay: 0.35, ease:Expo.easeOut}, 0.7),
          TweenMax.from (".whatwedo._1", .5, {y:25, autoAlpha:0, delay: 0.55, ease: Power2.easeOut}, 1.5), 
          TweenMax.from (".whatwedo._2", 0.8, {y:35, autoAlpha:0, delay: 0.75, ease: Power2.easeOut}, 1.5),
          TweenMax.from (".offerings-link", .5, {autoAlpha:0, delay: 0.95, ease: Power2.easeOut}, 1.5),
	]);

    var scene1 = new ScrollScene({ triggerElement: '#hb-way', reverse: false, offset: 50})
					.setTween(hbway)
				    .addTo(scrollMagicController)
            
      $('#offerings-set-1').attr('data-parallax', '{"y": -15}');
      $('#offerings-set-2').attr('data-parallax', '{"y": -65}'); 
      $('#offerings-set-3').attr('data-parallax', '{"y": -45}');


      // Brand Animation
    
         scrollController = new ScrollMagic();
         var logos = new TimelineMax()
        
         logos.staggerFrom(".c-logo", 1, {opacity:0, delay:0.2}, 0.2);
    
         var scene3 = new ScrollScene({triggerElement:".brands", reverse: false, offset: -80})
					.setTween(logos)
					.addTo(scrollMagicController);
   
    
            $('.portfolio-item').hover(function() {
                $(this).siblings().addClass('unselected');
                $(this).addClass('selected');
                var tl = new TimelineMax()
                    .to(('.unselected .portfolio-title'), 0.5, {
                        autoAlpha: .5,
                        y: 13,
                        ease: Circ.easeOut
                    }, 0)
                    .to(('.unselected .portfolio-subtitle'), 0.5, {
                        autoAlpha: 0,
                        y: 13,
                        ease: Circ.easeOut
                    }, 0.1)
                    .to(('.selected .portfolio-title'), 0.5, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Circ.easeOut
                    }, 0)
                    .to(('.selected .portfolio-subtitle'), 0.5, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Circ.easeOut
                    }, 0.1)


            }, function() {
                $(this).removeClass('selected');

            });

            $("#portfolio").mouseleave(function() {
                var tl = new TimelineMax()
                tl.to(('.portfolio-title'), 0.5, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Circ.easeOut
                    }, 0.1)
                    .to(('.portfolio-subtitle'), 0.5, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Circ.easeOut
                    }, 0)
                    .to(('.portfolio-subtitle'), 0.5, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Circ.easeOut
                    }, 0)
                    .to(('.portfolio-thumb '), 0.5, {
                        autoAlpha: 1
                    }, 0)
                $('.portfolio-item').removeClass('unselected');
                $('.portfolio-item').removeClass('selected');
            });
 
            $('#portfolio > div > div:nth-child(1)').hover(function() {
            $(back_1).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573a933986d12bd946255a1b_item-8-background.jpg)');   
                var lt2 = new TimelineMax();
                lt2.to(back_1, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_1, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_1, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_1, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(2)').hover(function() {
                $(back_2).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/57506ee69fbd7732523cf628_item-15-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_2, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_2, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_2, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_2, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(3)').hover(function() {
                $(back_3).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573a9958c84afe8749ae2457_item-9-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_3, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_3, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_3, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_3, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(4)').hover(function() {
                $(back_4).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573aa43f86d12bd946256c73_item-4-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_4, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_4, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_4, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_4, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(5)').hover(function() {
                $(back_5).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573aace995a030d046cec2e7_item-12-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_5, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_5, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_5, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_5, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(6)').hover(function() {
                $(back_6).css('background-image','url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573ab19095a030d046cec978_item-13-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_6, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_6, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_6, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_6, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(7)').hover(function() {
                $(back_7).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573a9d37faad6880498368cf_item-10-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_7, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_7, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_7, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_7, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(8)').hover(function() {
                $(back_8).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/57506d4afcdc27ff2e4c449d_item-14-background.jpg)' );
                var lt2 = new TimelineMax();
                lt2.to(back_8, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_8, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_8, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_8, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(9)').hover(function() {
                $(back_9).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573a7c4179f92e732270b22f_item-6-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_9, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_9, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_9, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_9, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(10)').hover(function() {
                $(back_10).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573a6fe62d1e916e3290b7bf_item-7-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_10, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_10, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_10, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_10, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(11)').hover(function() {
                $(back_11).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573a8122d775e472223106c7_item-5-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_11, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_11, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_11, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_11, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });

            $('#portfolio > div > div:nth-child(12)').hover(function() {
                $(back_12).css('background-image', 'url(https://daks2k3a4ib2z.cloudfront.net/56a6451eb627cde43307280f/573ab34995a030d046cecbcd_item-1-background.jpg)');
                var lt2 = new TimelineMax();
                lt2.to(back_12, 0.5, {
                        autoAlpha: 1
                    }, 0)
                    .to(back_12, 3, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, 0.1)
                    .to(port_ut, 0.3, {
                        autoAlpha: 0
                    }, 0)
                    .to(port_st, 0.3, {
                        autoAlpha: 1
                    }, 0)
            }, function() {
                var lt2 = new TimelineMax();
                lt2.to(back_12, 0.5, {
                        autoAlpha: 0
                    }, 0)
                    .to(back_12, 0, {
                        scaleY: 1.05,
                        scaleX: 1.05,
                        ease: Power2.easeOut
                    }, 0.6)
            });
        } else if ($(window).width() <=  767) {
             //console.log("The browser is less than 767px");
             TweenMax.set($('.portfolio-thumb'), {autoAlpha: 0.35, scale: 0.75})
            // SCROLLMAGIC! SOOOOO MAGICAL!!! Setup
            scrollController = new ScrollMagic();
          $('.portfolio-thumb').each(function(){ 
              var currentthumb = this;
              var tweenthumb = TweenMax.to(currentthumb, 0.5, {autoAlpha:1, scale: 1, ease:  Back.easeOut.config(1.7)});
        
              var scene = new ScrollScene({triggerElement: currentthumb})
						.setTween(tweenthumb)
						.addTo(scrollController);
              });
    }


  


    window._wq = window._wq || [];
    _wq.push({
        "ao70c9ehu3": function(video) {
            $("#atvImg__1, #feature-icon-mobile-1").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                video.bind("popoverhide", function() {
                    console.log("The popover for ", video.hashedId(), " is hidden!");
                });
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "45vkmaav88": function(video) {
            $("#atvImg__0, #feature-icon-mobile-2").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "ug0fw05sjw": function(video) {
            $("#atvImg__2,  #feature-icon-mobile-3").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
            });
        }
    });



    window._wq = window._wq || [];
    _wq.push({
        "3t3ary677g": function(video) {
            $("#p-1").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-1 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "htfj12zxrd": function(video) {
            $("#p-2").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-2 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "qb13sof5n2": function(video) {
            $("#p-3").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-3 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "lgwa9yc7sa": function(video) {
            $("#p-4").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-4 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "d187wbw4jy": function(video) {
                $("#p-5").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-5 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "2gkkjq57y5": function(video) {
            $("#p-6").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-6 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "zxq3ifggtz": function(video) {
            $("#p-7").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-7 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "h5mqlkbuo7": function(video) {
            $("#p-8").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn

                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",

                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4

                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-8 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "6348f26pnb": function(video) {
            $("#p-9").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn
                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn
                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",
                                ease: Power2.easeIn
                            }, {
                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-9 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "93neoq09m3": function(video) {
            $("#p-10").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn
                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn
                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )
                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",
                                ease: Power2.easeIn

                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.08
                        )

                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-10 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "t5swfiz0z1": function(video) {
            $("#p-11").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn

                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )

                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn
                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",
                                ease: Power2.easeIn
                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.08
                        )
                    );
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-11 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "79rpfm7vs2": function(video) {
            $("#p-12").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() <= 991) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "0px",
                                ease: Power2.easeIn
                            }, {
                                top: "5px",
                                ease: Power2.easeOut
                            },
                            0.08
                        )
                    );

                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.5, {
                                top: "5px",
                                ease: Power2.easeIn
                            }, {
                                top: "-15px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.06
                        )

                    );


                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader li'), 0.4, {
                                top: "-15px",
                                ease: Power2.easeIn
                            }, {

                                top: "0px",
                                ease: Power2.easeOut,
                                delay: -0.4
                            },
                            0.08
                        )
                    );
                    
                    tload.play()

                    video.bind("popovershow", function() {
                        tload.pause()
                        tload.kill()
                        $(this).find('.loader').hide("fast");
                        $('.loader').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-12 .checkmark').show("fast");
                    });
                };
            });
        }
    });
