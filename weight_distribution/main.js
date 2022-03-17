const objContainers = [
    {"nr": 1, "weight": 23},
    {"nr": 2, "weight": 22},
    {"nr": 3, "weight": 11},
    {"nr": 4, "weight": 10},
    {"nr": 5, "weight": 9},
    {"nr": 6, "weight": 9},
    {"nr": 7, "weight": 8},
    {"nr": 8, "weight": 8},
    {"nr": 9, "weight": 8},
    {"nr": 10, "weight": 7},
    {"nr": 11, "weight": 7},
    {"nr": 12, "weight": 6}
];

console.log(objContainers);

let bay1 = [0,0,0,0];
let bay2 = [0,0,0,0];
let bay3 = [0,0,0,0];

console.log(bay1);
console.log(bay2);
console.log(bay3);

function getBayWeight (bayNumber) {
    return bayNumber.reduce((a, b) => a + b, 0);
}

const weights = objContainers.map(container => {
    return container.weight;
});
console.log(weights);


function weightDistribution () {
    for (let c = 0; c < weights.length; c++) {
        let heaviestContainer = Math.max(parseInt(weights));

        if (getBayWeight(bay1) == 0) {
            bay1.push(heaviestContainer);
        }
    };
};
console.log(bay1);
console.log(bay2);
console.log(bay3);