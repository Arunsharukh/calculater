document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          if (currentInput) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = '';
          }
        } else if (value === '.') {
          if (!currentInput.includes('.')) {
            currentInput += value;
          }
        } else if (button.id === 'equals') {
          if (firstOperand !== null && operator) {
            const secondOperand = parseFloat(currentInput);
            switch (operator) {
              case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
              case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
              case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
              case '/':
                currentInput = (firstOperand / secondOperand).toString();
                break;
            }
            firstOperand = null;
            operator = '';
          }
        } else if (button.id === 'clear') {
          currentInput = '';
          operator = '';
          firstOperand = null;
        } else {
          currentInput += value;
        }
  
        display.value = currentInput;
      });
    });
  });