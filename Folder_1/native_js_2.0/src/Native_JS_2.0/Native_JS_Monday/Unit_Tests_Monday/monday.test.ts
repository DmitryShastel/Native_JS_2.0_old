import {sum} from "../Test_Functions";


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
    const b = 2;

    //action
    const result = sum(a,b);

    //expected result
    expect(result).toBe(4);
})


