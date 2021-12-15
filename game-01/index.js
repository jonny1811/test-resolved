const arrayNumbers = [2, 5, 8, 14, 0];
const sum = 16;

function subsetSum (arrNum, sum) {
    let set = new Set();
    let res = [];
    for (let i = 0; i < arrNum.length; i++) {
        // subtraction of the total with the present value
        const temp = sum - arrNum[i]; 
        
        // Check if the subtraction result 
        // already exists within the Set
        if (set.has(temp)) {
            res.push(arrNum[i], temp)
            return res;
        }
        
        // load the current value into the Set to check later
        set.add(arrNum[i]);
    }
}

console.log(subsetSum(arrayNumbers, sum));