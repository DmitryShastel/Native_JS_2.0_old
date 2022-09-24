import {sum} from "../Test_Functions";


test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 1;
    const c = 1;

    //action
    const result = sum(a,b);

    //expected result
    expect(result).toBe(2);
})


