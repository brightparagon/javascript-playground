function tick(counter) {
  const sec = document.querySelector('.clock .sec');
  const min = getHand('.clock .min');
  const hour = getHand('.clock .hour');

  sec.style.transform = `rotate(${counter.getCount()}deg)`;

  counter.increase(30);
}

function getHand(selector) {
  return document.querySelector(selector);
}

function createCounter() {
  let count = 0;

  return {
    getCount: function() {
      return count; 
    },
    increase: function(deg) {
      count += deg;
    }
  };
}

const counter = createCounter();
setInterval(() => {tick(counter)}, 1000);
