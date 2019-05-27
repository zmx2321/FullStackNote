// 如果index.js不暴露，用window.add
// const add = (a) => {
window.add = (a) => {
    // return a + 1;
    if (a == 1) {
        return 1;
    } else {
        return a + 1;
    }
}

// module.exports = add;