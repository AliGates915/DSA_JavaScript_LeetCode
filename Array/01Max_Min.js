// const array = [10, 5, 8, 12, 3, 7];

// const maxValue = Math.max(...array);
// const minValue = Math.min(...array);

// console.log('Max value:', maxValue);
// console.log('Min value:', minValue);


const array = [10, 5, 8, 12, 3, 7];

const maxValue = array.reduce((max, current) => (current > max ? current : max), array[0]);
const minValue = array.reduce((min, current) => (current < min ? current : min), array[0]);

console.log('Max value:', maxValue);
console.log('Min value:', minValue);
