
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

// const lm = document.getElementById('lightMode');
//  lm.addEventListener('click', function lightMode(){
//      let lmArray = [];
//      const body = document.querySelector('body');
//      lmArray.push(body)
//      const navbar = document.querySelector('.navbar');
//      lmArray.push(navbar)
//      const navbarNav = document.querySelector('.navbar-nav');
//      lmArray.push(navbarNav)
//      const navLink = document.querySelector('.nav-link');
//      lmArray.push(navLink);
//      const h1 = document.querySelector('h1');
//      lmArray.push(h1);
//      const cta = document.querySelector('.cta');
//      lmArray.push(cta)
//      const emailMe = document.querySelector('.email-me')
//      lmArray.push(emailMe)
//      const cube = document.querySelectorAll('.face')
//      cubeArray = Array.from(cube);
//      lmArray.push(...cube);
//      const wave0 = document.querySelectorAll('#wave0 path');
//      lmArray.push(...wave0);
//      const wave1 = document.querySelectorAll('#wave1');
//      lmArray.push(...wave1)
//      const wave2 = document.querySelectorAll('#wave1')
//      lmArray.push(...wave2)
//      const wave3 = document.querySelectorAll('#wave3')
//      lmArray.push(...wave3);
//      const testimonial = document.querySelectorAll('testimonial');
//      lmArray.push(testimonial);
//      const testCard = document.querySelectorAll('.tesit-card')
//      lmArray.push(testCard)
//      const testiCardTitle = document.querySelectorAll('.testi-card-title');
//      lmArray.push(testiCardTitle);
//      const avatarBox = document.querySelectorAll('.avatar-box');
//      lmArray.push(avatarBox);
//      const wash2 = document.querySelectorAll('wash2');
//      lmArray.push(wash2);
//      const testTitle = document.querySelectorAll('.testi-title');
//      lmArray.push(testTitle);
//      const card = document.querySelectorAll('.card');
//      lmArray.push(card)
//      console.log(lmArray)
//      lmArray.forEach(elem => {
//          elem.classList.toggle('light-mode')
//      })
// // '.card-title', '.aboutme', '.about-me-title',
//     //  '.aboutmep', '.contact-icons', '.social-icon path', 'footer', '.foot-component address', '.footer-former-h5', '#wave5')
     
     
