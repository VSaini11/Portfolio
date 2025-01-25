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


            document.addEventListener('DOMContentLoaded', function() {
              // Gallery configuration
              const galleryConfig = {
                  container: document.getElementById('gallery-container'),
                  dotsContainer: document.getElementById('gallery-dots'),
                  groups: document.querySelectorAll('.gallery-group'),
                  currentGroup: 0,
                  interval: 4000 // Time between slides in milliseconds
              };
          
              // Create navigation dots
              function createDots() {
                  galleryConfig.groups.forEach((_, index) => {
                      const dot = document.createElement('button');
                      dot.className = `w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === 0 ? 'bg-green-500' : 'bg-gray-600'
                      }`;
                      dot.addEventListener('click', () => showGroup(index));
                      galleryConfig.dotsContainer.appendChild(dot);
                  });
              }
          
              // Show specific group
              function showGroup(index) {
                  galleryConfig.currentGroup = index;
                  galleryConfig.container.style.transform = `translateX(-${index * 100}%)`;
                  
                  // Update dots
                  const dots = galleryConfig.dotsContainer.children;
                  Array.from(dots).forEach((dot, i) => {
                      dot.className = `w-2 h-2 rounded-full transition-colors duration-200 ${
                          i === index ? 'bg-green-500' : 'bg-gray-600'
                      }`;
                  });
          
                  // Update opacity
                  galleryConfig.groups.forEach((group, i) => {
                      const images = group.querySelectorAll('div');
                      images.forEach(img => {
                          img.style.opacity = i === index ? '1' : '0.3';
                      });
                  });
              }
          
              // Next group
              function nextGroup() {
                  const nextIndex = (galleryConfig.currentGroup + 1) % galleryConfig.groups.length;
                  showGroup(nextIndex);
              }
          
              // Initialize gallery
              createDots();
              setInterval(nextGroup, galleryConfig.interval);
          });

          function animateCounter(element, start, end, duration = 2000) {
            let startTimestamp = null;
            const totalSteps = end - start;
          
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
          
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = Math.floor(progress * totalSteps + start);
          
              element.textContent = currentValue.toLocaleString();
          
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                element.textContent = end.toLocaleString();
              }
            };
          
            window.requestAnimationFrame(step);
          }
          
          document.addEventListener('DOMContentLoaded', () => {
            const counterElement = document.getElementById('followersCount');
            const totalFollowers = 1300;
          
            animateCounter(counterElement, 0, totalFollowers, 2000);
          });

          function animateCounter(element, start, end, duration = 2000) {
            let startTimestamp = null;
            const totalSteps = end - start;
          
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
          
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = Math.floor(progress * totalSteps + start);
          
              element.textContent = currentValue.toLocaleString();
          
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                element.textContent = end.toLocaleString();
              }
            };
          
            window.requestAnimationFrame(step);
          }
          
          document.addEventListener('DOMContentLoaded', () => {
            const counterElement = document.getElementById('InstagramfollowersCount');
            const totalFollowers = 400;
          
            animateCounter(counterElement, 0, totalFollowers, 2000);
          });




    


