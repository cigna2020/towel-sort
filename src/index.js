module.exports = function towelSort(matrix = []) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        if (matrix.indexOf(matrix[i]) % 2 !== 0) {
            matrix[i].reverse()
        }
        for (let j = 0; j < matrix[i].length; j++) {
            res.push(matrix[i][j])
        }
    }
    return res;
}