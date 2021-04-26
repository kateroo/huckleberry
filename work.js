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



$('.portfolio-item').hover(function() {
                $(this).siblings().addClass('unselected');
                $(this).addClass('selected');
                var tl = new TimelineMax()
                    .to(('.selected .portfolio-thumb'), 0.5, {
                        scale:1.11,
                        ease: Circ.easeOut
                    }, 0.1)

            }, function() {
                var tl = new TimelineMax()
                     .to(('.selected .portfolio-thumb'), 0.5, {
                        scale:1.0,
                        ease: Circ.easeOut
                    }, 0.1)
                $(this).removeClass('selected');
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
        "3lqjv9yhec": function(video) {
            $("#p-2").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
        "uemvkdqxkz": function(video) {
            $("#p-7").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
        "h4odjqb4k2": function(video) {
            $("#p-9").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
        "fyd609inga": function(video) {
            $("#p-11").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
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
        "hjkfuhwp8c": function(video) {
            $("#p-12").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-12 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "dhd8icvt7w": function(video) {
            $("#p-13").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-13 .checkmark').show("fast");
                    });
                };
            });
        }
    });

    window._wq = window._wq || [];
    _wq.push({
        "yq4zk4a9m6": function(video) {
            $("#p-14").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-14 .checkmark').show("fast");
                    });
                };
            });
        }
    });

   window._wq = window._wq || [];
    _wq.push({
        "iio0q4d4c5": function(video) {
            $("#p-15").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-15 .checkmark').show("fast");
                    });
                };
            });
        }
    });

   window._wq = window._wq || [];
    _wq.push({
        "qojqynnd1l": function(video) {
            $("#p-16").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-16 .checkmark').show("fast");
                    });
                };
            });
        }
    });

   window._wq = window._wq || [];
    _wq.push({
        "58msce039m": function(video) {
            $("#p-17").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-17 .checkmark').show("fast");
                    });
                };
            });
        }
    });

   window._wq = window._wq || [];
    _wq.push({
        "qntqv81rva": function(video) {
            $("#p-18").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-18 .checkmark').show("fast");
                    });
                };
            });
        }
    });

  window._wq = window._wq || [];
    _wq.push({
        "ywwhfvgfrn": function(video) {
            $("#p-19").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-19 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "x3opayad14": function(video) {
            $("#p-20").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-20 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "ou8x739u7k": function(video) {
            $("#p-21").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-21 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "up7pfnoxdt": function(video) {
            $("#p-22").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-22 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "13765060ea": function(video) {
            $("#p-23").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-23 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "5c6gpqobjz": function(video) {
            $("#p-24").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-24 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "ll98yaofzq": function(video) {
            $("#p-25").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-25 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "untmzn9c41": function(video) {
            $("#p-26").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-26 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "6a99040a07": function(video) {
            $("#p-27").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-27 .checkmark').show("fast");
                    });
                };
            });
        }
    });

 window._wq = window._wq || [];
    _wq.push({
        "5w7mo5t100": function(video) {
            $("#p-28").click(function() {
                if (video.state() === "playing") {
                    video.pause();
                } else {
                    video.play();
                }
                if ($(window).width() >= 0) {
                    $(this).find('.portfolio-thumb').fadeTo("fast", 0.5);
                     if ($(this).find('.loader2').length == 0) {
                        $(this).find('.portfolio-subtitle').after('<ul class="loader2"><li></li><li></li><li></li><li></li></ul>');
                        $(this).find('.loader2').show("fast");
                    }
                    var tload = new TimelineMax({
                        paused: true,
                        repeat: -1
                    });
                    var bulina = $('.loader2 li');
                    tload.add(
                        TweenMax.staggerFromTo(
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.5, {
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
                            $('.loader2 li'), 0.4, {
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
                        $(this).find('.loader2').hide("fast");
                        $('.loader2').remove();
                    });
                    video.bind("popoverhide", function() {
                        $('#p-28 .checkmark').show("fast");
                    });
                };
            });
        }
    });
