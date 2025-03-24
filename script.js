const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    
    if (value === 'C') {
      expression = '';
      display.value = '';
    } else if (value === 'DEL') {
      expression = expression.slice(0, -1);
      display.value = expression.trim();
    } else if (value === '=') {
      try {
        const result = eval(expression.trim());
        display.value = result;
        expression = result.toString();
      } catch (error) {
        display.value = 'Error';
        expression = '';
      }
    } else {
      expression += value;
      display.value = expression.trim();
    }
  });
});