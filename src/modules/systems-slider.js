const systems = document.querySelector('.systems');
const systemsArr = document.querySelectorAll('.systems-portfolio-slider-card');
const systemsCard = document.querySelector('.systems-portfolio-slider-card');
const nextsystems = document.querySelector('.systems-slider-next');
const prevsystems = document.querySelector('.systems-slider-prev');
const rangesystems = document.querySelector('.systems-portfolio .input-range');

let systemsCounter = document.querySelector('.systems-portfolio .is');
let systemsOffset = 0;
let systemsi= 0;

function systemsRange() {
    const systemsCardWidth = window.getComputedStyle(systemsCard).width;
    const cardWidth = Number(systemsCardWidth.slice(0, systemsCardWidth.length - 2));
    systemsi = rangesystems.value - 1;
    if (window.innerWidth >= 1366) {
      if(systemsi < 6) { // for static first images + limit
        systemsOffset = -(systemsi) * (cardWidth + 40);
        systems.style.left = systemsOffset + 'px';
      }
    } else if (window.innerWidth <= 768) {
      if(systemsi < 7) { // for static first images + limit
        systemsOffset = -(systemsi) * (cardWidth + 20);
        systems.style.left = systemsOffset + 'px';
      }
    } else {
      if(systemsi < 7) { // for static first images + limit
        systemsOffset = -(systemsi) * (cardWidth + 40);
        systems.style.left = systemsOffset + 'px';
      }
    }
    systemsArr.forEach((e) => {
      e.classList.remove('systems-portfolio-slider-active-card');
    });
    systemsArr[systemsi].classList.add('systems-portfolio-slider-active-card');
    systemsCounter.innerHTML = '0' + (systemsi+ 1) + '/';
  }

function systemsNext() {
    const systemsCardWidth = window.getComputedStyle(systemsCard).width;
    const cardWidth = Number(systemsCardWidth.slice(0, systemsCardWidth.length - 2));
    systemsi++;
    if (window.innerWidth >= 1366) {
      if (systemsi < 6) {
        systemsOffset -= (cardWidth + 40);
      }
    } else {
      systemsOffset -= (cardWidth + 40); //img width
    }
    
    if(systemsi > 6) {
      systemsi = 0;
      systemsOffset = 0;
    }
    systems.style.left = systemsOffset + 'px';
  
    systemsArr.forEach((e) => {
      e.classList.remove('systems-portfolio-slider-active-card');
    });
    systemsCounter.innerHTML = '0' + (systemsi + 1) + '/';
    rangesystems.value = systemsi + 1;
    systemsArr[systemsi].classList.add('systems-portfolio-slider-active-card');
}

function systemsPrev() {
    const systemsCardWidth = window.getComputedStyle(systemsCard).width;
    const cardWidth = Number(systemsCardWidth.slice(0, systemsCardWidth.length - 2));
    systemsi--;
    if(window.innerWidth >= 1366) {
      if(systemsi > 0) {
        systemsOffset += (cardWidth + 40); //img width
      }
    } else {
      systemsOffset += (cardWidth + 40); //img width
    }

    if(systemsi < 0) {
      systemsi = 6;
      systemsOffset = -5 * (cardWidth + 40);
    }
    systems.style.left = systemsOffset + 'px';
  
    systemsArr.forEach((e) => {
      e.classList.remove('systems-portfolio-slider-active-card');
    });
    systemsCounter.innerHTML = '0' + (systemsi+ 1) + '/';
    rangesystems.value = systemsi+ 1;
    systemsArr[systemsi].classList.add('systems-portfolio-slider-active-card');
}

nextsystems.addEventListener('click', systemsNext);
prevsystems.addEventListener('click', systemsPrev);
rangesystems.addEventListener('input', systemsRange);