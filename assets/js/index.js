$('.navbar-nav a').on('click', function(e) {
    e.preventDefault();
    $('.navbar-nav li a').removeClass('li-active');
    $(this).addClass('li-active');
})