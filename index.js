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
