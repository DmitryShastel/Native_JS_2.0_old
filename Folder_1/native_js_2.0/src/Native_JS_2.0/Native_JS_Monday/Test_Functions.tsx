export let sum = (a: number, b: number) => {
    return a + b
}
export let mult = (a: number, b: number) => {
    return a * b
}
export let splitWords = (sentence: string) => {
    const words = sentence.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', ''))
}

export const sum2 = (a: number, b: number) => a + b;

export const average = (nums: number[]) => {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum / nums.length;
}

