$('.navbar-nav a').on('click', function(e) {
    e.preventDefault();
    // $('.navbar-nav li a').removeClass('li-active');
    // $(this).addClass('li-active');

    let elementTarget = $($(this).attr('href'));

    $('html').animate({
        scrollTop : elementTarget.offset().top - 60
    },1500);
})

$('#btn-explore').on('click', function(e) {
    e.preventDefault();
    let elementTarget = $('#lowongan');

    $('html').animate({
        scrollTop : elementTarget.offset().top-60
    },1500);
})

$(window).on('scroll', function() {
    if (window.scrollY >  50) {
        $('#alert-info').addClass('hide');
    }
    else{
        $('#alert-info').removeClass('hide');
    }

    if (window.scrollY < $('#lowongan').offset().top - 100) {
        $('.navbar-nav li a').removeClass('li-active');
        $('#href-beranda').addClass('li-active');
    }
    if (window.scrollY > $('#lowongan').offset().top - 100 && window.scrollY < $('#service').offset().top - 100) {
        $('.navbar-nav li a').removeClass('li-active');
        $('#href-lowongan').addClass('li-active');
    }
    if (window.scrollY >  $('#service').offset().top - 100) {
        $('.navbar-nav li a').removeClass('li-active');
        $('#href-service').addClass('li-active');
    }

    if (window.scrollY >  $('.last-card').offset().top-((window.innerHeight/2)+100) ) {
        $('#whatsapp').addClass('hide');
    }
    else{
        $('#whatsapp').removeClass('hide');
    }
})