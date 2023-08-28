function randomNumber({ min = 0, max = 1, int = !1 }) {
    const { random, round } = Math, randomRes = random() * (max - min);

    return min + (int ? round(randomRes) : randomRes);
};

export { randomNumber };

function randomNumbers(...nums) {
    return nums.map(randomNumber);
};

export default randomNumbers;