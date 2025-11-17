/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let xCopy = x
    let reverse = 0
    x = Math.abs(x)
    while (x > 0) {
        let rem = x % 10
        reverse = (reverse * 10) + rem
        x = Math.floor(x / 10)
    }
    let limit = Math.pow(2, 31)
    if (reverse < -limit || reverse > limit) {
        return 0
    }
    return (xCopy > 0) ? reverse : -reverse
};