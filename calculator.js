const calculator = {
  sum(a, b){
    if(this.checkValid(a, b) === true){
      return a + b;
    }
    else{
      return 'One of the inputs was not a number!';
    }
  },

  subtract(a, b){
    if(this.checkValid(a, b) === true){
      return a - b;
    }
    else{
      return 'One of the inputs was not a number!';
    }
  },

  multiply(a, b){
    if(this.checkValid(a, b) === true){
      return a * b;
    }
    else{
      return 'One of the inputs was not a number!';
    }
  },

  divide(a, b){
    if(this.checkValid(a, b) === true){
      return a / b;
    }
    else{
      return 'One of the inputs was not a number!';
    }
  },

  checkValid(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
      return true;
    }
    else{
      return false;
    }
  },
};

export default calculator;
