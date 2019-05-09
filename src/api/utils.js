module.exports = {
    range: (startAt = 0, size) => [...Array(size).keys()].map(i => i + startAt)
};