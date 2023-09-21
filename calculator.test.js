import calculator from './calculator';

test('sum(1, 2) to be 3', ()=>{
  expect(calculator.sum(1, 2)).toBe(3);
});

test('sum(-12, 20) to be 8', () =>{
  expect(calculator.sum(-12, 20)).toBe(8);
});

test('sum(-12, -12) to be -24', () =>{
  expect(calculator.sum(-12, -12)).toBe(-24);
});

test('sum("12", 12) to be "One of the inputs was not a number!"', () =>{
  expect(calculator.sum('-12', 12)).toBe('One of the inputs was not a number!');
});

test('subtract(1, 2) to be -1', ()=>{
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtract(-12, 20) to be -32', () =>{
  expect(calculator.subtract(-12, 20)).toBe(-32);
});

test('subtract(-12, -12) to be 0', () =>{
  expect(calculator.subtract(-12, -12)).toBe(0);
});

test('subtract("12", 12) to be "One of the inputs was not a number!"', () =>{
  expect(calculator.subtract('-12', 12)).toBe('One of the inputs was not a number!');
});

test('multiply(1, 2) to be 2', ()=>{
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('multiply(-12, 20) to be -240', () =>{
  expect(calculator.multiply(-12, 20)).toBe(-240);
});

test('multiply(-12, -12) to be 144', () =>{
  expect(calculator.multiply(-12, -12)).toBe(144);
});

test('multiply("12", 12) to be "One of the inputs was not a number!"', () =>{
  expect(calculator.multiply('-12', 12)).toBe('One of the inputs was not a number!');
});

test('divide(1, 2) to be 0.5', ()=>{
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('divide(-12, 20) to be -0.6', () =>{
  expect(calculator.divide(-12, 20)).toBe(-0.6);
});

test('divide(-12, -12) to be 1', () =>{
  expect(calculator.divide(-12, -12)).toBe(1);
});

test('divide("12", 12) to be "One of the inputs was not a number!"', () =>{
  expect(calculator.divide('-12', 12)).toBe('One of the inputs was not a number!');
});