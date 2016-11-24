            $('.portfolio-item').hover(function() {
                $(this).siblings().addClass('unselected');
                $(this).addClass('selected');
                var tl = new TimelineMax()
                    .to(('.selected .portfolio-thumb'), 0.5, {
                        scale:1.11
                        ease: Circ.easeOut
                    }, 0.1)

            }, function() {
                var tl = new TimelineMax()
                     .to(('.selected .portfolio-thumb'), 0.5, {
                        scale:1.0
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
