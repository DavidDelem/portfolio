$(document).ready(function() {
 
    var langCookie = getCookie('dlm-language');
    var langUser = navigator.language || navigator.userLanguage; 
    var selectedLanguage;
    
    console.log(langUser);
    
    if(langCookie != undefined) {
        selectedLanguage = langCookie;
        $('.lang').removeClass('lang-selected');
        $('#lang-' + selectedLanguage).addClass('lang-selected');
    } else {
        if(langUser != undefined) {
            if(langUser.match(/fr/i)) {
                selectedLanguage = 'fr';
            } else {
                selectedLanguage = 'en';
            }
        }
    }
    
    $.getJSON('datas/translate.json', function(fileContent) { 
        $('[data-translate]').each(function() {
            var element = $(this);
            var attr = element.attr('data-translate');
            if(fileContent.traductions[attr] != undefined) {
                element.html(fileContent.traductions[attr][selectedLanguage]);
            }
        });
    });
        
    
    $('.lang').click(function() {
        
        $('.lang').removeClass('lang-selected');
        
        $(this).addClass('lang-selected');
        selectedLanguage = $(this).attr('data-lang');
        setCookie('dlm-language', selectedLanguage, 30);
        
        $.getJSON('datas/translate.json', function(fileContent) { 
            $('[data-translate]').each(function() {
                var element = $(this);
                var attr = element.attr('data-translate');
                if(fileContent.traductions[attr] != undefined) {
                    element.html(fileContent.traductions[attr][selectedLanguage]);
                }
            });
        });
        
        $('.projet-box').each(function(index) {
        
            var elemProjet = $(this);
            var id = $(this).attr('data-id');

            $.getJSON('datas/projets.json', function(fileContent) {

                    var elem;
                    var datas = fileContent;
                    var labels = "";

                    console.log(datas);
                    $.each(datas.projets, function(i, item) {
                        if (item.id == id) {
                           elem = item;
                            
                            
                           $.each(elem.labels, function(i, item) {
                               labels += "<p>"+ item[selectedLanguage] +"</p>"
                           });
                        
                        }
                        
                    });

                if(selectedLanguage == "fr" ) {
                    elemProjet.html('<div class="img-container"><img src="' + elem.mainphoto + '"/><div class="img-container-hover"><span><span><i class="icon-plus"></i> En savoir plus</span></span></div></div><div><div class="img-container-hover-top">' + labels + '</div><h3>' + elem.titre[selectedLanguage] + '</h3><p>' + elem.description[selectedLanguage] + '</p><div class="zone-dates"><span><i class="icon-calendar"></i> ' + elem.date + ' </span><span><i class="icon-hourglass"></i> ' + elem.duration[selectedLanguage] + ' </span><span><i class="icon-users"></i> ' + elem.team[selectedLanguage] + ' </span></div></div>');
                } else {
                    elemProjet.html('<div class="img-container"><img src="' + elem.mainphoto + '"/><div class="img-container-hover"><span><span><i class="icon-plus"></i> More details</span></span></div></div><div><div class="img-container-hover-top">' + labels + '</div><h3>' + elem.titre[selectedLanguage] + '</h3><p>' + elem.description[selectedLanguage] + '</p><div class="zone-dates"><span><i class="icon-calendar"></i> ' + elem.date + ' </span><span><i class="icon-hourglass"></i> ' + elem.duration[selectedLanguage] + ' </span><span><i class="icon-users"></i> ' + elem.team[selectedLanguage] + ' </span></div></div>');
                }
            });

        });
        
    });
    
    // ANIMATION DU HEADER OUVERTURE
    
    var n = 500;
    
    $('#section-header h1').delay(n).animate({'top':'0', 'opacity':'1', 'zoom': '1'}, 900, 'easeInOutQuint');
    
    $('.traduction').delay(n).animate({'top':'22', 'opacity':'1', 'zoom': '1'}, 900, 'easeInOutQuint');
    
    n = n + 150;
    
    $('#section-header h2').delay(n).animate({'top':'0', 'opacity':'1', 'zoom': '1'}, 900, 'easeInOutQuint');
    
    n = n + 150;
    
    $('#section-header h3').delay(n).animate({'top':'0', 'opacity':'1', 'zoom': '1'}, 900, 'easeInOutQuint');
    $('#section-header .text-presentation-mobile').delay(n).animate({'top':'0', 'opacity':'1', 'zoom': '1'}, 900, 'easeInOutQuint');
    
    n = n + 150;
    
    
                                             
    $('.menu li').each(function() {
        $(this).find('.hide-odd').delay(n).animate({'top':'0', 'opacity':'1'}, 600, 'easeInOutQuart');
        n = n + 50;
    });
    
    n = n + 0;
    
    $('.menu li').each(function() {
        $(this).find('.hide-even').delay(n).animate({'top':'0', 'opacity':'1'}, 600, 'easeInOutQuart');
        n = n + 50;
    });
    
    // -------------------------
    
    // ANIMATION DU HEADER DESCENTE
    
    var hide1 = false;
    var hide2 = false;
    var hide3 = false;
    
	$(window).scroll(function () {
        
		if ($(this).scrollTop() > 60 && hide1 == false) {
			$("#section-header h1").animate({top: -70, opacity: 0}, 250);
			hide1 = true;
		} else if ($(this).scrollTop() < 60 && hide1 == true) {
			$("#section-header h1").animate({top: 0, opacity: 1}, 200);
			hide1 = false;
		}
        
        
		if ($(this).scrollTop() > 130 && hide2 == false) {
			$("#section-header .presentation").animate({top: -70, opacity: 0}, 250);
			hide2 = true;
		} else if ($(this).scrollTop() < 130 && hide2 == true) {
			$("#section-header .presentation").animate({top: 0, opacity: 1}, 200);
			hide2 = false;
		}
        
        if ($(this).scrollTop() > 300 && hide3 == false) {
			$("#section-header .menu").animate({top: -70, opacity: 0}, 250);
			hide3 = true;
		} else if ($(this).scrollTop() < 300 && hide3 == true) {
			$("#section-header .menu").animate({top: 0, opacity: 1}, 200);
			hide3 = false;
		}
    });
    
    // -------------------------
    
    $('.scroll-element').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 2000; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop:$(page).offset().top}, 
    Math.abs(window.scrollY - $(page).offset().top) / 1.8);
        
        //.animate( { scrollTop: $(page).offset().top }, speed ); // Go
        
        return false;
    });
    
    var categorySelected = false;
    
    $('.category').mouseenter(function() {
        var category = $(this).attr("data-category");
        var i = 70;
        
        $('.ship').each( function (index, data) {
            $(this).removeClass('ship-selected');
            $(this).addClass('ship-unselected');
        });
            
        $('.ship').each( function (index, data) {
            if($(this).hasClass(category +'-elem')) {
                $(this).delay(i).queue(function() {
                    $(this).addClass('ship-selected').dequeue();
                });
                i = i + 70;
            }
        });
        categorySelected = false;
    });
    
    $('.category').mouseout(function() {
            var category = $(this).attr("data-category");
            $('.ship').each( function (index, data) {
                    $(this).removeClass('ship-selected');
                    $(this).removeClass('ship-unselected');
            });  
    });
    
    $('.category').click(function() {
        $('.ship').each( function (index, data) {
                $(this).removeClass('ship-selected');
                $(this).removeClass('ship-unselected');
        });
        
        if(!categorySelected) {
            var category = $(this).attr("data-category");
            var i = 70;

            $('.ship').each( function (index, data) {
                $(this).removeClass('ship-selected');
                $(this).addClass('ship-unselected');
            });

            $('.ship').each( function (index, data) {
                if($(this).hasClass(category +'-elem')) {
                    $(this).delay(i).queue(function() {
                        $(this).addClass('ship-selected').dequeue();
                    });
                    i = i + 70;
                }
            });
            categorySelected = true;
        } else {
            var category = $(this).attr("data-category");
            $('.ship').each( function (index, data) {
                    $(this).removeClass('ship-selected');
                    $(this).removeClass('ship-unselected');
            });
            categorySelected = false;
        }
        
        
    });
    
    $('.js-elem-hidden').each(function() {
        $(this).waypoint(function() {
            var that = this;
            window.setTimeout(function() {
                $(that.element).addClass('js-elem-show')
            }, 250);
        }, {
            offset: '100%'
        });
    });
    
    // PROJET HOVER
    
    
    $('.projet-box').mouseover(function() {
        $('.projet-box').not(this).each(function() {
            $(this).addClass('projet-box-hover');
        });
    });
    
    $('.projet-box').mouseout(function() {
        $('.projet-box').each(function() {
            $(this).removeClass('projet-box-hover');
        });
    });
    
    // OUVERTURE ET FERMETURE DETAILS PROJETS
    
    $('.projet-box').each(function(index) {
        
        var elemProjet = $(this);
        var id = $(this).attr('data-id');
        
        $.getJSON('datas/projets.json', function(fileContent) {
                
                var elem;
                var datas = fileContent;
                var labels = "";
            
                console.log(datas);
                $.each(datas.projets, function(i, item) {
                    if (item.id == id) {
                       elem = item; 
                        
                       $.each(elem.labels, function(i, item) {
                           labels += "<p>"+ item[selectedLanguage] +"</p>"
                       });
                        
                    }
                });
            
            if(selectedLanguage == "fr" ) {
                elemProjet.html('<div class="img-container"><img src="' + elem.mainphoto + '"/><div class="img-container-hover"><span><span><i class="icon-plus"></i> En savoir plus</span></span></div></div><div><div class="img-container-hover-top">' + labels + '</div><h3>' + elem.titre[selectedLanguage] + '</h3><p>' + elem.description[selectedLanguage] + '</p><div class="zone-dates"><span><i class="icon-calendar"></i> ' + elem.date + ' </span><span><i class="icon-hourglass"></i> ' + elem.duration[selectedLanguage] + ' </span><span><i class="icon-users"></i> ' + elem.team[selectedLanguage] + ' </span></div></div>');
            } else {
                elemProjet.html('<div class="img-container"><img src="' + elem.mainphoto + '"/><div class="img-container-hover"><span><span><i class="icon-plus"></i> More details</span></span></div></div><div><div class="img-container-hover-top">' + labels + '</div><h3>' + elem.titre[selectedLanguage] + '</h3><p>' + elem.description[selectedLanguage] + '</p><div class="zone-dates"><span><i class="icon-calendar"></i> ' + elem.date + ' </span><span><i class="icon-hourglass"></i> ' + elem.duration[selectedLanguage] + ' </span><span><i class="icon-users"></i> ' + elem.team[selectedLanguage] + ' </span></div></div>');
            }
        });
            
    });
    
    var nbclick = 0;

    $('.projet-box').click(function() {
            var id = $(this).attr('data-id');

            $.getJSON('datas/projets.json', function(fileContent) {
                
                var elem;
                var datas = fileContent;
          
                $.each(datas.projets, function(i, item) {
                    if (item.id == id) {
                       elem = item; 
                    }
                });
                
                console.log(elem);
                
                $('.site-content').addClass('blur-elems');
                $('#zone-detail-projet').find('.popup-title').html(elem.titre[selectedLanguage]);
                $('#zone-detail-projet').css({'background-color': $(this).find('.box-content').css("background-color")});
                
                $('.zone-detail-slider').empty();
                $('.zone-detail-slider').css("transform", "translate3d(0px, 0px, 0px)");
                $('.slider-pagination').html("<p></p>");
                $.each(elem.photos, function(i, item) {
                    console.log(item);
                    $('.zone-detail-slider').append('<div class="slider-item"><img src="'+ item.url +'"/><p>' + item.texte[selectedLanguage] + '</p></div>');
                    
                    if(i == 0) {
                       $('.slider-pagination p').before('<i class="icon-circle"></i>');
                    } else {
                        $('.slider-pagination p').before('<i class="icon-circle-thin"></i>'); 
                    }
                });
                nbclick = 0;
                $('.zone-detail-projet-container').css({'display':'block'});
                $('.zone-detail-projet-container').animate({left:'0%'}, 800, 'easeInOutExpo');
                disableScroll();
            });
        
    });
    
