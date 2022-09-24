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
            .replace('!','')
            .replace('.','')
            .replace(',',''))
}