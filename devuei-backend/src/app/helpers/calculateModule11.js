module.exports = (number) => {
    const sequel = [4, 3, 2, 9, 8, 7, 6, 5];
    let module11variable = 0;
    let module11divider = 0;

    for (let i = 0; i < number.length; i++) {
        const multiplicator = sequel[module11divider];
        module11divider++;
        module11divider %= sequel.length;
        module11variable += multiplicator * parseInt(number.charAt(i));
    }

    const DAC = module11variable % 11;

    if (DAC === 0 || DAC === 1)
        return 0;
    if (DAC === 10)
        return 1;

    return (11 - DAC).toString();
};
