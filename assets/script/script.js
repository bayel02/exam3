  let op;
  let func  = () => {
    let result;
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result
        }
        break;
      default:
        result
    }

    document.querySelector("#result").innerHTML = result;
  }
  
  
  
  
  