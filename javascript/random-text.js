function count() {
  let letters = '1';
  let numbers = '0';
  let string = numbers + letters;
  let allCounters = document.querySelectorAll('.title > .random');

  allCounters.forEach(function (el) {
    let duration = 1000 + Array.from(allCounters).indexOf(el) * 500;
    let interval = setInterval(function () {
      el.innerText = string.charAt(Math.random() * string.length);
      duration = duration - 500;
      if (duration <= 0) {
        clearInterval(interval);
        el.innerText = el.getAttribute('data-final');
      }
    }, 120);
  });
}

count();

//   document.addEventListener('click', count)
