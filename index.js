document.addEventListener('mousemove', (event) => {
    const shade = document.querySelector('.shade');
    const shadeSize = shade.offsetWidth / 2;
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;
    shade.style.transform = `translate(${x - shadeSize}px, ${y - shadeSize}px)`;
  });


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('#details a');

window.onscroll = () => {
  sections.forEach(sec => {  
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('#details a[href*=' + id + ']').classList.add('active');
      });
    } ;
  });
};

document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight / 5 * 4;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in-visible');
    } else {
      section.classList.remove('fade-in-visible');
    }
  });
});

var app = document.getElementById('typewriter');

        var typewriter = new Typewriter(app, {
            loop: true
        });

        typewriter.typeString('Frontend Developer')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Web Developer')
            .pauseFor(2500)
            .start();
