import { RemoveExtraSpaces, Capitalise, Minimalise, WordCasealise } from './ejercicio5.js';

describe('Test CapitaliseFirstWord()', () => {
    
  test('1a letra Mayúscula', () => {
    let string = "Once upon a time..";
    expect(Capitalise(string)[0]).toBe('O');
  });
    
  test('1a letra Minuscula ', () => {
      let string = "afasfsafdsf..";
      expect(Capitalise(string)[0]).toBe('A');
    });
   
  test('Remove extra spaces.', () => {
    let string = "   Once   upon  a time..";
    expect(RemoveExtraSpaces(string)).toBe('Once upon a time..');
  });
});

describe('Test CapitalizeFirstLetter()', () => {

  test('All lowercase string to Capital Letters', () => {
    let string = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    expect(WordCasealise(string)[0]).toBe('L');
    expect(WordCasealise(string)[6]).toBe('I');
    expect(WordCasealise(string)[WordCasealise(string).length - 5]).toBe('E');
  });
});

describe('Test MinimaliseText()', () => {

  test('ALL CAPS to lower case', () => {
    let string = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
    // console.log('MinimaliseText(' + string + ') => ' + MinimaliseText(string));
    expect(Minimalise(string)[0]).toBe('t');
    expect(Minimalise(string)[4]).toBe('q'); 
  });
});
