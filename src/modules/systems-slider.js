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
    systemsi= rangesystems.value - 1;
    console.log(rangesystems.value);
    if(systemsi< 7) { // for static first images + limit
      systemsOffset = -(systemsi) * (cardWidth + 40);
      systems.style.left = systemsOffset + 'px';
      console.log(cardWidth);
    }
    systemsArr.forEach((e) => {
      e.classList.remove('systems-portfolio-slider-active-card');
    });
    systemsArr[systemsi].classList.add('systems-portfolio-slider-active-card');
    systemsCounter.innerHTML = '0' + (systemsi+ 1) + '/';
    console.log('range');
  }

function systemsNext() {
    const systemsCardWidth = window.getComputedStyle(systemsCard).width;
    const cardWidth = Number(systemsCardWidth.slice(0, systemsCardWidth.length - 2));
    systemsi++;
    systemsOffset -= (cardWidth + 40); //img width
    if(systemsi> 6) {
      systemsi= 0;
      systemsOffset = 0;
    }
    systems.style.left = systemsOffset + 'px';
  
    systemsArr.forEach((e) => {
      e.classList.remove('systems-portfolio-slider-active-card');
    });
    systemsCounter.innerHTML = '0' + (systemsi+ 1) + '/';
    rangesystems.value = systemsi+ 1;
    systemsArr[systemsi].classList.add('systems-portfolio-slider-active-card');
    console.log('next');
}

function systemsPrev() {
    const systemsCardWidth = window.getComputedStyle(systemsCard).width;
    const cardWidth = Number(systemsCardWidth.slice(0, systemsCardWidth.length - 2));
    systemsi--;
    systemsOffset += (cardWidth + 40); //img width
    if(systemsi< 0) {
      systemsi= 6;
      systemsOffset = -6 * (cardWidth + 40);
    }
    systems.style.left = systemsOffset + 'px';
  
    systemsArr.forEach((e) => {
      e.classList.remove('systems-portfolio-slider-active-card');
    });
    systemsCounter.innerHTML = '0' + (systemsi+ 1) + '/';
    rangesystems.value = systemsi+ 1;
    systemsArr[systemsi].classList.add('systems-portfolio-slider-active-card');
    console.log('prev');
}

nextsystems.addEventListener('click', systemsNext);
prevsystems.addEventListener('click', systemsPrev);
rangesystems.addEventListener('input', systemsRange);