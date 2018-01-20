function toggleOnlineChatting() {
    Tawk_API.toggle();
}


$(function () {
    //alert('I am here!');
    // $('#fh5co-primary-menu li#nav-index').addClass('active');
    var page = $('#page-name').data('page');
    switch (page) {
        case 'purchase':
            clickNavWithTag('nav-purchase');
            break;
        case 'escrow':
            clickNavWithTag('nav-escrow');
            break;
        case 'loan':
            clickNavWithTag('nav-loan');
            break;
        case 'design':
            clickNavWithTag('nav-design');
            break;
        case 'land':
            clickNavWithTag('nav-investment');
            break;
        case 'management':
            clickNavWithTag('nav-management');
            break;
        case 'about':
            break;
        default:
            break;
    }
    //alert(page);

});

function clickNavWithTag(tag) {
    $('#fh5co-primary-menu li.active').removeClass('active');
    $('#fh5co-primary-menu li#' + tag).addClass('active');
    $('body').removeClass('fh5co-offcanvas');
    var eID = '';
    if (tag === 'nav-index') {
        eID = '#cy-page-header';
    }
    if (tag === 'nav-purchase') {
        //alert(tag);
        eID = '#fh5co-feature-product';
    }
    if (tag === 'nav-escrow') {
        eID = '#cy-escrow';
    }
    if (tag === 'nav-loan') {
        eID = '#fh5co-blog-section';
    }
    if (tag === 'nav-design') {
        eID = '#fh5co-portfolio';
    }
    if (tag === 'nav-investment') {
        eID = '#cy-land';
    }
    if (tag === 'nav-management') {
        eID = '#fh5co-services-section';
    }
    if (tag === 'nav-about') {
        eID = '#fh5co-contact';
    }
    $('html, body').animate({
        scrollTop: $(eID).offset().top
    }, 1000);
}

