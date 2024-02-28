// binary gap = 0s len
// function returns len ogf longest binary if integer is + ;
//       returns 0 if N has no binary gap

function solution(N) {
    const binaryString = N.toString(2);
    // console.log(binaryString)

    let longestGap = 0;
    let currentGap = 0;
    let counting = false;

    for(let x of binaryString){
        if (x === '1'){
            if (counting) {
                longestGap = Math.max(longestGap, currentGap);
            } else {
                counting = true;
            }

           currentGap = 0; 
        } else {
            if(counting) {
                currentGap += 1;
            }
        }
    }

    return longestGap;
}
let result = solution(529)
console.log(result)