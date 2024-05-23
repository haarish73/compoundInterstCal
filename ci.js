function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    // const amount = parseFloat(document.getElementById('amount').value);
    const number = parseFloat(document.getElementById('number').value);
    const time = parseFloat(document.getElementById('time').value);
  
    if (isNaN(principal) || isNaN(rate) ||  isNaN(number) || isNaN(time)) {
      document.getElementById('result').innerText = 'Please enter valid numbers';
      return;
    }
  
    // Compound Interest Formula: A = P (1 + r/n)^(nt)
    const compoundInterest = principal * Math.pow((1 + rate / (number * 100)), (number * time));
  
    document.getElementById('result').innerText = `The Compound Interest is ${compoundInterest.toFixed(2)}`;
  }
  