module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
        return false;
    }

    let arr = str.split('');

    let count = 0;
    // ' | ( | ) '
    // [
    //     ['(', ')'],
    //     ['|', '|']
    // ];
    arr.forEach((bracket) => {
        if (count < 0) {
            return false;
        }
        for (let j = 0; j < bracketsConfig.length; j++) {
            // проверем на открывающуюся скобку
            if (bracket === bracketsConfig[j][0]) {
                count++
            } else if (bracket === bracketsConfig[j][1]) {
                count--
            } else {
                break;
            }
        }
    });

    return count === 0;
}
