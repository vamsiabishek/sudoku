const x = null;
const model1 = [
    [4, 1, 9, x, 8, x, x, x, x],
    [5, x, 8, x, x, x, x, x, 6],
    [x, x, x, 5, x, x, x, x, x],
    [x, 9, x, 6, x, x, x, x, 4],
    [x, 4, x, x, x, x, x, x, 3],
    [6, x, x, 2, 9, x, x, 8, x],
    [x, x, 2, 3, x, 1, x, x, x],
    [x, x, x, x, x, 9, 2, 5, x],
    [x, 7, x, x, x, x, x, x, x]
];
const model2 = [
    [x, 2, x, x, x, x, 3, 9, x],
    [9, x, x, x, x, x, 8, x, x],
    [x, 1, x, x, 5, 9, x, x, x],
    [x, x, 9, x, x, x, 4, x, x],
    [8, x, 4, 5, x, x, x, x, 9],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, 4, 3, x, x, 2, 7],
    [2, x, 6, 7, 1, x, x, x, 3]
]
// modified version of model2 from above to have one solution
const model2Modified = [
    [4, 2, x, x, x, x, 3, 9, x],
    [9, 7, x, x, x, x, 8, x, x],
    [x, 1, x, x, 5, 9, x, x, x],
    [x, x, 9, x, x, x, 4, x, x],
    [8, x, 4, 5, x, x, x, x, 9],
    [x, x, x, x, x, 7, x, x, x],
    [x, x, x, x, x, 5, x, x, x],
    [x, x, x, 4, 3, x, x, 2, 7],
    [2, x, 6, 7, 1, x, x, x, 3]
]
const model3 = [
    [1, x, x, 5, x, x, x, 3, x],
    [2, x, x, x, 7, x, x, x, 1],
    [x, x, x, x, x, x, x, x, 8],
    [6, x, x, x, x, 5, x, x, x],
    [x, x, x, 2, x, 3, 9, x, x],
    [x, 9, 3, x, x, x, x, 7, x],
    [x, x, 4, x, x, x, x, x, x],
    [8, x, 7, x, x, x, 5, x, x],
    [3, x, x, x, 4, 2, x, x, x],
]
const model4 = [
    [x, x, x, 2, 4, 8, 5, x, x],
    [x, 4, 9, x, 6, x, x, x, x],
    [x, 8, x, x, x, x, x, x, x],
    [x, x, x, 6, x, x, x, x, 2],
    [x, x, x, x, x, x, 3, x, x],
    [x, 5, x, 8, 3, x, x, 7, x],
    [x, 1, x, x, x, x, x, 9, x],
    [2, x, x, x, 9, x, 7, 5, x],
    [x, x, x, x, x, x, x, x, 8],
]
module.exports = {
    model1,
    model2,
    model3,
    model4,
    model2Modified
}