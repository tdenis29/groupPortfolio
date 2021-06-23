// var isClicked = false;

// $('div').on('click', function() {
//     isClicked = true;
// });

// $('p').on('click', function() {
//     if (isClicked) // do stuff
// });

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

