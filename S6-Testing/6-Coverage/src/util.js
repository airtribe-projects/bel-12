function processNumber(a, b) {
    let result = a + b; 
    if (result > 10) { 
        result = result * 2; return result;
    } else {  
        result = (a * b) +
          (a - b);
    }
  return result; 
}