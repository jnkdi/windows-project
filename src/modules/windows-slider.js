const windows = document.querySelector('.windows');
const windowsArr = document.querySelectorAll('.windows-portfolio-slider-card');
const windowsCard = document.querySelector('.windows-portfolio-slider-card');
const nextWindows = document.querySelector('.windows-slider-next');
const prevWindows = document.querySelector('.windows-slider-prev');
const rangeWindows = document.querySelector('.windows-portfolio .input-range');

let windowsCounter = document.querySelector('.windows-portfolio .is');
let windowsOffset = 0;
let windowsi= 0;

function windowsRange() {
    const windowsCardWidth = window.getComputedStyle(windowsCard).width;
    const cardWidth = Number(windowsCardWidth.slice(0, windowsCardWidth.length - 2));
    windowsi= rangeWindows.value - 1;
    if (window.innerWidth >= 1366) {
      if(windowsi< 6) { 
        windowsOffset = -(windowsi) * (cardWidth + 40);
        windows.style.left = windowsOffset + 'px';
      }
    } else if (window.innerWidth <= 768) {
      if(windowsi< 7) { 
        windowsOffset = -(windowsi) * (cardWidth + 20);
        windows.style.left = windowsOffset + 'px';
        console.log(windowsOffset);
      }
    } else {
      if(windowsi< 7) { 
        windowsOffset = -(windowsi) * (cardWidth + 40);
        windows.style.left = windowsOffset + 'px';
      }
    }
    windowsArr.forEach((e) => {
      e.classList.remove('windows-portfolio-slider-active-card');
    });
    windowsArr[windowsi].classList.add('windows-portfolio-slider-active-card');
    windowsCounter.innerHTML = '0' + (windowsi+ 1) + '/';
  }

function windowsNext() {
    const windowsCardWidth = window.getComputedStyle(windowsCard).width;
    const cardWidth = Number(windowsCardWidth.slice(0, windowsCardWidth.length - 2));
    windowsi++;
    if (window.innerWidth >= 1366) {
      if (windowsi < 6) {
        windowsOffset -= (cardWidth + 40); //img width
      }
    } else {
      windowsOffset -= (cardWidth + 40); //img width
    }
    
    if(windowsi> 6) {
      windowsi= 0;
      windowsOffset = 0;
    }
    windows.style.left = windowsOffset + 'px';
  
    windowsArr.forEach((e) => {
      e.classList.remove('windows-portfolio-slider-active-card');
    });
    windowsCounter.innerHTML = '0' + (windowsi+ 1) + '/';
    rangeWindows.value = windowsi+ 1;
    windowsArr[windowsi].classList.add('windows-portfolio-slider-active-card');
}

function windowsPrev() {
    const windowsCardWidth = window.getComputedStyle(windowsCard).width;
    const cardWidth = Number(windowsCardWidth.slice(0, windowsCardWidth.length - 2));
    windowsi--;
    if (window.innerWidth >= 1366 ) {
      if (windowsi > 0) {
        windowsOffset += (cardWidth + 40); //img width
      }
    } else {
      if (windowsi > 0) {
        windowsOffset += (cardWidth + 40); //img width
      }
    }

    if (windowsi< 0) {
      windowsi= 6;
      windowsOffset = -6 * (cardWidth + 40);
    }
    windows.style.left = windowsOffset + 'px';
  
    windowsArr.forEach((e) => {
      e.classList.remove('windows-portfolio-slider-active-card');
    });
    windowsCounter.innerHTML = '0' + (windowsi+ 1) + '/';
    rangeWindows.value = windowsi+ 1;
    windowsArr[windowsi].classList.add('windows-portfolio-slider-active-card');
}

nextWindows.addEventListener('click', windowsNext);
prevWindows.addEventListener('click', windowsPrev);
rangeWindows.addEventListener('input', windowsRange);