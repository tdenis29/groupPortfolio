
///touchscreen

    if(window.matchMedia("(any-pointer: coarse)").matches) {
    $(window).on('touchmove', function(event) {
        var width = $(window).width();
        var mouseX = event.pageX - (width * 1);
        var height = $(window).height();
        var mouseY = event.pageY - (height * 1);
        var xAngle = (mouseY / height) * 180;
        var yAngle = (mouseX / width) * 180;
      
        $('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
      });
      //esle is mouse
} else {
    $(window).on('mousemove', function(event) {
        var width = $(window).width();
        var mouseX = event.pageX - (width * .5);
        var height = $(window).height();
        var mouseY = event.pageY - (height * .5);
        var xAngle = (mouseY / height) * 180;
        var yAngle = (mouseX / width) * 180;
        $('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
    });
}

const lm = document.getElementById('lightMode');
 lm.addEventListener('click', function lightMode(){
     let lmArray = [];
     const body = document.querySelector('body');
     lmArray.push(body)
     const navbar = document.querySelector('.navbar');
     lmArray.push(navbar)
     const navbarNav = document.querySelector('.navbar-nav');
     lmArray.push(navbarNav)
     const navLink = document.querySelector('.nav-link');
     lmArray.push(navLink);
     const h1 = document.querySelector('h1');
     lmArray.push(h1);
     const cta = document.querySelector('.cta');
     lmArray.push(cta)
     const emailMe = document.querySelector('.email-me')
     lmArray.push(emailMe)
     const cube = document.querySelectorAll('.face')
     lmArray.push(cube)
     , '#wave0 path', '#wave1 path', '#wave2 path', '#wave3 path', '.testimonial', 
     '.tesit-card', '.testi-card-title', '.avatar-box', '.wash2', '.testi-title', '.card', '.card-title', '.aboutme', '.about-me-title',
     '.aboutmep', '.contact-icons', '.social-icon path', 'footer', '.foot-component address', '.footer-former-h5', '#wave5')
     
     
 })