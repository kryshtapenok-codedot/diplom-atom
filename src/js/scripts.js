// Landing Screen - Typed words
const heroTicker = document.querySelector('.hero-ticker');
if (heroTicker) {
  new Typed('.hero-ticker span', {
    strings: [
      'build the future',
      'take a leap',
      'solve big problems',
      'build together',
    ],
    typeSpeed: 85
  });
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


// Landing Screen - Visible
const hero = document.querySelector('.hero');
if (hero) {
  const heroShowed = getCookie("heroShowed");
  if (heroShowed === "") {
    hero.style.visibility = 'visible';
    hero.style.opacity = '1';
  }

  function setHeroShowed() {
    hero.style.visibility = 'hidden';
    hero.style.opacity = '0';
    if (heroShowed === "") {
      document.cookie = 'heroShowed=true';
    } else {
      window.removeEventListener('scroll', setHeroShowed)
    }
  }

  const heroScrollBtn = hero.querySelector('.hero-scroll');
  heroScrollBtn.addEventListener('click', event => {
    event.preventDefault()
    setHeroShowed()
  });

  window.addEventListener('scroll', setHeroShowed)
}


// Modal Events

const modalButtons = document.querySelectorAll('[data-modal]')
const overlay = document.querySelector('.overlay');
if (modalButtons.length) {
  [...modalButtons].map(modalBtn => {
    const modalClass = modalBtn.dataset.modal;
    modalBtn.addEventListener('click', event => {
      event.preventDefault()
      const modal = document.querySelector(modalClass);

      modal.classList.add('show');
      overlay.classList.add('show');
    });
  });

  [...document.querySelectorAll('.modal-close')].map(closeBtn => {
    closeBtn.addEventListener('click', event => {
      event.preventDefault()
      closeBtn.parentNode.classList.remove('show');
      overlay.classList.remove('show');
    });
  });
}