//    $('.close').click(function() {
//        $('.site-content').removeClass('blur-elems');
//         $('#zone-detail-projet').animate({'left':'100%'}, 800, 'easeInOutExpo').animate({'left':'-100%'}, 0);
//    });
    
    $('.zone-detail-projet-container').on('click', function(e) {
                $('.site-content').removeClass('blur-elems');
         $('.zone-detail-projet-container').animate({left:'100%'}, 800, 'easeInOutExpo').queue(function (next) {
                $('.zone-detail-projet-container').css({'display':'none'});
                 $('.zone-detail-projet-container').animate({left:'-100%'}, 0);
             enableScroll();
            next();
        });
    }).on('click', '#zone-detail-projet, .projet-box', function(e) {
        e.stopPropagation();
    });
    
    // SLIDER DETAILS PROJET
        
//    var numitem = 1;
//    $('.slider-item').each(function() {
//        if(numitem == 1) {
//            $(this).closest('.zone-detail-content').find('.slider-pagination p').before('<i class="icon-circle"></i>');
//        } else {
//            $(this).closest('.zone-detail-content').find('.slider-pagination p').before('<i class="icon-circle-thin"></i>'); 
//        }
//        numitem++;
//    });
    
    $('.slider-pagination').on('click', 'i', function() {

        var iactuel = $(this).closest('.slider-pagination').find('.icon-circle').index('i') - 1 - 19;
               // console.log(iactuel);
        $('.slider-pagination i').addClass('icon-circle-thin').removeClass('icon-circle');
        $(this).addClass('icon-circle').removeClass('icon-circle-thin');
        var iclick = $('i').index(this) - 1 - 19;
        
        //console.log(iclick);
        var value = $('#zone-detail-projet').width();
        console.log(value);
        nbclick += (iactuel - iclick);
        $(this).closest('.zone-detail-content').find('.zone-detail-slider').css({'transform':'translate3d(' + nbclick*value + 'px, 0px, 0px)'});
    });
    
    // SLIDER INTERESTS
    
