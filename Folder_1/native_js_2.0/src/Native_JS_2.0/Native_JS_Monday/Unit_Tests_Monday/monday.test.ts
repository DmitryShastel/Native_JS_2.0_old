import {mult, splitWords, sum} from "../Test_Functions";


test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 1;

    //action
    const result = sum(a,b);

    //expected result
    expect(result).toBe(2);
})
test('mult should be correct', () => {
    //data
    const a = 2;
    const b = 3;

    //action
    const result = mult(a,b);

    //expected result
    expect(result).toBe(6);
})

test('splitWords should be correct', () => {
    //data
    const sentence1 = 'Hello my friends!';
    const sentence2 = 'JS - the best    of programing language.';


    //action
    const result1 = splitWords(sentence1);
    const result2 = splitWords(sentence2);

    //expected result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('of');
    expect(result2[4]).toBe('programing');
    expect(result2[5]).toBe('language');
})


