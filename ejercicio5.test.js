import { FirstLetterCapitalised } from './ejercicio5.js';

describe('Test FirstLetterCapitalised()', () => {
    
    test('1a letra Mayúscula', () => {
      let string = "Once upon a time..";
      expect(FirstLetterCapitalised(string)[0]).toBe('O');
    });
    
    test('1a letra Minuscula ', () => {
        let string = "afasfsafdsf..";
        expect(FirstLetterCapitalised(string)).toBe('A');
      });

    // test('Test ConvertStringTo', () => {
    //   let string = "abcdefgh";
    //   expect(FindRepeatChar(string)).toBe(-1);
    // });

    // test('This function should ignore any spaces and should be __case insensitive__ - treat \'a\' as eqivalent to \'A\'.', () => {
    //     let string = "abc deEfgh"
    //     expect(FindRepeatChar(string)).toBe(4);
    // });
  });
