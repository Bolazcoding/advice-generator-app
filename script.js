'use strict';

import desktop_divider from 'url:./images/pattern-divider-desktop.svg';
import mobile_divider from 'url:./images/pattern-divider-mobile.svg';

const adviceGenerator = async function () {
  const parentEl = document.querySelector('.advice-container');
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();

    const markup = `
        <div class="advice-body">
          <p class="advice-index">Advice ${data.slip.id}</p>
          <p class="advice-text">
            ${data.slip.advice}
          </p>
          <img
            class="advice-img desktop-divider"
            src="${desktop_divider}"
            alt="pattern-divider-desktop"
          />
          <img
            class="advice-img mobile-divider"
            src="${mobile_divider}"
            alt="pattern-divider-mobile"
          />
          <div class="btn-change-advice"></div>
        </div>
        `;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup);

    const advicebtn = document.querySelector('.btn-change-advice');

    advicebtn.addEventListener('click', function () {
      adviceGenerator();
    });
  } catch (err) {
    alert('Something went wrong, failed to load advice.');
  }
};

adviceGenerator();
