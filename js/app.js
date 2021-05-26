// $(window).on('mousemove', function(event) {
//     var width = $(window).width();
//     var mouseX = event.pageX - (width * 0.5);
//     var height = $(window).height();
//     var mouseY = event.pageY - (height * 0.5);
//     var xAngle = (mouseY / height) * 90;
//     var yAngle = (mouseX / width) * 90;

//     $('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
// });
const body = document.getElementById('body');
document.addEventListener('DOMContentLoaded', e => {
  setTimeout(function(){ 
    body.classList.toggle('loaded'); 
}, 3000);
})
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px" 
};

const appear = new IntersectionObserver
(function(entries, appear) {
entries.forEach(entry => {
    if(!entry.isIntersecting){
      return
    } else{
      entry.target.classList.add('appear');
      appear.unobserve(entry.target)
    }
  });
}, appearOptions);


faders.forEach(fader => {
  appear.observe(fader);
});


