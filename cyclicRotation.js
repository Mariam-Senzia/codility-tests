// rotate,shift to right by one index;
// A = arr , K = no of times

function solution(A,K) {
    if (A.length === 0) {
        return A
    } else {
        for (i = 0; i < K; i++){
            /// remove last char append to arr;unshift
            A.unshift(A.pop())
            console.log(A)
        }
        return A
    }

} 

console.log(solution([],3))