//    $('.rounded-box').mouseover(function() {
//        var category = $(this).attr("data-category");
//        
//        $('.rounded-box-text').each( function (index, data) {
//
//            var i = 100;
//              console.log('ok');
//            if($(this).hasClass('text-' + category)) {
//                $(this).addClass('text-selected').dequeue();
//            }
//        });
//    });
//    
//    $('.rounded-box').mouseout(function() {
//        var category = $(this).attr("data-category");
//        
//        $('.rounded-box-text').each( function (index, data) {
//
//            var i = 100;
//              console.log('ok');
//            if($(this).hasClass('text-selected')) {
//                $(this).removeClass('text-selected').dequeue();
//            }
//        });
//    });
    
    // POPUP
    $('.well-more').click(function() {
        var id = $(this).attr("data-id");
         $('.site-content').addClass('blur-elems');
        $('.site-popup, .popup-elem-container#' + id).css({'display':'block'}).delay(130).queue(function (next) {
            $('.popup-elem-container#' + id).addClass('popup-elem-show');
            disableScroll();
            next();
        });
    });
    
    // POPUP
    $('.site-popup').on('click', function(e) {
            $('.site-content').removeClass('blur-elems');
            $('.popup-elem-container').removeClass('popup-elem-show').delay(150).queue(function (next) {
                $('.site-popup, .popup-elem-container').css({'display':'none'});
                enableScroll();
                next();
            });
        
    }).on('click', '.popup-elem-container', function(e) {
        e.stopPropagation();
    });
});

/* scroll*/

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}