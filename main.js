let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', function (e) {
    let btnText = e.target.innerText;
    if (btnText === 'C') {
      input.value = '';
    } else if (btnText === '=') {
      try {
        input.value = eval(input.value);
      } catch (err) {
        input.value = 'Invaild';
      }
    } else {
      input.value += btnText;
    }
  });
}
