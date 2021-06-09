// $(window).on('mousemove', function(event) {
//     var width = $(window).width();
//     var mouseX = event.pageX - (width * 0.5);
//     var height = $(window).height();
//     var mouseY = event.pageY - (height * 0.5);
//     var xAngle = (mouseY / height) * 90;
//     var yAngle = (mouseX / width) * 90;

//     $('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
// });


// const body = document.getElementById('body');
// document.addEventListener('DOMContentLoaded', e => {
//   setTimeout(function(){ 
//     body.classList.add('loaded');
// }, 3000);
// })

//messager
const user = document.getElementById("Input1");
const message = document.getElementById("textArea1");
const email = document.getElementById('Input2')
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "" && email.value === "") {
  alert("Please fill out user, email and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else if (email.value === "") {
  alert("Please enter your email");
  } else {
  alert(`Hello ${user.value}, Thank you for your email!`);
  };
  });
  // gif control
