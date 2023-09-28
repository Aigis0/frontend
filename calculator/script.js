let result = '';
//append button function
function appendToResult(value) {
  result += value;
  document.getElementById('result').value = result;
}

// the equals button function
function calculate() {
  try {
    result = eval(result).toString();
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

//the clear screen function
function clearResult() {
  result = '';
  document.getElementById('result').value = result;
}

//the percentage button function 
function calculatePercentage() {
  try {
      const currentValue = eval(document.getElementById('result').value);
      const percentageResult = (currentValue / 100) ;
      document.getElementById('result').value = percentageResult;
  } catch (error) {
      document.getElementById('result').value = 'Error';
  }
}

//the backspace(<) functions
function backspace() {
  const currentValue = document.getElementById('result').value;
  const newValue = currentValue.slice(0, -1);
  document.getElementById('result').value = newValue;
  result = newValue; 
}