module.exports = (ms) => [
    Math.floor((ms / (1000 * 60 * 60)) % 24),
    Math.floor((ms / (1000 * 60)) % 60),
    Math.floor((ms / 1000) % 60)
].map(nr => nr < 10 ? "0" + nr : nr).join(":");
