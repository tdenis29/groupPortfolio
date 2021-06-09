const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  root: document.querySelector('#viewport'),
  threshold: 0,
  rootMargin: "0px 0px -150px 0px" 
};

const appear = new IntersectionObserver(function(entries, appear) {
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
