const bigDivisor = (n) => {
    const iter = (acc) => {
        if (acc > n / 2) {
            return n;
        }
        if (n % acc === 0) {
            return acc;
        }
        return iter(acc + 1);
    }
    return iter(2);
};