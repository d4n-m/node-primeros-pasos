import { CapitaliseFirstWord, CapitaliseFirstLetter, MinimaliseText } from './ejercicio5.js';

describe('Test CapitaliseFirstWord()', () => {
    
  test('1a letra Mayúscula', () => {
    let string = "Once upon a time..";
    expect(CapitaliseFirstWord(string)[0]).toBe('O');
  });
    
  test('1a letra Minuscula ', () => {
      let string = "afasfsafdsf..";
      expect(CapitaliseFirstWord(string)[0]).toBe('A');
    });
});

describe('Test CapitalizeFirstLetter()', () => {

  test('All lowercase string to Capital Letters', () => {
    let string = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    expect(CapitaliseFirstLetter(string)[0]).toBe('L');
    expect(CapitaliseFirstLetter(string)[6]).toBe('I');
    expect(CapitaliseFirstLetter(string)[CapitaliseFirstLetter(string).length - 5]).toBe('E');
  });
});

describe('Test MinimaliseText()', () => {

  test('ALL CAPS to lower case', () => {
    let string = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
    console.log('MinimaliseText(' + string + ') => ' + MinimaliseText(string));
    expect(MinimaliseText(string)[0]).toBe('t');
    expect(MinimaliseText(string)[4]).toBe('q'); 
  });
});
