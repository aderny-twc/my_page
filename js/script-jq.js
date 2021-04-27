$(document).ready(function() {
    // NAVBAR PANEL
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // NAVBAR BUTTON
    $('.nav-btn').click(function() {
        $('#menu').toggleClass('active');
        $('.nav-btn i').toggleClass('active');
    });
});